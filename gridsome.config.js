module.exports = {
	siteName: 'aarond.me',
	siteUrl: 'https://aarond.me',
	siteDescription: 'The blog of Aaron Davies',
	transformers: {
		remark: {
			allowed_elements: ['v-carousel-item', 'v-carousel', 'g-link'],
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
		},
	},
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'src/pages/blog/*.md',
				typeName: 'Post',
				route: '/blog/:year/:month/:day/:title',
				remark: {
					plugins: [['gridsome-plugin-remark-youtube']],
				},
			},
		},
		/* {
			use: 'gridsome-plugin-flexsearch',
			options: {
				collections: [
					{
						typeName: 'Post',
						indexName: 'Post',
						fields: ['title', 'excerpt'],
					},
				],
				searchFields: ['title', 'excerpt'],
			},
		}, */
		{
			use: 'gridsome-plugin-feed',
			options: {
				contentTypes: ['Post'],
				feedOptions: {
					title: 'aarond.me',
					description: 'The blog of Aaron Davies',
				},
			},
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				config: {
					'/blog/**': {
						changefreq: 'weekly',
						priority: 0.5,
					},
					'/': {
						changefreq: 'monthly',
						priority: 0.7,
					},
				},
			},
		},
		/* {
			use: 'gridsome-plugin-pwa',
			options: {
				title: 'aarond.me',
				startUrl: '/',
				display: 'standalone',
				statusBarStyle: 'default',
				manifestPath: 'manifest.json',
				disableServiceWorker: true,
				serviceWorkerPath: 'service-worker.js',
				cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
				shortName: 'aarond.me',
				themeColor: '#e32929',
				backgroundColor: '#ffffff',
				icon: 'src/favicon.png',
				msTileImage: '',
				msTileColor: '#666600',
			},
		}, */
	],
};
