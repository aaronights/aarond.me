import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, {appOptions, head}) {
	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
	});

	const opts = {
		iconfont: 'md',
		theme: {
			primary: '#a91616',
			secondary: '#000000',
			accent: '#e32929'
		}
	};
	Vue.use(Vuetify);

	appOptions.vuetify = new Vuetify(opts); //.$mount('#app');

	Vue.component('Layout', DefaultLayout);
}