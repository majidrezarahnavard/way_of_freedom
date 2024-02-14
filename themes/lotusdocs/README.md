# Lotus Docs

[Lotus Docs](https://lotusdocs.dev) is an easily updated and customisable [Hugo](https://gohugo.io/) theme for building fast, secure, and SEO-friendly documentation sites.

![Lotus Docs Banner](https://res.cloudinary.com/lotuslabs/image/upload/r_10/v1693340386/Lotus%20Docs/Social%20Media/lotus_docs_social_preview_github_1280x640_colour_v1.3_xzm1ex.webp)

Check out the demo site [https://lotusdocs.dev/docs/](https://lotusdocs.dev/docs/) (also doubles as the documentation guide for Lotus Docs 📖)

## Features

* [x] Modern documentation layout
* [x] Responsive design / Mobile support
* [x] Fast, Accessible and SEO-Friendly (4 x 💯 scores on [Google Lighthouse](https://pagespeed.web.dev/)!)
* [x] Secure by default
* [x] Built on Bootstrap 5
* [x] Deploy on [GitHub Pages](https://lotusdocs.dev/docs/deployment/platforms/github-pages/), [GitLab Pages](https://lotusdocs.dev/docs/deployment/platforms/gitlab-pages/), [Vercel](https://vercel.com/), [Netlify](https://netlify.com), or [Cloudflare Pages](https://pages.cloudflare.com/)
* [x] Multilingual support (i18n)
* [x] Powerful Syntax Highlighting via [Prism.js](https://prismjs.com/)
* [x] Dark Mode
* [x] Custom fonts (via [Google Fonts](https://fonts.google.com/))
* [x] Custom icons (via [Google Material Symbols](https://fonts.google.com/icons?icon.style=Outlined&icon.set=Material+Symbols))
* [x] Landing page template included
* [x] Documentation sidebar menu (with optional icons)
* [x] Table of Contents menu on each page (optional)
* [x] Customisable theme accent colour
* [x] Social media links (Github, Twitter, Instagram etc)
* [x] Static Search plugin option (powered by [FlexSearch](https://github.com/nextapps-de/flexsearch), enabled by default)
* [x] Support for [DocSearch](https://docsearch.algolia.com/)
* [x] Custom shortcodes (PrismJS, Alerts, Tabs, Tables)
* [x] Analytics ([Google Analytics v4](https://analytics.google.com/analytics/web/), [Plausible Analytics](https://plausible.io/))
* [x] Cross-browser testing via [BrowserStack](https://browserstack.com)
* [x] Feedback widget
* [x] Math equations powered by [KaTeX](https://katex.org/)
* [x] [Mermaid](https://mermaid.js.org/) Support
* [x] [Open Graph](https://ogp.me/)


## Getting Started

### Requirements

- Hugo **Extended** (minimum version: 0.120.0)
- git
- Go (minimum version v1.20)

### Initialize your site as a Hugo Module

The Lotus Docs theme makes use of the [Hugo Bootstrap Module](https://github.com/gohugoio/hugo-mod-bootstrap-scss). For this reason, it's necessary to initialize your site as a Hugo Module. If your site isn't already, use the `hugo mod init` command to initialize your site as a Hugo module:

```bash
hugo mod init github.com/<username>/<your-hugo-site-name>
```

### Install Options

The Lotus Docs theme can be installed using one of the following methods:

- As a Hugo Module[^1] (recommended)
- As a Git submodule
- Clone the theme files locally

### Install as a Hugo Module (recommended)

Edit the `hugo.toml` configuration file to include the [Lotus Docs theme](https://github.com/colinwilson/lotusdocs) and the [Hugo Bootstrap module](https://github.com/gohugoio/hugo-mod-bootstrap-scss) as modules:

```toml
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

### Install as a Git Submodule

From the root of your project run the following `git` commands:

```bash
git init
git submodule add https://github.com/colinwilson/lotusdocs themes/lotusdocs
```

Edit the `hugo.toml` config file:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    # uncomment line below for temporary local development of module
    # or when using a 'theme' as a git submodule
    replacements = "github.com/colinwilson/lotusdocs -> lotusdocs"
    [[module.imports]]
        path = "github.com/colinwilson/lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```

### Install Locally

There may be cases where you prefer to customize and maintain the Lotus Docs theme yourself. In such cases, use `git` to clone the theme into the `themes/lotusdocs` directory:

```bash
git clone https://github.com/colinwilson/lotusdocs themes/lotusdocs
```

Edit the `hugo.toml` config file:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    # uncomment line below for temporary local development of module,
    # when using a 'theme' as a git submodule or git cloned files
    replacements = "github.com/colinwilson/lotusdocs -> lotusdocs"
    [[module.imports]]
        path = "github.com/colinwilson/lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```

## Create New Content

Navigate to the root of your Hugo project and use the `hugo new` command to create a file in the `content/docs` directory:

```shell
hugo new docs/example-page.md
```

This will create a markdown file named `example-page.md` with the following default front matter:

```yaml
---
title: "Example Page"
description: ""
icon: "article"
date: "2023-05-22T00:27:57+01:00"
lastmod: "2023-05-22T00:27:57+01:00"
draft: false
toc: true
weight: 999
---
```

Modify the above front matter options to suit your needs.

## Preview your site locally

Now that you've created some sample content you can preview your new Lotus Docs site using the `huge server` command:

```shell
hugo server -D
```

Navigate to `localhost:1313/docs/` and you should see a card link to the **Example Page** created earlier:

![New Lotus Docs Site - Example Content](https://res.cloudinary.com/lotuslabs/image/upload/v1690992310/Lotus%20Docs/images/lotus_docs_new_site_and_content_module_setup_oiuyex.png)

## Author

[Colin Wilson](https://github.com/colinwilson)

Copyright © 2022-2023 [Colin Wilson](https://github.com/colinwilson)

[^1]: [Hugo Modules](https://gohugo.io/hugo-modules/)