<template>
	<Layout>
		<v-layout row wrap>
			<v-flex xs12 pa-4>
				<h1>{{$page.post.title}}</h1>
				<p>
					<strong>{{(new Date($page.post.date)).toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}}</strong>
				</p>
				<div v-html="$page.post.content" class="post" />
				<!--<v-bottom-nav color="transparent">
					<v-btn text v-if="$page.post.previous">
						<g-link :to="{path: $page.post.previous.path}">&lt; {{$page.post.previous.title}}</g-link>
					</v-btn>
					<v-btn text v-if="$page.post.next">
						<g-link :to="{path: $page.post.next.path}">{{$page.post.next.title}} &gt;</g-link>
					</v-btn>
				</v-bottom-nav>-->
			</v-flex>
		</v-layout>
	</Layout>
</template>

<page-query>
	query Post ($path: String!) {
		post: post (path: $path) {
			title
			content
			date
			timeToRead(speed: 230)
		}
	}
</page-query>

<script>
	export default {
		metaInfo() {
			return {
				title: this.$page.post.title,
			};
		},
	};
</script>

<style>
	.post img {
		max-width: 100% !important;
		display: block;
		margin-top: 2em;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
	/*p a {
		display: block;
		margin: auto;
	}*/
	.post p a + em {
		display: block;
		clear: both;
		margin-top: 1em;
		margin-bottom: 2em;
		text-align: center;
	}
	.youtube {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 */
		padding-top: 25px;
		height: 0;
		margin-top: 2em;
		margin-bottom: 2em;
	}
	.youtube iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
