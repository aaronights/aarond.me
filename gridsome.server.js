const nodeExternals = require('webpack-node-externals');
//const RemarkTransformer = require('@gridsome/transformer-remark');
//const remark = new RemarkTransformer({}, {});

module.exports = function (api) {
	api.chainWebpack((config, {isServer}) => {
		if (isServer) {
			config.externals([
				nodeExternals({
					whitelist: [/^vuetify/]
				})
			]);
		}
	});
	api.loadSource(({addSchema, addSchemaResolvers, GraphQLSchema, GraphQLObjectType, GraphQLString}) => {
		/*addSchema(new GraphQLSchema({
			query: new GraphQLObjectType({
				name: 'Post',
				fields: {
					excerpt: {type: GraphQLString},
					image: {type: GraphQLString},
				}
			})
		})),*/
		addSchemaResolvers({
			Post: {
				excerpt(node, args, context) {
					let pos = (node.content.indexOf('<!-- more -->') + 1 || node.content.indexOf('\n\n') + 1 || node.content.indexOf('\r\n\r\n') + 1);
					return node.content.slice(0, pos).replace(/!\[(.*?)\]\((.*?)\)/g, '');
					//return remark._nodeToHTML({...node, content: node.content.slice(0, pos).replace(/!\[(.*?)\]\((.*?)\)/g, '')});
				},
				image: {
					type: GraphQLString,
					resolve: (node) => {
						let image = node.content.match(/!\[(?:.*?)\]\((.*?)\)/);
						return (image ? image[1] : "");
					}
				}
			}
		});
	});
};