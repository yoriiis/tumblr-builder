module.exports = {
	base: '/tumblr-builder/',
	dest: 'docs/site',
	markdown: {
		lineNumbers: true
	},
	title: 'TumblrBuilder',
	description: 'Javascript library to build custom Tumblr from API',
	head: [
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'theme-color', content: '#001935' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }
		],

		['meta', { name: 'msapplication-TileColor', content: '#001935' }]
	],
	plugins: [
		[
			'@vuepress/pwa',
			{
				serviceWorker: true,
				updatePopup: true
			}
		],
		'@vuepress/back-to-top',
		'@vuepress/nprogress'
	],
	themeConfig: {
		repo: 'yoriiis/tumblr-builder',
		repoLabel: 'Github',
		docsDir: 'docs',
		docsBranch: 'develop',
		editLinks: true,
		editLinkText: 'Edit this page',
		smoothScroll: true,
		nextLinks: true,
		prevLinks: true,
		lastUpdated: 'Last Updated',
		search: true,
		searchMaxSuggestions: 10,
		searchPlaceholder: 'Search...',
		activeHeaderLinks: false,
		displayAllHeaders: false,
		nav: [
			{ text: 'Guide', link: '/guide/' },
			{
				text: 'Demo',
				items: [
					{
						text: 'Tumblr',
						link: 'http://tmblr-builder.tumblr.com'
					},
					{ text: 'Out of the box', link: 'https://tumblr-builder.netlify.app' }
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
								link: 'http://github.com/yoriiis/tumblr-builder/CHANGELOG.md'
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
