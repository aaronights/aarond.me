// import Vuetify from 'vuetify';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, {appOptions, head}) {
	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
	});
	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:300,700|Roboto:300,300i,700,700i',
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

	appOptions.vuetify = new Vuetify(opts); //.$mount('#app');

	Vue.component('Layout', DefaultLayout);
}
