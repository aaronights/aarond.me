<template>
	<v-layout row wrap>
		<v-flex xs12 md6 pa-4>
			<!--<v-img src="../media/images/aaron.jpg"></v-img>-->
			<g-image src="../media/images/aaron.jpg" style="width: 20%"></g-image>
		</v-flex>
		<v-flex xs12 md6 px-4 py-5>
			<h1>My name is Aaron Davies.</h1>
			<p>This is what I do.</p>
			<ul class="social">
				<li><a href="https://twitter.com/aaronights" alt="Twitter" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-twitter.png" /></a></li>
				<li><a href="https://www.youtube.com/user/aaroNiGHTS" alt="YouTube" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-youtube.png" /></a></li>
				<li><a href="https://www.facebook.com/aaronights" alt="Facebook" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-facebook.png" /></a></li>
				<li><a href="https://www.instagram.com/aaronights/" alt="Instagram" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-instagram.png" /></a></li>
			</ul>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		metaInfo: {
			title: 'Splash!'
		}
	}
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
</style>