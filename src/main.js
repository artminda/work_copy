import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from 'axios'
import animated from './util/animated'
import './plugins/axios'
import './assets/css/animate.css'
import './assets/css/font-awesome.min.css'
import './permission'

Vue.use(animated)

// axios.defaults.baseURL=process.env.VUE_APP_URL;
Vue.use('axios')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
