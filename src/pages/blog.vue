<template>
	<Layout>
		<v-layout v-if="$page" style="max-width: 1100px">
			<v-flex xs12 pa-1>
				<v-layout row wrap>
					<v-flex xs12 md6 class="px-3 py-0">
						<h1>I am Aaron Davies</h1>
						<p>I blog here like my opinions actually matter</p>
						<social />
					</v-flex>
				</v-layout>
				<v-card v-for="(post, index) in $page.posts.edges" :key="index" class="ma-4 pb-3">
					<g-link :to="post.node.path"><v-img style="display: block; margin: 0 auto;" max-width="100%" max-height="100px" v-if="post.node.image" :src="post.node.image.replace('./../media/', '/../assets/static/src/media/') " /></g-link>
					<v-card-title primary-title>
						<h1 class="display-1 mb-0" style="padding: 0;"><g-link :to="post.node.path">{{post.node.title}}</g-link></h1>
					</v-card-title>
					<h5 style="padding: 0em 1em;">{{(new Date(post.node.date)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}}</h5><br>
					<v-card-text>
					 <div v-html="post.node.excerpt" />
					<h4> {{post.node.timeToRead}} minute reading time.</h4>
					</v-card-text>
					<v-card-actions>
						<v-btn class="mt-4">
							<g-link :to="post.node.path">Read More...</g-link>
						</v-btn>
					</v-card-actions>
				</v-card>
				<v-pagination :value="$page.posts.pageInfo.currentPage" :length="$page.posts.pageInfo.totalPages" @input="page" prev-icon="<" next-icon=">"></v-pagination>
			</v-flex>
		</v-layout>
	</Layout>
	</template>


<page-query>
	query Posts ($page: Int) {
		posts: allPost (perPage: 10, page: $page) @paginate {
			totalCount
			pageInfo {
				totalPages
				currentPage
				isFirst
				isLast
			}
			edges {
				node {
					title
					image
					path
					excerpt
					date
					timeToRead(speed: 230)
				}
			}
		}
	}
</page-query>

<script>
	import {Pager} from "gridsome";
	import social from '~/components/social.vue';

	export default {
		metaInfo: {
			title: 'Blog',
		},
		components: {
			Pager,
			social,
		},
		methods: {
			page: function(page) {
				if (page === 1) {
					this.$router.push({path: "/blog/"});
				} else {
					this.$router.push({path: "/blog/" + page});
				}
			},
		},
	};
</script>

<style>
	h1 {
		font-size: 30px;
		line-height: 34px;
		margin-bottom: 20px;
	}
	.want {
		list-style-type: none;
		padding-left: 0;
	}
	.social {
		margin-top: 2em;
		list-style-type: none;
		padding-left: 0;
	}
	.social li {
		display: inline;
		margin-right: 1em;
	}
	.v-list__tile {
		font-size: inherit;
	}
	.v-list__tile__sub-title {
		font-size: 0.8em;
	}
	table, th, td, tr, thead, tbody {
		border: 1px solid black;	padding: 5px;
	}
	table {
		border-collapse: collapse;
	}
</style>
