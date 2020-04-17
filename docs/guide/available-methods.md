# Available methods

The library exposes following functions.

## Initialize function

### init

The function initialize and build the Tumblr application.

```javascript
tumblr.init().then(response => {
    // Tumblr is ready
})
```

The function exposes a `response` object with all datas from the API `totalPosts`, `posts` and `tags`.

```json
{
    "totalPosts": 0,
    "posts": [{}],
    "tags": []
}
```

#### response.totalPosts

- Type: `Integer`
- Default: `0`

The total of posts available on the Tumblr site, according to the Tumblr [host](how-it-works.html#host) options.

#### response.posts

- Type: `Array<Object>`
- Default: `[]`

List of posts datas returns by the application, according to the [limitData](how-it-works.html#limitdata) options.

#### response.tags

- Type: `Array`
- Default: `[]`

List of all tags for all posts requested by the application, according to the [limitData](how-it-works.html#limitdata) options.

## API dependent function

All next functions must be wrapped inside the `init()` Promise returns.

::: warning Limitations
All api dependent functions executed research in the collection of posts get from the API according to the [limitData](how-it-works.html#limitdata) options. The limit can be adjust to fit your need.
:::

### getAllTags

The function get the list of all tags associates to posts.

```javascript
tumblr.init().then(function(response) {
    const tags = this.getAllTags()
})
```

### getRelatedPosts

The function get related posts according to a specific post.

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

The function has a object with 4 properties:

#### postId

- Type: `String`
- Default: `''`

Tells the function the id of the associated post.

#### tags

- Type: `Array`
- Default: `[]`

Tells the function the list of tags of the associated post.

#### limit

- Type: `Integer`
- Default: `3`

Tells the function the limit of results to return.

#### ignoreTags

- Type: `Array`
- Default: `[]`

Tells the function the list of tags to ignore for the research.
