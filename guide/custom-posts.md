# Custom posts

Need to customize the HTML for article types (audio, chat, link, photo, quote, text, video)? The `templatesPosts` option is for you :rocket:

On app initialize, add the `templatesPosts` parameter with post types you need to customized. The others article types will automatically used their default template.

::: tip Override default templates
To simply override the default template for a specific article type use the `templatesPosts.<post>` parameter. The `<post>` placeholder must be replaced by the following values: `audio` `chat` `link` `photo` `quote` `text` `video`.
:::

::: details Prettier ignore comment
To prevent issue with Prettier and template literals indents, following examples are preceded by `/* prettier-ignore */`. [More information on Prettier](https://prettier.io/docs/en/ignore.html).
:::

## Function parameters

All functions exposes following parameter.

### datas

- Type: `Object`
- Default: `{}`

All datas available from the Tumblr API for the current article type. More informations about available fields on the [Tumblr API documentation](https://www.tumblr.com/docs/en/api/v2#posts--retrieve-published-posts).

## Audio post

### Default audio post

The default template used for the audio post is described below. The function can be replaced with the `templatesPosts.audio` parameter.

```javascript
function audio (datas) => {
    /* prettier-ignore */
    return `
        <div class="card card-audio override" data-id="${datas.id_string}">
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
}
```

### Custom audio post

To customize the audio post template, write your own `customAudioPost` function inspired by the `audio` function above.

```javascript
function customAudioPost(datas) {
  return `
        <!-- Write the HTML for the custom audio post here -->
    `;
}
```

Next, use the `templatesPosts.audio` parameter to passed the new audio post template function.

```javascript
const tumblr = new TumblrBuilder({
  templatesPosts: {
    audio: customAudioPost
  }
});
```

## Chat post

### Default chat post

The default template used for the chat post is described below. The function can be replaced with the `templatesPosts.chat` parameter.

```javascript
function chat (datas) => {
    /* prettier-ignore */
    return `
        <div class="card card-audio override" data-id="${datas.id_string}">
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
}
```

### Custom chat post

To customize the chat post template, write your own `customChatPost` function inspired by the `chat` function above.

```javascript
function customChatPost(datas) {
  return `
        <!-- Write the HTML for the custom chat post here -->
    `;
}
```

Next, use the `templatesPosts.chat` parameter to passed the new chat post template function.

```javascript
const tumblr = new TumblrBuilder({
  templatesPosts: {
    chat: customChatPost
  }
});
```

## Link post

### Default link post

The default template used for the link post is described below. The function can be replaced with the `templatesPosts.link` parameter.

```javascript
function link (datas) => {
    /* prettier-ignore */
    return `
        <div class="card card-link" data-id="${datas.id_string}">
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
}
```

### Custom link post

To customize the link post template, write your own `customLinkPost` function inspired by the `link` function above.

```javascript
function customLinkPost(datas) {
  return `
        <!-- Write the HTML for the custom link post here -->
    `;
}
```

Next, use the `templatesPosts.link` parameter to passed the new link post template function.

```javascript
const tumblr = new TumblrBuilder({
  templatesPosts: {
    link: customLinkPost
  }
});
```

## Photo post

### Default photo post

The default template used for the photo post is described below. The function can be replaced with the `templatesPosts.photo` parameter.

```javascript
function photo (datas) => {
    const isPhotoset = datas.photos.length > 1
    /* prettier-ignore */
    return `
        <div class="card card-photo${isPhotoset ? ` photoset photos-${datas.photos.length}` : ''}" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
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
}
```

### Custom photo post

To customize the photo post template, write your own `customPhotoPost` function inspired by the `photo` function above.

```javascript
function customPhotoPost(datas) {
  return `
        <!-- Write the HTML for the custom photo post here -->
    `;
}
```

Next, use the `templatesPosts.photo` parameter to passed the new photo post template function.

```javascript
const tumblr = new TumblrBuilder({
  templatesPosts: {
    photo: customPhotoPost
  }
});
```

## Quote post

### Default quote post

The default template used for the quote post is described below. The function can be replaced with the `templatesPosts.quote` parameter.

```javascript
function quote (datas) => {
    /* prettier-ignore */
    return `
        <div class="card card-quote" data-id="${datas.id_string}">
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
}
```

### Custom quote post

To customize the quote post template, write your own `customQuotePost` function inspired by the `quote` function above.

```javascript
function customQuotePost(datas) {
  return `
        <!-- Write the HTML for the custom quote post here -->
    `;
}
```

Next, use the `templatesPosts.quote` parameter to passed the new quote post parameter function.

```javascript
const tumblr = new TumblrBuilder({
  templatesPosts: {
    quote: customQuotePost
  }
});
```

## Text post

### Default text post

The default template used for the text post is described below. The function can be replaced with the `templatesPosts.text` parameter.

```javascript
function text (datas) => {
    /* prettier-ignore */
    return `
        <div class="card card-text" data-id="${datas.id_string}">
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
}
```

### Custom text post

To customize the text post template, write your own `customTextPost` function inspired by the `text` function above.

```javascript
function customTextPost(datas) {
  return `
        <!-- Write the HTML for the custom text post here -->
    `;
}
```

Next, use the `templatesPosts.text` parameter to passed the new text post template function.

```javascript
const tumblr = new TumblrBuilder({
  templatesPosts: {
    text: customTextPost
  }
});
```

## Video post

### Default video post

The default template used for the video post is described below. The function can be replaced with the `templatesPosts.video` parameter.

```javascript
function video (datas) => {
    /* prettier-ignore */
    return `
        <div class="card card-video" data-id="${datas.id_string}" data-tags="${datas.tags.join(',').toLowerCase()}">
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
}
```

### Custom video post

To customize the video post template, write your own `customVideoPost` function inspired by the `video` function above.

```javascript
function customVideoPost(datas) {
  return `
        <!-- Write the HTML for the custom video post here -->
    `;
}
```

Next, use the `templatesPosts.video` parameter to passed the new video post template function.

```javascript
const tumblr = new TumblrBuilder({
  templatesPosts: {
    video: customVideoPost
  }
});
```
