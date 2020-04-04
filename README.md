# Tumblrjs

![Tumblrjs](https://img.shields.io/badge/tumblr-v2.0.0-546e7a.svg?style=for-the-badge) [![GitlabCI](https://img.shields.io/gitlab/pipeline/yoriiis/tumblr/develop?style=for-the-badge)](https://gitlab.com/yoriiis/tumblr/pipelines) [![Netlify Status](https://img.shields.io/netlify/cfe5ccb9-b063-4ca0-81d7-9492bfae8754?style=for-the-badge)](https://app.netlify.com/sites/tumblrjs/deploys)

New Tumblr class js which use Tumblr API and extend methods. Include infinite scroll, related posts and all tags.

## Instanciate the class

```javascript
const tumblr = new Tumblr({
    host: '',
    element: null,
    keyAPI: '',
    limitData: 250,
    cache: true,
    cacheMethod: 'sessionStorage',
    nearBottom: 350,
    elementPerPage: 2
})
```

## API

Api require a valid api key.

```javascript
keyAPI     : '',
```

## Web storage

By default cache is disable. If enable it, JSON data use the browser storage. You can choose the web storage (sessionStorage by default or localStorage), the limit of posts to cache (250 by default). Activate this functionnality in production not in development.

```javascript
limitData   : 250,
cache       : false,
cacheMethod : 'sessionStorage',
```

## Infinite scroll

```javascript
nearBottom : 450
```

## Methods

### Get related posts

**Require attach to JSON_COMPLETE event**. The function return a list of posts in object. You can use a templating engine for rendering data : Lo-Dash, Handlebars.

- **`limit`** : number of related posts (3 by default)
- **`ignoreTag`** : tag ignore in related post (optional)

```javascript
const relatedPosts = myTumblr.getRelatedPosts({
    limit: 6,
    ignoreTag: 'tumblr'
});
```

### Get all tags

**Require attach to JSON_COMPLETE event**. Get an array of all tags in the blog depending `limitPostJSON` param

```javascript
var allTags = myTumblr.getAllTags();
```

### Get tags post

**Require attach to JSON_COMPLETE event**. Get an array of all tags of current post.

```javascript
var tagsPost = myTumblr.getTagsPost();
```

Get an array of all tags of specific post id

```javascript
var tagsPost = myTumblr.getTagsPost('51726887298');
```

### Get tag of current page tagged

Get tag of current page tagged

```javascript
var currentTag = myTumblr.getTagPage();
```

### Get id of current post page

Get id of current post page

```javascript
var currentIdPost = myTumblr.getIdPostPage();
```

### Check the page

Return the name of the current page : home, post or tagged

```javascript
var currentPage = myTumblr.checkPage();
```
