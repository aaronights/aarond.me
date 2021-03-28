import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, {appOptions, head}) {
	head.link.push({
		rel: 'stylesheet',
		href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
	});

	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
	});

	const opts = {
		iconfont: 'md',
		theme: {
			primary: '#a91616',
			secondary: '#000000',
			accent: '#e32929',
		},
	};
	Vue.use(Vuetify);
	appOptions.vuetify = new Vuetify(opts);
	Vue.component('Layout', DefaultLayout);
}
