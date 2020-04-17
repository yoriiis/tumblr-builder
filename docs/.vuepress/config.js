module.exports = {
	base: '/',
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
			{
				text: 'Demo',
				items: [
					{ text: 'Demo outside Tumblr', link: '/demo/' },
					{
						text: 'Demo inside Tumblr',
						link: 'http://tmblr-builder.tumblr.com'
					}
				]
			},
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
