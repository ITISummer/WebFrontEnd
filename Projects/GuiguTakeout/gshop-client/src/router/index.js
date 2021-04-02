/* 路由器模块 */
/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
// 申明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            // 默认显示此路径下的内容
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/msite',
            component: Msite
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/profile',
            component: Profile
        }
    ]
})
