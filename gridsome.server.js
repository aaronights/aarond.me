// const nodeExternals = require('webpack-node-externals');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const remark = require('remark');
const html = require('remark-html');

module.exports = function(api) {
	api.chainWebpack((config, {isServer}) => {
		config.plugin('vuetify-loader').use(VuetifyLoaderPlugin);
		/* if (isServer) {
			config.externals([
				nodeExternals({
					whitelist: [/^vuetify/],
				}),
			]);
		} */
	});
	api.loadSource(({addSchemaResolvers}) => {
		addSchemaResolvers({
			Post: {
				excerpt: {
					type: 'String',
					resolve: (node) => {
						let pos = node.content.indexOf('<!-- more -->') + 1 || node.content.indexOf('\n\n') + 1 || node.content.indexOf('\r\n\r\n') + 1;
						const excerpt = node.content.slice(0, pos).replace(/!\[(.*?)\]\((.*?)\)/g, '');
						return remark().use(html).processSync(excerpt).toString();
					},
				},
				image: {
					type: 'String',
					resolve: (node) => {
						let image = node.content.match(/!\[(?:.*?)\]\((.*?)\)/);
						return image ? image[1] : '';
					},
				},
			},
		});
	});
};
