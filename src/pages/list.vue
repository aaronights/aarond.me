<template>
	<Layout>
		<v-layout row wrap style="max-width: 960px">
			<v-flex xs12 pa-4>
				<!--<p v-for="post in $page.posts.edges">
					<g-link :to="post.node.path">
						{{ post.node.title }}
					</g-link>
				</p>-->
				<v-list two-line>
					<template v-for="(post, index) in $page.posts.edges">
						<v-list-tile :key="post.node.path" avatar ripple :to="post.node.path">
							<v-list-tile-content>
								<v-list-tile-title>{{post.node.title}}</v-list-tile-title>
								<v-list-tile-sub-title class="text--primary">
									{{new Date(post.node.date).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}}
								</v-list-tile-sub-title>
								<v-list-tile-sub-title />
							</v-list-tile-content>
							<v-list-tile-action>
								<v-list-tile-action-text>{{ post.node.timeToRead }} minute read</v-list-tile-action-text>
							</v-list-tile-action>
						</v-list-tile>
						<v-divider v-if="index + 1 < $page.posts.edges.length" :key="index" />
					</template>
				</v-list>
				<!--<Pager :info="$page.posts.pageInfo"/>-->
				<v-pagination :value="$page.posts.pageInfo.currentPage" :length="$page.posts.pageInfo.totalPages" prev-icon="<" next-icon=">" @input="page" />
			</v-flex>
		</v-layout>
	</Layout>
</template>

<page-query>
	query Posts ($page: Int) {
		posts: allPost (perPage: 20, page: $page) @paginate {
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
					path
					excerpt
					date
					timeToRead(speed: 250)
				}
			}
		}
	}
</page-query>

<script>
	// import {Pager} from 'gridsome';

	export default {
		metaInfo: {
			title: 'Blog',
		},
		/* components: {
			Pager,
		}, */
		methods: {
			page: function(page) {
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
	.v-list__tile {
		font-size: inherit;
	}
	.v-list__tile__sub-title {
		font-size: 0.8em;
	}
</style>
