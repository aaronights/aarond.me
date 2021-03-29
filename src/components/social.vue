<template>
	<ul class="social">
		<li>
			<a href="https://twitter.com/aaronights" alt="Twitter" target="_blank" rel="nofollow noopener noreferrer">
				<g-image v-if="images" src="../media/images/social/webicon-twitter.png" />
				<v-icon v-else style="color: #1DA1F2">mdi-twitter</v-icon>
			</a>
		</li>
		<li>
			<a href="https://www.youtube.com/user/aaroNiGHTS" alt="YouTube" target="_blank" rel="nofollow noopener noreferrer">
				<g-image v-if="images" src="../media/images/social/webicon-youtube.png" />
				<v-icon v-else style="color: #FF0000">mdi-youtube</v-icon>
			</a>
		</li>
		<li>
			<a href="https://www.facebook.com/aaronights" alt="Facebook" target="_blank" rel="nofollow noopener noreferrer">
				<g-image v-if="images" src="../media/images/social/webicon-facebook.png" />
				<v-icon v-else style="color: #4267B2">mdi-facebook</v-icon>
			</a>
		</li>
		<li>
			<a href="https://www.instagram.com/aaronights/" alt="Instagram" target="_blank" rel="nofollow noopener noreferrer">
				<g-image v-if="images" src="../media/images/social/webicon-instagram.png" />
				<v-icon v-else style="color: #405DE6">mdi-instagram</v-icon>
			</a>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['images'],
	};
</script>


<style>
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
