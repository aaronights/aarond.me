<template>
	<v-app>
			<v-toolbar>
			<v-toolbar-title>{{$root.$options.metaInfo.title}}</v-toolbar-title>
			<v-spacer />
			<v-toolbar-items>
				<v-btn flat exact :to="{name: 'home'}">Home</v-btn>
				<v-btn flat :to="{name: 'blog'}">Blog</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<v-container>
			<slot />
		</v-container>
			<v-footer>
			<v-layout justify-center row wrap>
			 <v-flex text-xs-center xs12 style="margin-bottom: 0">Copyright &copy; {{new Date().getFullYear()}} {{$root.$options.metaInfo.title}}</v-flex>
			</v-layout>
		</v-footer>
	</v-app>
</template>

<style>
  h1, h2, h3, h4, h5, h6 {
		font-family: "Roboto Slab", arial, sans-serif;
    font-weight: 300;
		color: #000;
	}
  h1 {
    margin-top: 1em;
    margin-bottom: 0 !important;
  }
  h2 {
		margin-top: 1em;
    margin-bottom: 1em;
  }
	body {
		font-family: "Roboto", arial, sans-serif;
		font-weight: 300;
		font-size: 20px;
		line-height: 36px;
		color: #868f90;
	}
	a {
		color: #e32929 !important;
		text-decoration: none;
	}
	a:hover, a:focus {
		color: #a91616;
		text-decoration: underline;
	}
  ul, ol {
    margin-bottom: 1em;
  }
</style>
