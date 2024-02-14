---
weight: 100
date: "2023-05-03T22:37:22+01:00"
draft: false
author: "Colin Wilson"
title: "Quickstart"
icon: "rocket_launch"
toc: true
description: "A quickstart guide to creating new content in Lotus Docs"
publishdate: "2023-05-03T22:37:22+01:00"
tags: ["Beginners"]
---

## Requirements

- **git**
- **Go ≥ v1.19**
- **Hugo ≥ v0.100.0** (Extended Version)

## Install Hugo

Install the [Hugo CLI](https://github.com/gohugoio/hugo/releases/latest), using the specific instructions for your operating system below:

{{< tabs tabTotal="4">}}
{{% tab tabName="Linux" %}}

Your Linux distro’s package manager may include Hugo. If this is the case, install it directly using your distro’s package manager – for instance, in Ubuntu, run the following command. This will install the extended edition of Hugo:

```shell
sudo apt install hugo
```

{{% /tab %}}
{{% tab tabName="Homebrew (macOS)" %}}

If you use the package manager [Homebrew](https://brew.sh/), run the `brew install` command in your terminal to install Hugo:

```shell
brew install hugo
```

{{% /tab %}}
{{% tab tabName="Windows (Chocolatey)" %}}

If you use the package manager [Chocolatey](https://chocolatey.org/), run the `choco install` command in your terminal to install Hugo:

```shell
choco install hugo --confirm
```

{{% /tab %}}
{{% tab tabName="Windows (Scoop)" %}}

If you use the package manager [Scoop](https://scoop.sh/), run the `scoop install` command in your terminal to install Hugo:

```shell
scoop install hugo
```

{{% /tab %}}
{{< /tabs >}}

### Manual Installation

The Hugo GitHub repository contains pre-built versions of the Hugo command-line tool for various operating systems, which can be found on the [Releases page](https://github.com/gohugoio/hugo/releases/latest)

For more instruction on installing these releases, refer to [Hugo’s documentation](https://gohugo.io/getting-started/installing/)

## Create a New Lotus Docs Site

With Hugo installed, create a new Hugo project using the `hugo new` command:

```shell
hugo new site my-docs-site && cd my-docs-site
```

Now initialize your project as a Hugo Module using the `hugo mod init` command:

```
hugo mod init my-docs-site
```

{{% alert context="info" text="**Note**: If your site already has a git repository, you can initialise your site using the path to your site's git repository e.g. `hugo mod init github.com/<user>/<my-docs-site>/`." /%}}

You can now choose your preferred method for adding the Lotus Docs theme to your new site from the options below:

{{< tabs tabTotal="3">}}
{{% tab tabName="Add as a Hugo Module" %}}

Edit the `hugo.toml` configuration file to include the [Lotus Docs theme](https://github.com/colinwilson/lotusdocs) and the [Hugo Bootstrap module](https://github.com/gohugoio/hugo-mod-bootstrap-scss) (lines `5 to 11` below):

```toml {linenos=table,hl_lines=["5-11"]}
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    [[module.imports]]
        path = "github.com/colinwilson/lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```
{{% alert context="info" text="**Note**: Hugo ≥ v0.110.0 changed the name of the default config base filename to `hugo.toml`. If you're running an earlier version of Hugo, consider renaming your `config.toml` file to `hugo.toml`." /%}}

{{% /tab %}}
{{% tab tabName="Add as a Git submodule" %}}

Initialize Git and clone the Lotus Docs theme repository as a submodule:

```shell
git init
git submodule add https://github.com/colinwilson/lotusdocs themes/lotusdocs
```

Update your existing `hugo.toml` config file with the configuration below:

```toml {linenos=table,hl_lines=["5-11"]}
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    [[module.imports]]
        path = "lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```

{{% alert context="info" text="**Note**: Hugo ≥ v0.110.0 changed the name of the default config base filename to `hugo.toml`. If you're running an earlier version of Hugo, consider renaming your `config.toml` file to `hugo.toml`." /%}}

{{% /tab %}}
{{% tab tabName="Clone theme files" %}}

In cases where you prefer to customise and maintain the Lotus Docs theme yourself, you can clone the theme into your project’s `themes` subdirectory.

Run the following command from your project’s root directory to clone the Lotus Docs theme into your `themes` subdirectory:

```shell
git clone https://github.com/colinwilson/lotusdocs themes/lotusdocs
```

Edit the `hugo.toml` configuration file to include the Lotus Docs theme and the Hugo Bootstrap module (lines `5 to 11` below):

```toml {linenos=table,hl_lines=["5-11"]}
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    [[module.imports]]
        path = "lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```
{{< alert context="info" text="**Note**: Hugo ≥ v0.110.0 changed the name of the default config base filename to `hugo.toml`. If you're running an earlier version of Hugo, consider renaming your `config.toml` file to `hugo.toml`." />}}

{{% /tab %}}
{{< /tabs >}}

## Create New Content

Navigate to the root of your Hugo project and use the `hugo new` command to create a file in the `content/docs` directory:

```shell
hugo new docs/example-page.md
```

This will create a markdown file named `example-page.md` with the following default front matter:

```toml
+++
title = "Example Page"
description = ""
icon = "article"
date = "2023-05-22T00:27:57+01:00"
lastmod = "2023-05-22T00:27:57+01:00"
draft = false
toc = true
weight = 999
+++
```

Modify the options to suit your needs.

The code below shows the front matter code used to create this page, along with a portion of markdown from the body:

{{< prism lang="md" >}}
+++
weight = 100
date = "2023-05-03T22:37:22+01:00"
draft = true
author = "Colin Wilson"
title = "Quickstart"
icon = "rocket_launch"
toc = true
description = "A quickstart guide to creating new content in Lotus Docs"
publishdate = "2023-05-03T22:37:22+01:00"
tags = ["Beginners"]
+++

## Create New Content

Navigate to the root of your Hugo project and use the `hugo new` command to create a file in the `content/docs` directory:

```shell
hugo new docs/examplepage.md
```
...
{{< /prism >}}

## Preview your Site

Now that you've created some sample content you can preview your new Lotus Docs site using the `huge server` command:

```shell
hugo server -D
```

Navigate to `localhost:1313/docs` and you should see a card link to the **Example Page** created earlier:

![New Lotus Docs Site - Example Content](https://res.cloudinary.com/lotuslabs/image/upload/v1690992310/Lotus%20Docs/images/lotus_docs_new_site_and_content_module_setup_oiuyex.png)

## Ordering Content

Lotus Docs uses a simple weighting method for ordering content and creating menus.

The front matter `weight` variable is used to order all content and auto-generate the menu structure (including the sidebar menu and page navigation buttons). Lower weight values take higher precedence. So content with lower weights come first and are so ordered in the menu.

## Auto-Generated Menu

As mentioned, Lotus Docs auto-generates menus and navigation links using the [front matter](https://gohugo.io/content-management/front-matter/#predefined) weight variable. For example, Navigate to the `content/docs` directory and create two content files, `doc-one.md` and `doc-two.md`, then edit the weight values to `100` and `200` respectively:

{{< alert text="It's good practice to increment the weight of your posts by a factor of <code>100</code>. This ensures plenty of room to insert new posts between existing items should you need to." />}}

Your directory structure should now look like this:

```treeview
content/
└── docs/
    ├── doc-one.md
    └── doc-two.md
```

Links to both posts are now visible in the sidebar menu where `doc-one.md` will come before and be placed above `doc-two.md`:

![sidebar menu items example](https://res.cloudinary.com/lotuslabs/image/upload/v1684719173/Lotus%20Docs/images/sidebar_menu_example_01-modified_qkb2si.png)

{{< alert context="info" text="The option to manually configure a predefined menu structure in <code>hugo.toml</code> as opposed to an auto-generated one is part of the Lotus Docs roadmap." />}}

## Second Level Menu Items

Second level menu items can be generated by first creating a **'parent'** directory containing an `_index.md` file, e.g.:

```shell
hugo new docs/parent-directory/_index.md
```

The above command creates an `_index.md` file inside a directory named `parent-directory` under `content/docs`:

```treeview
content/
└── docs/
    ├── parent-directory/
    │   └── _index.md
    ├── doc-one.md
    ├── doc-two.md
    └── _index.md
```

You can now create second level items inside the `parent-directory` as normal. Run the `hugo new` command again to create a post inside the newly created `parent-directory`:

```shell
hugo new docs/parent-directory/doc-three.md
```

Your directory/file structure should now look like this:

```treeview
content/
└── docs/
    ├── parent-directory/
    │   ├── _index.md
    │   └── doc-three.md
    ├── doc-one.md
    ├── doc-two.md
    └── _index.md
```

This is reflected in the sidebar menu with `parent-directory` functioning as a dropdown menu containing a link to the **Doc Three** post:

![sidebar parent menu example](https://res.cloudinary.com/lotuslabs/image/upload/v1684802032/Lotus%20Docs/images/sidebar_menu_example_02_jsecye.png)