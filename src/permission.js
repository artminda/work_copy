//页面跳转位置回到顶部
import router from './router/index'
router.beforeEach((to, from, next)=>{
    document.body.scrollTop=0
    document.documentElement.scrollTop=0
    window.pageYOffset=0
    next()
})