const nodeExternals = require('webpack-node-externals');
const remark = require('remark');
const html = require('remark-html');

module.exports = function(api) {
	api.chainWebpack((config, {isServer}) => {
		if (isServer) {
			config.externals([
				nodeExternals({
					whitelist: [/^Vuetify/, /^vuetify/],
				}),
			]);
		}
	});
	api.loadSource(({addSchema, addSchemaResolvers, GraphQLSchema, GraphQLObjectType, GraphQLString}) => {
		addSchemaResolvers({
			Post: {
				excerpt: {
					type: GraphQLString,
					resolve: async (node) => {
						let pos = node.content.indexOf('<!-- more -->') + 1 || node.content.indexOf('\n\n') + 1 || node.content.indexOf('\r\n\r\n') + 1;
						const excerpt = node.content.slice(0, pos).replace(/!\[(.*?)\]\((.*?)\)/g, '');
						return remark()
							.use(html)
							.processSync(excerpt)
							.toString();
					},
				},
				image: {
					type: GraphQLString,
					resolve: (node) => {
						let image = node.content.match(/!\[(?:.*?)\]\((.*?)\)/);
						return image ? image[1] : '';
					},
				},
			},
		});
	});
};
