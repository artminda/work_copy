import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import lottery from '../pages/lottery'
import contact from '../pages/contact'
import product from '../pages/product'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component:Home,name:'home'},
        { path: '/product', component:product,name:'product'},
        { path: '/lottery', component:lottery,name:'lottery'},
        { path: '/contact', component:contact,name:'contact'},
    ]
})
export default router