<template>
	<v-app class="ma-0 pa-0">
		<v-container fluid class="ma-0 pa-0">
			<v-row class="ma-0 pa-0">
				<v-col cols="12" md="6" class="ma-0 pa-0">
					<g-image src="../media/images/aaron.jpg" class="d-none d-md-block" style="height: 100vh; width: 100%; object-fit: cover; overflow: hidden; object-position: left bottom" />
					<g-image src="../media/images/aaron.jpg" class="d-block d-md-none" style="width: 100%; object-fit: cover; overflow: hidden; object-position: left bottom" />
				</v-col>
				<v-col cols="12" md="6" class="ma-0 pa-6">
					<h1 class="mb-6 h1">My name is Aaron Davies.</h1>
					<p>I’m a writer based out of Wellington, New Zealand.</p>
					<p>
						I write project articles to highlight great products and create technical documentation for devices and services. I also make videos, do photography and
						give public presentations.
					</p>
					<p>
						My vast and impressive array of work has been featured on <g-link :to="{path: '/blog/2015/04/22/raspberry-pi-2-powered-arcade'}">IGN.com</g-link>, <a href="http://www.stuff.co.nz/the-press/technology/8278539/Your-view-Game-Masters-at-Te-Papa" target="_blank" rel="nofollow noopener noreferrer">Stuff.co.nz</a> and <a href="https://www.element14.com/community/community/raspberry-pi/raspberrypi_projects/blog/2016/04/25/noir-v2-video-streaming-baby-monitor" target="_blank" rel="nofollow noopener noreferrer">element14.com</a>.
					</p>
					<p>
						On the side I maintain my <g-link :to="{path: '/blog/'}">personal blog</g-link> and enjoy running, video games, creative writing and advocating for important causes.
					</p>
					<ul class="want">
						<li>
							Want to start somewhere? <a href="https://www.element14.com/community/community/raspberry-pi/raspberrypi_projects/blog/2015/06/23/the-secrets-of-the-pi-camera--car-dvr-system" target="_blank" rel="nofollow noopener noreferrer">Read this</a>.
						</li>
						<li>
							Want to read something personal? <g-link :to="{path: '/blog/2017/04/11/dating-is-hard-and-i-am-very-awkward'}">Look here</g-link>.
						</li>
						<li>
							Want to hire my services? <a href="mailto:aaronights@gmail.com?Subject=Work">Email here</a>.
						</li>
					</ul>
					<social />
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
	import social from '~/components/social.vue';
	export default {
		metaInfo: {
			title: 'Splash!',
		},
		components: {
			social,
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
</style>
