module.exports = {
	base: '/tumblr/',
	dest: 'docs/site',
	markdown: {
		lineNumbers: true
	},
	title: 'TumblrBuilder',
	description: '',
	themeConfig: {
		repo: 'yoriiis/tumblr',
		repoLabel: 'Github',
		docsDir: 'docs',
		docsBranch: 'develop',
		editLinks: true,
		editLinkText: 'Edit this page',
		smoothScroll: true,
		nextLinks: true,
		prevLinks: true,
		lastUpdated: 'Last Updated',
		searchPlaceholder: 'Search...',
		search: false,
		searchMaxSuggestions: 10,
		activeHeaderLinks: false,
		displayAllHeaders: false,
		// algolia: {
		// 	apiKey: '<API_KEY>',
		// 	indexName: '<INDEX_NAME>'
		// },
		nav: [
			{ text: 'Guide', link: '/guide/' },
			{
				text: 'Demo',
				items: [
					{
						text: 'Tumblr',
						link: 'http://tmblr-builder.tumblr.com'
					},
					{ text: 'Netlify', link: 'https://tumblrjs.netlify.app' }
				]
			},
			{
				text: 'Learn more',
				items: [
					{
						text: 'Tumblr',
						items: [
							{
								text: 'API',
								link: 'https://www.tumblr.com/docs/en/api/v2'
							},
							{
								text: 'Custom theme',
								link: 'https://www.tumblr.com/docs/en/custom_themes'
							}
						]
					},
					{
						text: 'Miscellaneous',
						items: [
							{
								text: 'Changelog',
								link: 'http://github.com/yoriiis/tumblr/CHANGELOG.md'
							}
						]
					}
				]
			}
		],
		sidebar: {
			'/guide/': [
				{
					title: 'Guide',
					collapsable: false,
					sidebarDepth: 2,
					children: [
						'',
						['getting-started', 'Getting started'],
						['how-it-works', 'How it works'],
						['available-methods', 'Available methods'],
						['deploying', 'Deploying']
					]
				},
				{
					title: 'Advanced',
					collapsable: false,
					sidebarDepth: 2,
					children: [
						['custom-pages', 'Custom pages'],
						['custom-posts', 'Custom posts']
					]
				}
			]
		}
	}
}
