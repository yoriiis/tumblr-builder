# Custom posts

Need to customize HTML for all post types (audio, chat, link, photo, quote, text, video)? The `templatesPosts` option is for you.

During initialization, add the `templatesPosts` parameter with all pages you need to customize.

More informations about available fields on the [Tumblr API documentation](https://www.tumblr.com/docs/en/api/v2#posts--retrieve-published-posts).

## Default templates

::: tip Prettier ignore comment
To prevent issue with formatter tools and template literals indents, following examples are preceded by `/* prettier-ignore */` [Prettier ignore comment](https://prettier.io/docs/en/ignore.html).
:::

### Function parameters

All functions exposes following parameters:

#### datas

- Type: `Object`
- Default: `{}`

All datas available from the Tumblr API for the post with type current type`.

### Default audio post

The default template used for the homepage. The function can be override with `templatesPosts.audio` options.

```javascript
function audio (datas) => {
    /* prettier-ignore */
    return `
        <div class="customCard card card-audio override" data-id="${datas.id_string}">
            <div class="card-iframe">
                ${datas.player}
            </div>
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
```

### Default chat post

The default template used for the homepage. The function can be override with `templatesPosts.chat` options.

```javascript
function chat (datas) => {
    /* prettier-ignore */
    return `
        <div class="customCard card card-audio override" data-id="${datas.id_string}">
            <div class="card-iframe">
                ${datas.player}
            </div>
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="${datas.blog.url}tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
```

### Default link post

The default template used for the homepage. The function can be override with `templatesPosts.link` options.

```javascript
function link (datas) => {
    /* prettier-ignore */
    return `
        <div class="customCard card card-link" data-id="${datas.id_string}">
            <div class="card-body">
                <a href="${datas.url}" class="card-link" title="${datas.title}">${datas.title}</a>
                ${datas.description}
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
```

### Default photo post

The default template used for the homepage. The function can be override with `templatesPosts.photo` options.

```javascript
function photo (datas) => {
    const isPhotoset = datas.photos.length > 1
    /* prettier-ignore */
    return `
        <div class="customCard card card-photo${isPhotoset ? ` photoset photos-${datas.photos.length}` : ''}" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
            <div class="card-body">
                <ul class="card-photos">
                ${datas.photos.map(photo => `
                        <li>
                            <img class="card-picture" src="${photo.original_size.url}" alt="${datas.summary}" />
                        </li>
                `).join('')}
                </ul>
                ${datas.summary
                ? `<a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>`
                : ''}
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
```

### Default quote post

The default template used for the homepage. The function can be override with `templatesPosts.quote` options.

```javascript
function quote (datas) => {
    /* prettier-ignore */
    return `
        <div class="customCard card card-quote" data-id="${datas.id_string}">
            <div class="card-body">
                <blockquote class="card-blockquote">
                    <p>${datas.text}</p>
                    <footer class="blockquote-footer">${datas.source}</footer>
                </blockquote>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
```

### Default text post

The default template used for the homepage. The function can be override with `templatesPosts.text` options.

```javascript
function text (datas) => {
    /* prettier-ignore */
    return `
        <div class="customCard card card-text" data-id="${datas.id_string}">
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.title}</a>
                ${datas.body}
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
```

### Default video post

The default template used for the homepage. The function can be override with `templatesPosts.video` options.

```javascript
function video (datas) => {
    /* prettier-ignore */
    return `
        <div class="customCard card card-video" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
            <div class="card-iframe">
                ${datas.player[2].embed_code}
            </div>
            <div class="card-body">
                <a href="#/post/${datas.id_string}" class="card-title">${datas.summary}</a>
                <ul class="card-tags">
                    ${datas.tags.map(tag => `
                            <li>
                                <a href="#/tagged/${tag}" title="#${tag}">#${tag}</a>
                            </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
```

## Custom templates

::: tip Override default template
Default template will not be used when `templatesPosts.<key>` is used. `<key>` accept `audio`, `chat`, `link`, `photo`, `quote`, `text` and `video` values.
:::

### Custom audio post

To customize the homepage template, write your own `customAudioPost` function inspired by the `audio` function above.

```javascript
function customAudioPost (datas) {
    return `
        <!-- Write the HTML of the custom audio post here -->
    `
}
```

Next, use the `templatesPosts.audio` option to passed the new home template.

```javascript
const tumblr = new Tumblr({
    templatesPosts: {
        audio: customAudioPost
    }
})
```

### Custom chat post

To customize the homepage template, write your own `customChatPost` function inspired by the `chat` function above.

```javascript
function customChatPost (datas) {
    return `
        <!-- Write the HTML of the custom chat post here -->
    `
}
```

Next, use the `templatesPosts.chat` option to passed the new home template.

```javascript
const tumblr = new Tumblr({
    templatesPosts: {
        chat: customChatPost
    }
})
```

### Custom link post

To customize the homepage template, write your own `customLinkPost` function inspired by the `link` function above.

```javascript
function customLinkPost (datas) {
    return `
        <!-- Write the HTML of the custom link post here -->
    `
}
```

Next, use the `templatesPosts.link` option to passed the new home template.

```javascript
const tumblr = new Tumblr({
    templatesPosts: {
        link: customLinkPost
    }
})
```

### Custom photo post

To customize the homepage template, write your own `customPhotoPost` function inspired by the `photo` function above.

```javascript
function customPhotoPost (datas) {
    return `
        <!-- Write the HTML of the custom photo post here -->
    `
}
```

Next, use the `templatesPosts.photo` option to passed the new home template.

```javascript
const tumblr = new Tumblr({
    templatesPosts: {
        photo: customPhotoPost
    }
})
```

### Custom quote post

To customize the homepage template, write your own `customQuotePost` function inspired by the `quote` function above.

```javascript
function customQuotePost (datas) {
    return `
        <!-- Write the HTML of the custom quote post here -->
    `
}
```

Next, use the `templatesPosts.quote` option to passed the new home template.

```javascript
const tumblr = new Tumblr({
    templatesPosts: {
        quote: customQuotePost
    }
})
```

### Custom text post

To customize the homepage template, write your own `customTextPost` function inspired by the `text` function above.

```javascript
function customTextPost (datas) {
    return `
        <!-- Write the HTML of the custom text post here -->
    `
}
```

Next, use the `templatesPosts.text` option to passed the new home template.

```javascript
const tumblr = new Tumblr({
    templatesPosts: {
        text: customTextPost
    }
})
```

### Custom video post

To customize the homepage template, write your own `customVideoPost` function inspired by the `video` function above.

```javascript
function customVideoPost (datas) {
    return `
        <!-- Write the HTML of the custom video post here -->
    `
}
```

Next, use the `templatesPosts.video` option to passed the new home template.

```javascript
const tumblr = new Tumblr({
    templatesPosts: {
        video: customVideoPost
    }
})
```
