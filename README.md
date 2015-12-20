Tumblr.js
==================================================

New Tumblr class js which use Tumblr API and extend methods. Include infinite scroll, related posts and all tags.

Instanciate the class
--------------------------------------

```javascript
var myTumblr = new _Tumblr({
    useAPI              : false,
    versionAPI          : 1,
    keyAPI              : '',
    limitData           : 250,
    cache               : false,
    cacheMethod         : 'sessionStorage',
    wrapperSelector     : '',
    postSelector        : '.post',
    appendMethod        : 'normal',
    nearBottom          : 450,
    debug               : false
});
```

###API
By default, the use of the APi is disable. No requests, no related posts, no all tags, just infinite scroll. It's more fast for basic blog.

```javascript
useAPI : false
```

Choose the Tumblr API V1 or V2. Api V2 require a valid api key.

```javascript
versionAPI : 1,
keyAPI     : '',
```

###Web storage
By default cache is disable. If enable it, JSON data use the browser storage. You can choose the web storage (sessionStorage by default or localStorage), the limit of posts to cache (250 by default). Activate this functionnality in production not in development.

```javascript
limitData   : 250,
cache       : false,
cacheMethod : 'sessionStorage',
```

###Infinite scroll
Infinite scroll require total page parameter (send by Tumblr). Paste this line in your HTML before this js class. Respect the name of the var (totalPages).

```html
<script>var totalPages = {TotalPages};</script>
```

You can manage infinite scroll :

```javascript
myTumblr.disableInfiniteScroll();
myTumblr.enableInfiniteScroll();
```

Infinite scroll is compatible with grid plugin : Isotope, Masonry and Freetile.

```javascript
appendMethod : 'normal'
appendMethod : 'isotope'
appendMethod : 'masonry'
appendMethod : 'freetile'
```

Infinite scroll can run with one or two columns (odd/even compatibility). This functionnality is only compatible with normal appendMethod.

```javascript
targetPost : '#content'
targetPost : ['#content-left', '#content-right']
```

You can choose the distance (in pixel) near bottom of the page to trigger the infinite scroll method.

```javascript
nearBottom : 450
```

Access to JSON data

```javascript
myTumblr.on( myTumblr.events.JSON_COMPLETE, function(){
    var data = this.data;
});
```

## Methods

### Get related posts

**Require attach to JSON_COMPLETE event**. The function return a list of posts in object. You can use a templating engine for rendering data : Lo-Dash, Handlebars.

- **`limit`** : number of related posts (3 by default)
- **`ignoreTag`** : tag ignore in related post (optional)

```javascript
myTumblr.attachEvent( myTumblr.events.JSON_COMPLETE, function(){
    var relateds = myTumblr.getRelatedPosts({
        limit: 6,
        ignoreTag: 'tumblr'
    });
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

## Events

```javascript
myTumblr.events.ON_SCROLL
myTumblr.events.JSON_COMPLETE
myTumblr.events.START_LOADING
myTumblr.events.END_LOADING
myTumblr.events.END_PAGE
myTumblr.events.IMAGES_LOADED //Need jQuery.imagesLoaded.js
myTumblr.events.POST_APPEND
myTumblr.events.NO_RELATED
myTumblr.events.HAS_RELATED
```

### Attach an event

```javascript
myTumblr.on( myTumblr.events.JSON_COMPLETE, function(){} );
```

### Detach an event

```javascript
myTumblr.off( myTumblr.events.JSON_COMPLETE );
```

### Information

`myTumblr.events.JSON_COMPLETE` is require for these methods :
- getRelatedPosts()
- getAllTags()
- getTagsPost()

For performance issues there is a limit for these methods, only for X first post (X = limitData) because they use API.
