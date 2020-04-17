# How it works

Now dependencies and apiKey are done, let's write some JSX.

## HTML structure

Create the container for the application with a selector easily accessible.

```html
<div id="tumblr-app">
    <!-- App will be render here -->
</div>
```

## Instanciation

Then, we will create the Tumblr application.

```javascript
const tumblr = new Tumblr({
    element: null,
    host: '',
    apiKey: '',
    limitData: 250,
    cache: false,
    cacheMethod: 'sessionStorage',
    nearBottom: 350,
    elementsPerPage: 20,
    templates: {}
})
```

## Options

### element

- Type: `HTMLElement`
- Default: `null`

The HTML element where the application will build the Tumblr.

### host

- Type: `String`
- Default: `''`

The Tumblr url, for example `yoriiis.tumblr.com`. The API will fetch datas from this Tumblr.

### apiKey

- Type: `String`
- Default: `''`

Tells Tumblr the API key to use API.

### limitData

- Type: `Integer`
- Default: `250`

Number of posts get from the API. Theses posts are used to generate following features:

- List of tags
- Related posts associated to a specific post
- Improve infinite scroll performance for firsts scolling requests

### cache

- Type: `Boolean`
- Default: `false`

Tells the library whether to store API datas in the browser storage. This option improve performance, because application retrieves datas from the browser storage and no requests are executed on the first page.

::: warning Cache priotity
If `cache` option is enabled and you contribute on Tumblr in parallel and need to see last updates, you will probably need to remove datas from browser storage.
:::

### cacheMethod

- Type: `String`
- Default: `'sessionStorage'`

Tells the library the method to use with browser storage (`sessionStorage` or `localStorage`).

### nearBottom

- Type: `Integer`
- Default: `350`

Tells the library from how many pixels from the bottom of the page the infinite scroll will trigger new requests.

### elementsPerPage

- Type: `Integer`
- Default: `20`

Tells the library how many posts are display by page, for the first page request and next page requests.

### templatesPages

- Type: `Object`
- Default: `{}`

Tells the library whether to override default templates for pages (home, tagged, post).

### templatesPosts

- Type: `Object`
- Default: `{}`

Tells the library whether to override default templates for posts (audio, chat, link, photo, quote, text, video).
