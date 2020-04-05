/**
 * Template for the posts list
 *
 * @returns {String} HTML string for the template
 */

/* prettier-ignore */
export default function TemplatePosts ({ posts = [], templates }) {
	return posts.map(post => templates[post.type](post)).join('')
}
