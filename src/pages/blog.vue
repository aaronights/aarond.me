<template>
	<Layout>
		<social :images="true" class="float-right" />
		<h1>I am Aaron Davies</h1>
		<p>I blog here like my opinions actually matter</p>
		<v-row no-gutters class="mt-8">
			<v-col v-for="(post, index) in $page.posts.edges" :key="index" cols="12" md="6" lg="4">
				<v-card class="ma-4 pb-3">
					<g-link :to="post.node.path" class="white--text">
						<v-img
							v-if="post.node.image"
							max-width="100%"
							height="150px"
							class="align-end"
							:src="post.node.image.replace('./../media/', '/../assets/static/src/media/')"
						>
							<v-overlay absolute>
								<v-card-title class="display-1 mb-0 text-wrap align-end text-center" style="word-break: normal; height: 150px; text-shadow: 1px 1px 2px black">{{post.node.title}}</v-card-title>
							</v-overlay>
						</v-img>
						<v-card-title v-else class="display-1 mb-0 text-wrap align-end text-center grey darken-2" style="word-break: normal; height: 150px; text-shadow: 1px 1px 2px black">{{post.node.title}}</v-card-title>
					</g-link>
					<h5 class="ma-3">
						{{new Date(post.node.date).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}}
					</h5>
					<v-card-text>
						<div v-html="post.node.excerpt" class="mb-4 text-justify" />
					</v-card-text>
					<v-card-actions>
						<span class="subtitle-1 mt-4 ml-2">{{post.node.timeToRead}} minute reading time</span>
						<v-spacer />
						<v-btn class="ma-4 mb-0" rounded>
							<g-link :to="post.node.path">
								Read More...
							</g-link>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<v-pagination :value="$page.posts.pageInfo.currentPage" :length="$page.posts.pageInfo.totalPages" prev-icon="<" next-icon=">" @input="page" />
	</Layout>
</template>

<page-query>
	query Posts ($page: Int) {
		posts: allPost (perPage: 12, page: $page) @paginate {
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
	import {Pager} from 'gridsome';
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
			page: function (page) {
				if (page === 1) {
					this.$router.push({path: '/blog/'});
				} else {
					this.$router.push({path: '/blog/' + page});
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
	table,
	th,
	td,
	tr,
	thead,
	tbody {
		border: 1px solid black;
		padding: 5px;
	}
	table {
		border-collapse: collapse;
	}
</style>
