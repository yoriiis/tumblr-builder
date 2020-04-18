# Available methods

List of functions exposed by the instance.

## Initialize function

### init

The function initialize and build the app.

```javascript
tumblr.init().then(response => {
  // App is render and ready
});
```

The function exposes a `response` object with datas from the API including `totalPosts`, `posts` and `tags`.

#### response.totalPosts

- Type: `Integer`
- Default: `0`

The total of articles available on the Tumblr blog, according to the [host](how-it-works.html#host) option.

#### response.posts

- Type: `Array<Object>`
- Default: `[]`

List of articles datas returns by the app, according to the [limitData](how-it-works.html#limitdata) option.

#### response.tags

- Type: `Array`
- Default: `[]`

List of all hashtags for all articles requested by the app, according to the [limitData](how-it-works.html#limitdata) option.

## API dependent function

All next functions must be wrapped inside the `init()` Promise return.

::: warning Limitations
All API dependent functions executes research in the collection of articles get from the API according to the [limitData](how-it-works.html#limitdata) option. The limit can be adjust to fit your need.
:::

### getAllTags

The function get the list of all hashtags from all available articles, according to the [limitData](how-it-works.html#limitdata) option.

```javascript
tumblr.init().then(function(response) {
  const tags = this.getAllTags();
});
```

### getRelatedPosts

The function get related posts according to a specific post.

```javascript
tumblr.init().then(function(response) {
  const relatedPosts = this.getRelatedPosts({
    postId: "614498886036422656",
    tags: ["picture", "gallery"],
    limit: 3,
    ignoreTags: ["gif"]
  });
});
```

The function has an object parameter with following properties:

#### postId

- Type: `String`
- Default: `''`

Tells the function the id of the associated article.

#### tags

- Type: `Array`
- Default: `[]`

Tells the function the list of hashtags for the associated article.

#### limit

- Type: `Integer`
- Default: `3`

Tells the function the limit of results to return.

#### ignoreTags

- Type: `Array`
- Default: `[]`

Tells the function the list of hashtags to ignore for the research.
