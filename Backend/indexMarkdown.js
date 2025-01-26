const { Client } = require('@elastic/elasticsearch');
const fs = require('fs');
const path = require('path');

const client = new Client({ node: 'http://127.0.0.1:9200' });
const markdownDir = '../Frontend/docs';

async function createIndex() {
    try {
        await client.indices.create({
            index: 'markdown-files',
            body: {
                mappings: {
                    properties: {
                        title: { type: 'text' },
                        content: { type: 'text' },
                        path: { type: 'keyword' },
                    },
                },
            },
        });
        console.log('Index "markdown-files" created.');
    } catch (error) {
        if (error.meta.body.error.type === 'resource_already_exists_exception') {
            console.log('Index "markdown-files" already exists.');
        } else {
            throw error;
        }
    }
}

async function indexMarkdown(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const title = path.basename(filePath, '.md');
    const documentId = path.relative(markdownDir, filePath);

    await client.index({
        index: 'markdown-files',
        id: documentId,
        body: {
            title: title,
            content: content,
            path: filePath,
        },
    });

    console.log(`Indexed file: ${filePath}`);
}

async function indexAllMarkdown() {
    const files = fs.readdirSync(markdownDir);
    for (const file of files) {
        if (file.endsWith('.md')) {
            await indexMarkdown(path.join(markdownDir, file));
        }
    }
    console.log('All files indexed.');
}

async function indexAllMarkdownBulk() {
    const files = fs.readdirSync(markdownDir);
    const body = [];

    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(markdownDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const title = path.basename(filePath, '.md');
            const documentId = path.relative(markdownDir, filePath);

            body.push(
                { index: { _index: 'markdown-files', _id: documentId } },
                {
                    title: title,
                    content: content,
                    path: filePath,
                }
            );
        }
    }

    const { body: bulkResponse } = await client.bulk({ refresh: true, body });

    if (bulkResponse.errors) {
        const erroredDocuments = [];
        bulkResponse.items.forEach((action, i) => {
            const operation = Object.keys(action)[0];
            if (action[operation].error) {
                erroredDocuments.push({
                    status: action[operation].status,
                    error: action[operation].error,
                    operation: body[i * 2],
                    document: body[i * 2 + 1],
                });
            }
        });
        console.log('Bulk indexing encountered errors:', erroredDocuments);
    } else {
        console.log('All files indexed successfully.');
    }
}

async function main() {
    await createIndex();
    await indexAllMarkdownBulk(); // Or use indexAllMarkdown() for individual indexing
}

main().catch(console.error);
