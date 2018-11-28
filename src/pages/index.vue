<template>
	<v-layout row wrap pa-5 ma-5>
		<v-flex xs12 md6 pa-4>
			<!--<v-img src="../media/images/aaron.jpg"></v-img>-->
			<g-image src="../media/images/aaron.jpg" style="width: 100%"></g-image>
		</v-flex>
		<v-flex xs12 md6 px-4 py-5>
			<h1>My name is Aaron Davies.</h1>
			<p>I’m a writer based out of Wellington, New Zealand.</p>
			<p>I write project articles to highlight great products and do technical documentation for devices and services. I also do videos, photography and public presentations.</p>
			<p>My vast and impressive array of work has been featured on <g-link :to="{path: '/blog/2015/04/22/raspberry-pi-2-powered-arcade'}">IGN.com</g-link>, <a href="http://www.stuff.co.nz/the-press/technology/8278539/Your-view-Game-Masters-at-Te-Papa" target="_blank" rel="nofollow noopener noreferrer">Stuff.co.nz</a> and <a href="https://www.element14.com/community/community/raspberry-pi/raspberrypi_projects/blog/2016/04/25/noir-v2-video-streaming-baby-monitor" target="_blank" rel="nofollow noopener noreferrer">element14.com</a>.</p>
			<p>On the side I maintain my <g-link :to="{path: '/blog/'}">personal blog</g-link> and enjoy running, video games, creative writing and advocating for important causes.</p>
			<ul class="want">
				<li>Want to start somewhere? <a href="https://www.element14.com/community/community/raspberry-pi/raspberrypi_projects/blog/2015/06/23/the-secrets-of-the-pi-camera--car-dvr-system" target="_blank" rel="nofollow noopener noreferrer">Read this</a>.</li>
				<li>Want to read something personal? <g-link :to="{path: '/blog/2017/04/11/dating-is-hard-and-i-am-very-awkward'}">Look here</g-link>.</li>
				<li>Want to hire my services? <a href="mailto:aaronights@gmail.com?Subject=Work">Email here</a>.</li>
			</ul>
			<ul class="social">
				<li><a href="https://twitter.com/aaronights" alt="Twitter" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-twitter.png" /></a></li>
				<li><a href="https://www.youtube.com/user/aaroNiGHTS" alt="YouTube" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-youtube.png" /></a></li>
				<li><a href="https://www.facebook.com/aaronights" alt="Facebook" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-facebook.png" /></a></li>
				<li><a href="https://www.instagram.com/aaronights/" alt="Instagram" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-instagram.png" /></a></li>
			</ul>
		</v-flex>
	</v-layout>
</template>

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