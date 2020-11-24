import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from 'axios'
import animated from './util/animated'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScrollTo from 'vue-scrollto'
import './plugins/axios'
import './assets/css/animate.css'
import './assets/css/font-awesome.min.css'
import './permission'

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