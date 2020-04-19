# Available methods

List of functions exposed by the instance.

::: tip API research
Functions `getAllTags` and `getRelatedPosts` executes research in the collection of articles get from the API according to the [limitData](how-it-works.html#limitdata) option. The limit can be adjust to fit your need.
:::

## init

- Return: `Promise<Object>`

The function build the app and returns a promise. API dependents functions must be called after the `init` function.

```javascript
tumblr.init().then(response => {
  // App is render and ready
});
```

Since `init()` returns a promise, you can achieve the same as the above using the new [ES2017 async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) syntax:

```javascript
const response = await tumblr.init();
```

The function exposes a `response` object with datas from the API including following fields.

### response.totalPosts

- Type: `Integer`
- Default: `0`

The total of articles available on the Tumblr blog, according to the [host](how-it-works.html#host) option.

### response.posts

- Type: `Array<Object>`
- Default: `[]`

List of articles datas returns by the app, according to the [limitData](how-it-works.html#limitdata) option.

### response.tags

- Type: `Array`
- Default: `[]`

List of all hashtags for all articles requested by the app, according to the [limitData](how-it-works.html#limitdata) option.

## getAllTags <Badge type="warning" vertical="middle" text="API dependent"/>

- Return: `Array`

The function get the list of all hashtags from all available articles, according to the [limitData](how-it-works.html#limitdata) option.

```javascript
tumblr.getAllTags();
```

## getRelatedPosts <Badge type="warning" vertical="middle" text="API dependent"/>

- Return: `Array`

The function get related posts according to a specific post.

```javascript
tumblr.getRelatedPosts({
  postId,
  tags,
  limit,
  ignoreTags
});
```

The function has an object parameter with following fields.

### postId

- Type: `String`
- Default: `''`

Tells the function the id of the associated article.

### tags

- Type: `Array`
- Default: `[]`

Tells the function the list of hashtags for the associated article.

### limit

- Type: `Integer`
- Default: `3`

Tells the function the limit of results to return.

### ignoreTags

- Type: `Array`
- Default: `[]`

Tells the function the list of hashtags to ignore for the research.

## getRoute

- Return: `String`

The function get the current hash from the route.

```javascript
tumblr.getRoute();
```

## getPageType

- Return: `String`
- Possible value: `'home'` `'tagged'` `'post'`

The function get the page type from the route.

```javascript
tumblr.getPageType();
```

## getPostIdFromHash

- Return: `String`

The function get the post id from the route (`/post/` route only).

```javascript
tumblr.getPostIdFromHash();
```

## getHashTagFromRoute

- Return: `String`

The function get the hashtag from the route (`/tagged/` route only).

```javascript
tumblr.getHashTagFromRoute();
```
