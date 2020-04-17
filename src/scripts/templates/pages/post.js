/**
 * Template for audio Tumblr post type
 *
 * @param {Object} datas Datas for the post
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
export default function TemplatePost ({ templates, posts, relatedPosts }) {
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
                <h5 class="relatedPosts-title">Related posts</h5>
                ${relatedPosts.map(post => templates[post.type](post)).join('')}
            </div>
        ` : ''}
    `
}
