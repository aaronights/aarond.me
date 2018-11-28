import Vuetify from 'vuetify';
import DefaultLayout from '~/layouts/Default.vue';

import 'vuetify/dist/vuetify.min.css';

export default function (Vue, { head }) {
  Vue.use(Vuetify, {
    theme: {
      primary: '#a91616',
      secondary: '#000000',
      accent: '#e32929'
    }
  })
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:300,700|Roboto:300,300i,700,700i'
  })
}