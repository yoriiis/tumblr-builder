# Tumblr-app

![Tumblrjs](https://img.shields.io/badge/tumblr-v2.0.0-546e7a.svg?style=for-the-badge) [![GitlabCI](https://img.shields.io/gitlab/pipeline/yoriiis/tumblr/develop?style=for-the-badge)](https://gitlab.com/yoriiis/tumblr/pipelines) [![Netlify Status](https://img.shields.io/netlify/cfe5ccb9-b063-4ca0-81d7-9492bfae8754?style=for-the-badge)](https://app.netlify.com/sites/tumblrjs/deploys)

`Tumblr-app` is a client Javascript library works with Tumblr to expand these capabilities and add somes fun and powerfull features such as lists of tags, related posts and outside of the box capability and off course, infinite scroll.

## Installation

The library is available as the `tumblr-app` package name on [npm](https://www.npmjs.com/package/tumblr-app).

```bash
npm i --save-dev tumblr-app
```

```bash
yarn add --dev tumblr-app
```

## Demo

Online demo is available on Tumblr [yoriiis.tumblr.com](https://yoriiis.tumblr.com) and outide of the box in Netflify [tumblrjs.netlify.com](https://tumblrjs.netlify.com).

The project includes also examples of `Tumblr-app` implementation in the directory `./example/`.

## How it works

### API

`Tumblr-app` use Tumblr [API v2](https://www.tumblr.com/docs/en/api/v2) and need a valid `apiKey`.

First, [register your application](https://www.tumblr.com/oauth/register) and get the `apiKey`.

### HTML structure

Next, create the container of the application with a selector easily accessible.

```html
<div id="tumblr-app"></div>
```

### Basic usage

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

### Options

#### `element`

`HTMLElement = null`

The HTML element where the application will build the Tumblr.

#### `host`

`String = ''`

The Tumblr url, for example `yoriiis.tumblr.com`. The API will fetch datas from this Tumblr.

#### `apiKey`

`String = ''`

Tells Tumblr the API key to use API.

#### `limitData`

`Integer = 250`

Number of posts get from the API. Theses posts are used to generate following features:

* List of tags
* Related posts associated to a specific post
* Improve infinite scroll performance for firsts scolling requests

#### `cache`

`Integer = false`

Tells the library whether to store API datas in the browser storage. This option improve performance, because application retrieves datas from the browser storage and no requests are executed on the first page.

> If `cache` option is enabled and you contribute on Tumblr in parallel and need to see last updates, you will probably need to remove datas from browser storage.

#### `cacheMethod`

`String = sessionStorage`

Tells the library the method to use with browser storage (`sessionStorage` or `localStorage`).

#### `nearBottom`

`Integer = 350`

Tells the library from how many pixels from the bottom of the page the infinite scroll will trigger new requests.

#### `elementsPerPage`

`elementsPerPage = 20`

Tells the library how many posts are display by page, for the first page request and next page requests.

#### `templates`

`templates = {}`

Tells the library whether to override default templates. More information about [custom templates](#custom-templates) in the section below.

## Available methods

The library exposes following functions. All functions except `init()` must be executed inside the `init()` Promise returns.

> Functions `getAllTags` and `getRelatedPosts` executed research in the collection of posts get from the API according to the `options.limitDatas`. The limit can be adjust to fit your need.

### `init`

The `init()` function initialize and build the Tumblr application. The function exposes all datas from the API `totalPosts`, `posts` and `tags`.

```javascript
tumblr.init().then(response => {
    // Tumblr is ready
})
```

### `getAllTags`

The `getAllTags()` function get the list of all tags associates to posts.

```javascript
tumblr.init().then(function(response) {
    const tags = this.getAllTags()
})
```

### `getRelatedPosts`

The `getRelatedPosts()` function get related posts according to a specific post.

```javascript
tumblr.init().then(function(response) {
    const relatedPosts = this.getRelatedPosts({
        postId: '614498886036422656',
        tags: ['picture', 'gallery'],
        limit: 3,
        ignoreTags: ['gif']
    }
})
```

The `getRelatedPosts()` function has 4 parameters:

#### `postId`

`String = ''`

Tells the function the id of the associated post.

#### `tags`

`Array = []`

Tells the function the list of tags of the associated post.

#### `limit`

`Integer = 3`

Tells the function the limit of results to return.

#### `ignoreTags`

`Array = []`

Tells the function the list of tags to ignore for the research.

## Custom templates

## Licence

`Tumblr-app` and his documentation are licensed under the [MIT License](http://opensource.org/licenses/MIT).

Created with ♥ by [@yoriiis](http://github.com/yoriiis).
