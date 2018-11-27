/**
 * @file router.js
 * @author aosyang<yangyanzhao@baidu.com>
 */
import Vue from 'vue';
import Main from '../page/home/main.vue';
import Two from '../page/two/main.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Main,
        meta: {
            page: 'Main',
            title: '我是第一个页面'
        }
    },
    {
        path: '/two',
        component: Two,
        meta: {
            page: 'Secret',
            title: '我是第二个页面'
        }
    }
];


export default new VueRouter({
    routes
});
