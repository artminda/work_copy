import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from 'axios'
import animated from './util/animated'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScrollTo from 'vue-scrollto'
import vSelect from 'vue-select'
import "vue-select/src/scss/vue-select.scss";
import './plugins/axios'
import './assets/css/animate.css'
import './permission'


Vue.component('v-select', vSelect)
Vue.use(VueScrollTo, { debounce: 600 });
Vue.use(animated,VueAwesomeSwiper)

// swiper.use([Navigation, Pagination, Autoplay])

// axios.defaults.baseURL=process.env.VUE_APP_URL;
Vue.use('axios')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// const scroll = new locomotiveScroll();