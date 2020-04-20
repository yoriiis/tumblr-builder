# Custom pages

Need to customize the HTML for the home page, tagged page or post page? The `templatesPages` option is for you :rocket:

On app initialize, add the `templatesPages` parameter with pages you need to individually customized. The others pages will automatically used their default template.

::: tip Override default templates
To simply override the default template for a specific page use `templatesPages.<page>` parameter. The `<page>` placeholder must be replaced by the following values: `home` `tagged` `post`.
:::

::: details Prettier ignore comment
To prevent issue with Prettier and template literals indents, following examples are preceded by `/* prettier-ignore */`. [More information on Prettier](https://prettier.io/docs/en/ignore.html).
:::

## Home page

### Default home page

The default template used for the home page is described below. The function can be replaced with the `templatesPages.home` parameter. The `data-infinite-scroll` attribute is used for the infinite scroll feature.

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

#### home ({ templates })

- Type: `Object`
- Default: `{}`

List of all template pages functions (audio, chat, link, photo, quote, text, video). All defaults functions are automatically used if `templatesPages` object is not overrides them.

#### home ({ tags })

- Type: `Array`
- Default: `[]`

List of all hashtags from all available article, according to the [limitData](how-it-works.html#limitdata) option.

#### home ({ posts })

- Type: `Array`
- Default: `[]`

List of all articles to display on the first page (before the first infinite scroll), according to the [elementsPerPage](how-it-works.html#elementsperpage) option.

### Custom home page

To customize the home page template, write your own `customHomePage` function inspired by the `home` function above.

```javascript
function customHomePage({ templates, tags, posts }) {
  return `
        <!-- Write the HTML for the custom home page here -->
    `;
}
```

Next, use the `templatesPages.home` parameter to passed the new home page template function.

```javascript
new TumblrBuilder({
  templatesPages: {
    home: customHomePage
  }
});
```

## Tagged page

### Default tagged page

The default template used for the tagged page is described below. The function can be replaced with the `templatesPages.tagged` parameter. The `data-infinite-scroll` attribute is used for the infinite scroll feature.

```javascript
function tagged ({ templates, tag, posts }) => {
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
        <h3 class="subnav">Tagged: ${tag}</h3>
        <div class="posts" data-infinite-scroll>
            ${posts.map(post => templates[post.type](post)).join('')}
        </div>
    `;
}
```

The function exposes following parameters:

#### tagged ({ templates })

- Type: `Object`
- Default: `{}`

List of all template pages functions (audio, chat, link, photo, quote, text, video). All defaults functions are automatically used if `templatesPages` object is not overrides them.

#### tagged ({ tag })

- Type: `String`
- Default: `''`

The current hashtag from the route.

#### tagged ({ posts })

- Type: `Array`
- Default: `[]`

List of all articles filtered by the current hashtag.

### Custom tagged page

To customize the tagged page template, write your own `customTaggedPage` function inspired by the `tagged` function above.

```javascript
function customTaggedPage({ templates, tag, posts }) {
  return `
        <!-- Write the HTML for the custom tagged page here -->
    `;
}
```

Next, use the `templatesPages.tagged` option to passed the new tagged page function.

```javascript
new TumblrBuilder({
  templatesPages: {
    tagged: customTaggedPage
  }
});
```

## Post page

### Default post page

The default template used for the post page is described below. The function can be replaced with the `templatesPages.post` parameter.

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

The function exposes following parameters:

#### post ({ templates })

- Type: `Object`
- Default: `{}`

List of all template pages functions (audio, chat, link, photo, quote, text, video). All defaults functions are automatically used if `templatesPages` object is not overrides them.

#### post ({ posts })

- Type: `Array`
- Default: `[]`

Datas for the current article.

#### post ({ relatedPosts })

- Type: `Array`
- Default: `[]`

List of related posts for the associated article.

### Custom post page

To customize the post page template, write your own `customPostPage` function inspired by the `post` function above.

```javascript
function customPostPage({ templates, posts, relatedPosts }) {
  return `
        <!-- Write the HTML for the custom post page here -->
    `;
}
```

Next, use the `templatesPages.post` option to passed the new post page function.

```javascript
new TumblrBuilder({
  templatesPages: {
    post: customPostPage
  }
});
```

::: tip Custom related posts
The `relatedPosts` parameter can be replaced by a new call to the [getRelatedPosts](available-methods.html#getrelatedposts) function with custom parameters.
:::
