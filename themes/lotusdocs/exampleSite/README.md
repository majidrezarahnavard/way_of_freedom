# Lotus Docs Example Site

This repository offers a multilingual example site using the [Lotus Docs](https://github.com/colinwilson/lotusdocs) Hugo theme.

# Using

1. [Install Hugo](https://gohugo.io/overview/installing/)
2. Clone this repository

    ```bash
    $ git clone --depth 1 https://github.com/colinwilson/lotusdocs lotusdocs
    $ cd lotusdocs/exampleSite
    ```
3. Run Hugo server.

    ```bash
    $ hugo server
    ```
## Notes:

The `exampleSite` functions by using the Hugo [`replace`](https://gohugo.io/hugo-modules/use-modules/#make-and-test-changes-in-a-module) directive (in [`go.mod`](go.mod#L10)) to point the default `lotusdocs` module path, `github.com/colinwilson/lotusdocs`, to the local directory above where the theme is cloned:

```go
// go.mod
...

replace github.com/colinwilson/lotusdocs => ../
```