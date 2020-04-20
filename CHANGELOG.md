# CHANGELOG

## 2.0.0

### New features

- Add documentation built with VuePress and host on Github pages
- Add Webpack for resources bundling
- Add Github Actions for CI
- Add linter tools: MarkdownLint, Stylelint, ESLint and Prettier
- Add examples: basic usage, custom pages, custom posts
- Add Netlify demo
- Add default template for pages and posts

### Updates

- Rework in ES6

### Breaking changes

- The library name is replaced by `TumblrBuilder`

## 1.8.0

### Updates

- Support hash in url
- Add debug mode to show log error and warning in development
- Support API V1 & V2
- Instanciation of the class simplified
- Add method to enable/disable scrollInfini
- Delete webStorage if user disable cache (avoid close tab)
- Add support webStorage session and local
- Add a option to use API or just use infiniteScroll
- Detec IE8 by feature and disable infiniteScroll because there is a limit with Tumblr (API V1 : ajax and getJSON KO. API V2 getJSON OK). Use pagination for this browser.

### Fixes

- Fix bug in loop to get data
- Fix bug IE11 and popin authentification
- Fix bug `getRelatedPost` and simplified call

### Removes

- Remove method `getFirstPushHome` (duplicate by `getPostOfPage()`)

## 1.7.0

### Updates

- Change URL of ajax request in tagged page

### Fixes

- Fix infinite scroll on tagged page

## 1.6.0

### Updates

- Encode url in `getTagPage()`, fix (#2)
- `getRelatedPosts()` use `getTagsPost()` and sessionStorage. There is a limit with related posts, only for X first post (X = limitPostInJSON). Log "Unknown idPost"
- Remove console.log

### Fixes

- Fix infinite scroll disable on tag page
- Fix number loop and `countMissingPost` in `getAllJSON()`

## 1.5.0

### Updates

- First release of `Tumblr`
- Update README
