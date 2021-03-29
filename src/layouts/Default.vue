<template>
	<v-app>
		<v-app-bar>
			<!--<social />-->
			<v-app-bar-title>{{$root.$options.metaInfo.title}}</v-app-bar-title>
			<!--<input id="search" v-model="searchTerm" class="input" type="text" placeholder="Search" />
			<g-link v-for="result in searchResults" :key="result.id" :to="result.path" class="navbar-item">
				{{ result.title }}
			</g-link>-->
			<v-autocomplete
				v-model="result"
				:search-input.sync="searchTerm"
				:items="searchResults || []"
				item-value="id"
				item-text="title"
				cache-items
				color="white"
				rounded
				solo
				dense
				hide-no-data
				hide-selected
				placeholder="Search"
				append-icon="mdi-magnify"
				return-object
				class="mt-6"
				style="max-width: 24rem"
			/>
			<v-spacer />
			<v-toolbar-items>
				<v-btn text exact :to="{name: 'home'}">
					Home
				</v-btn>
				<v-btn text :to="{name: 'blog'}">
					Blog
				</v-btn>
			</v-toolbar-items>
		</v-app-bar>
		<v-main>
			<v-container>
				<slot />
			</v-container>
		</v-main>
		<v-footer padless>
			<v-col class="text-center" cols="12">
				Copyright &copy; Aaron Davies {{new Date().getFullYear()}} {{$root.$options.metaInfo.title}}
			</v-col>
		</v-footer>
	</v-app>
</template>

<script>
	import Search from 'gridsome-plugin-flexsearch/SearchMixin';
	import social from '~/components/social.vue';
	export default {
		mixins: [Search],
		components: {social},
		data() {
			return {
				searchTerm: '',
				items: [],
				result: '',
			};
		},
		watch: {
			result: function(result) {
				this.$router.push({path: result.path});
			},
		},
	};
</script>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Roboto Slab', arial, sans-serif;
		font-weight: 300;
		color: #000;
	}
	h1 {
		margin-top: 1em;
		margin-bottom: 0 !important;
	}
	h2 {
		margin-top: 1em;
		margin-bottom: 0em;
	}
	body {
		font-family: 'Roboto', arial, sans-serif;
		font-weight: 300;
		font-size: 20px;
		line-height: 36px;
		color: #868f90;
	}
	a {
		color: #e32929 !important;
		text-decoration: none;
	}
	a:hover,
	a:focus {
		color: #a91616;
		text-decoration: underline;
	}
	ul,
	ol {
		margin-bottom: 1em;
	}
	table,
	th,
	td,
	tr,
	thead,
	tbody {
		border: 1px solid black;
		padding: 4px;
		margin-left: auto;
		margin-right: auto;
	}
	table {
		border-collapse: collapse;
	}
</style>
