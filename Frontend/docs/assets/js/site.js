console.log('***************************************site.js is loaded');

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.md-search__input');

    if (searchInput) {
        console.log('Search input found');
        searchInput.addEventListener('input', async function(event) {
            const query = event.target.value;
            console.log('User input:', query);

            if (query.length > 2) {
                try {
                    console.log('#######################################################', query);
                    const response = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(query)}`);
                    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',response);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const results = await response.json();
                    console.log('Search results:', results);

                    const resultsContainer = document.querySelector('.md-search-result__list');
                    if (resultsContainer) {
                        resultsContainer.innerHTML = '';

                        results.forEach(result => {
                            const listItem = document.createElement('li');
                            listItem.textContent = result._source.title;
                            resultsContainer.appendChild(listItem);
                        });
                    } else {
                        console.warn('Element .md-search-result__list not found!');
                    }
                } catch (error) {
                    console.error('Search error:', error);
                }
            } else {
                const resultsContainer = document.querySelector('.md-search-result__list');
                if (resultsContainer) {
                    resultsContainer.innerHTML = '';
                }
            }
        });
        console.log('+++*************************NoonOPanir***********************************');

    } else {
        console.error('Element .md-search__input not found!');
    }
});
