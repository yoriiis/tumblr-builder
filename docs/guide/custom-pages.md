# Custom pages

Need to customize HTML for pages home, tagged or post? The `templatesPages` option is for you.

During initialization, add the `templatesPages` parameter with all pages you need to customize.

## Default templates

::: tip Prettier ignore comment
To prevent issue with formatter tools and template literals indents, following examples are preceded by `/* prettier-ignore */` [Prettier ignore comment](https://prettier.io/docs/en/ignore.html).
:::

### Default home page

The default template used for the homepage. The function can be override with `templatesPages.home` options.

```javascript
function home ({ templates, tags, posts }) => {
    /* prettier-ignore */
    return `
        <nav class="nav">
                <ul>
                    <li>
                        <a class="btn" href="#_" title="Home">Home</a>
                    </li>
                </ul>
            </ul>
        </nav>
        <div class="tags card">
            <ul class="card-body">
                ${tags.map(tag => `
                    <li>
                        <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                    </li>
                `).join('')}
                <li></li>
            </ul>
        </div>
        <div class="posts" data-infinite-scroll>
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
    `;
```

#### Homepage function parameters

The function exposes following parameters:

##### templates

- Type: `Object`
- Default: `{}`

Access to all template posts functions (audio, chat, link, photo, quote, text, video). Default functions are used if `templatesPosts` object not overrides them.

##### tags

- Type: `Array`
- Default: `[]`

The function get the list of all tags associated to posts available, according to the [limitData](how-it-works.html#limitdata) options.

##### posts

- Type: `Array`
- Default: `[]`

The function get the list of posts to displayed on the first page (before first infinite scroll), according to the [elementsPerPage](how-it-works.html#elementsperpage) options.

### Default tagged page

The default template used for the tagged page. The function can be override with `templatesPages.tagged` options.

```javascript
function tagged ({ templates, tags, posts }) => {
    /* prettier-ignore */
    return `
        <nav class="nav">
                <ul>
                    <li>
                        <a class="btn" href="#_" title="Home">Home</a>
                    </li>
                </ul>
            </ul>
        </nav>
        <div class="posts">
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
    `
},
```

#### Tagged function parameters

The tagged page have is simply the homepage filtered with a unique tag. The function exposes the same parameters as the [home function](custom-pages.html#homepage-function-parameters) described above.

### Default post page

The default template used for the post page. The function can be override with `templatesPages.post` options.

```javascript
function post ({ templates, posts, relatedPosts }) => {
    /* prettier-ignore */
    return `
        <nav class="nav">
                <ul>
                    <li>
                        <a class="btn" href="#_" title="Home">Home</a>
                    </li>
                </ul>
            </ul>
        </nav>
        <div class="posts">
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
        ${relatedPosts.length ? `
            <div class="relatedPosts">
                <h5 class="relatedPosts-title">My related posts</h5>
                ${relatedPosts.map(post => templates[post.type](post)).join('')}
            </div>
        ` : ''}
    `
```

#### Post function parameters

The function exposes the same parameters `templates` and `posts` as the [home function](custom-pages.html#homepage-function-parameters) described above.

The function exposes following parameters:

##### relatedPosts

- Type: `Array`
- Default: `[]`

The function get related posts according to the current post, according to the [getRelatedPosts](available-methods.html#getrelatedposts) function.

## Custom templates

::: tip Override default template
Default template will not be used when `templatesPages.<key>` is used. `<key>` accept `home`, `tagged` and `post` values.
:::

### Custom home page

To customize the homepage template, write your own `customHomePage` function inspired by the `home` function above.

```javascript
function customHomePage ({ templates, tags, posts }) {
    return `
        <!-- Write the HTML of the custom home page here -->
    `
}
```

Next, use the `templatesPages.home` option to passed the new home template.

```javascript
const tumblr = new Tumblr({
    templatesPages: {
        home: customHomePage
    }
})
```

### Custom tagged page

To customize the homepage template, write your own `customTaggedPage` function inspired by the `home` function above.

```javascript
function customTaggedPage ({ templates, tags, posts }) {
    return `
        <!-- Write the HTML of the custom tagged page here -->
    `
}
```

Next, use the `templatesPages.tagged` option to passed the new home template.

```javascript
const tumblr = new Tumblr({
    templatesPages: {
        tagged: customTaggedPage
    }
})
```

### Custom post page

To customize the homepage template, write your own `customPostPage` function inspired by the `home` function above.

```javascript
function customPostPage ({ templates, posts, relatedPosts }) {
    return `
        <!-- Write the HTML of the custom post page here -->
    `
}
```

Next, use the `templatesPages.post` option to passed the new home template.

```javascript
const tumblr = new Tumblr({
    templatesPages: {
        post: customPostPage
    }
})
```
