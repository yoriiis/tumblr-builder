# How it works

Now dependencies and API key are done, let's write our first custom Tumblr blog.

## HTML structure

Create the container for the app with a selector easily accessible.

```html
<div id="tumblr-app">
  <!-- App will be render here -->
</div>
```

## Initialize

Then, we will initialize the constructor. **Highlight lines are mandatory parameters.**

```javascript{2,3,4}
const tumblr = new TumblrBuilder({
  element: null,
  host: "",
  apiKey: "",
  limitData: 250,
  cache: false,
  cacheMethod: "sessionStorage",
  nearBottom: 350,
  elementsPerPage: 20,
  templatesPages: {},
  templatesPosts: {}
});
```

Next, create the Tumblr app.

```javascript
tumblr.init().then(response => {
  // App is render and ready
});
```

## Options

### element

- Type: `HTMLElement`
- Default: `null`

The HTML element where the app will render.

### host

- Type: `String`
- Default: `''`

The Tumblr blog hostname, for example `<name>.tumblr.com`. The API will fetch datas from this blog.

### apiKey

- Type: `String`
- Default: `''`

The Tumblr API key for API usage.

### limitData

- Type: `Integer`
- Default: `250`

Number of articles to get from the API. The articles list is used to extract a list of all hashtags and find related articles relations by hashtags.

::: tip Use the browser storage
To decrease the number of API requests and improve load performance, use the `cache` option to store all datas in the browser storage.
:::

### cache

- Type: `Boolean`
- Default: `false`

Tell the library whether to store API datas in the browser storage. This option improve performance, because app retrieves datas from the browser storage and no API requests are executed on the home page.

Infinite scroll will used in priority the datas from the browser storage for firsts scrolling requests if available.

::: warning Cache priotity
If `cache` option is enabled the app will used datas from the browser storage in priority. To see the lastest updates to the app while contributing to Tumblr, you will probably need to delete datas from browser storage or use incognito navigation.
:::

### cacheMethod

- Type: `String`
- Default: `'sessionStorage'`
- Possible value: `'sessionStorage'` `'localStorage'`

Tell the method to use for the browser storage.

### nearBottom

- Type: `Integer`
- Default: `350`

Tell from how many pixels from the bottom of the page the infinite scroll will trigger new requests.

### elementsPerPage

- Type: `Integer`
- Default: `20`

Tell how many articles are display by page, for the first page request and next page requests with infinite scroll.

### templatesPages

- Type: `Object`
- Default: `{}`
- Possible value: `{home, tagged, post}`

Tell whether to override default templates for pages (home, tagged, post).

Example of implementation:

```javascript
new TumblrBuilder({
  templatesPages: {
    home: ({ templates, tags, posts }) => {},
    tagged: ({ templates, tag, posts }) => {},
    post: ({ templates, posts, relatedPosts }) => {}
  }
});
```

More information about [custom pages](custom-pages.html).

### templatesPosts

- Type: `Object`
- Default: `{}`
- Possible value: `{audio, chat, link, photo, quote, text, video}`

Tell whether to override default templates for article (audio, chat, link, photo, quote, text, video).

Example of implementation:

```javascript
new TumblrBuilder({
  templatesPosts: {
    audio: datas => {},
    chat: datas => {},
    link: datas => {},
    photo: datas => {},
    quote: datas => {},
    text: datas => {},
    video: datas => {}
  }
});
```

More information about [custom posts](custom-posts.html).
