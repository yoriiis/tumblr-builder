/* prettier-ignore */
export default function TemplatePosts ({ posts = [], templates }) {
	// console.log(getTemplateByType('text'))
	return posts.map(post => templates[post.type](post)).join('')
}
