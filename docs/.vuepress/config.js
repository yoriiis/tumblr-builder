module.exports = {
	base: '/tumblr/docs/site/',
	dest: 'docs/site',
	markdown: {
		lineNumbers: true
	},
	title: 'Tumblr',
	description: '',
	themeConfig: {
		repo: 'yoriiis/tumblr',
		repoLabel: 'Github',
		docsDir: 'docs',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
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
			// { text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'Demo', link: '/netlify/' },
			{
				text: 'Learn more',

				items: [
					{
						text: 'Miscellaneous',
						items: [
							{
								text: 'Changelog',
								link: 'http://github.com/yoriiis/jsx/CHANGELOG.md'
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
					sidebarDepth: 3,
					children: [
						'',
						['getting-started', 'Getting started'],
						['how-it-works', 'How it works'],
						['available-methods', 'Available methods'],
						['custom-pages', 'Custom pages'],
						['custom-posts', 'Custom posts']
					]
				}
			]
		}
	}
}
