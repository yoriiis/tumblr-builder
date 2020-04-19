# Available methods

List of functions exposed by the instance.

## Initialize function

### init(): Promise\<Object>

The function build the app and return a promise.

```javascript
tumblr.init().then(response => {
  // App is render and ready
});
```

Since `init()` returns a promise, you can achieve the same as the above using the new [ES2017 async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) syntax:

```javascript
const response = await tumblr.init();
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

All the following functions must be executed on the promise return of the `init ()` function.

::: tip API research
All API dependent functions executes research in the collection of articles get from the API according to the [limitData](how-it-works.html#limitdata) option. The limit can be adjust to fit your need.
:::

### getAllTags(): Array

The function get the list of all hashtags from all available articles, according to the [limitData](how-it-works.html#limitdata) option.

```javascript
const tags = tumblr.getAllTags();
```

### getRelatedPosts(): Array

The function get related posts according to a specific post.

```javascript
const relatedPosts = tumblr.getRelatedPosts({
  postId: "614498886036422656",
  tags: ["picture", "gallery"],
  limit: 3,
  ignoreTags: ["gif"]
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
