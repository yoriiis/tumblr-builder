/**
 * Template for Tumblr post page
 *
 * @param {Object}
 * @param {Object} templates List of all template pages functions
 * @param {Object} posts List of all articles to display
 * @param {Object} relatedPosts List of related posts for the associated article
 *
 * @returns {String} HTML string for the template
 */

export default function TemplatePost ({ templates, posts, relatedPosts }) {
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
                <h5 class="relatedPosts-title">Related posts</h5>
                ${relatedPosts.map(post => templates[post.type](post)).join('')}
            </div>
        ` : ''}
    `
}
