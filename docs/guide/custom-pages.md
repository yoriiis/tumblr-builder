# Custom pages

Need to customize HTML for pages home, tagged or post? The `templatesPages` option is for you.

On app initialize, add the `templatesPages` parameter with all pages you need to customize. The others pages will automatically used their default template.

::: tip Override default templates
To simply override the default template for a spacific page use `templatesPages.<page>`. `<page>` placeholder must be replaced by following values: `home` `tagged` `post`.
:::

::: details Prettier ignore comment
To prevent issue with Prettier and template literals indents, following examples are preceded by `/* prettier-ignore */`. [More information on Prettier](https://prettier.io/docs/en/ignore.html).
:::

## Home page

### Default home page

The default template used for the home page is described below. The function can be override with `templatesPages.home` option.

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
}
```

The function exposes following parameters:

#### templates

- Type: `Object`
- Default: `{}`

List of all template articles functions (audio, chat, link, photo, quote, text, video). All defaults functions are automatically used if `templatesPosts` object is not overrides them.

#### tags

- Type: `Array`
- Default: `[]`

List of all hashtags from all available article, according to the [limitData](how-it-works.html#limitdata) nn.

#### posts

- Type: `Array`
- Default: `[]`

List of all articles to display on the first page (before the first infinite scroll), according to the [elementsPerPage](how-it-works.html#elementsperpage) nn.

### Custom home page

To customize the home page template, write your own `customHomePage` function inspired by the `home` function above.

```javascript
function customHomePage ({ templates, tags, posts }) {
    return `
        <!-- Write the HTML for the custom home page here -->
    `;
}
```

Next, use the `templatesPages.home` option to passed the new home page function.

```javascript
const tumblr = new Tumblr({
    templatesPages: {
        home: customHomePage
    }
});
```

## Tagged page

### Default tagged page

The default template used for the tagged page is described below. The function can be override with `templatesPages.tagged` option.

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
    `;
}
```

The tagged page is simply the homepage filtered with a unique tag. The function exposes the same parameters as the [home function](custom-pages.html#homepage-function-parameters) described above.

### Custom tagged page

To customize the tagged page template, write your own `customTaggedPage` function inspired by the `home` function above.

```javascript
function customTaggedPage ({ templates, tags, posts }) {
    return `
        <!-- Write the HTML for the custom tagged page here -->
    `;
}
```

Next, use the `templatesPages.tagged` option to passed the new tagged page function.

```javascript
const tumblr = new Tumblr({
    templatesPages: {
        tagged: customTaggedPage
    }
});
```

## Post page

### Default post page

The default template used for the post page is described below. The function can be override with `templatesPages.post` option.

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
    `;
}
```

The function exposes the same parameters `templates` and `posts` as the [home function](custom-pages.html#homepage-function-parameters) described above.

However, the function exposes the following specific parameter:

#### relatedPosts

- Type: `Array`
- Default: `[]`

List of related posts for the associated article, according to the [getRelatedPosts](available-methods.html#getrelatedposts) function.

### Custom post page

To customize the post page template, write your own `customPostPage` function inspired by the `home` function above.

```javascript
function customPostPage ({ templates, posts, relatedPosts }) {
    return `
        <!-- Write the HTML for the custom post page here -->
    `;
}
```

Next, use the `templatesPages.post` option to passed the new post page function.

```javascript
const tumblr = new Tumblr({
    templatesPages: {
        post: customPostPage
    }
});
```
