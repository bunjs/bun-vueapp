/**
 * @file main.js
 * @author aosyang<yangyanzhao@baidu.com>
 */
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vue from 'vue';

import {store, router, FrameIndex} from '../app/example/index';
// import {Loadmore} from 'mint-ui';
import 'vue2-animate/dist/vue2-animate.min.css';
Vue.use(MintUI);
// Vue.component(Loadmore.name, Loadmore);

new Vue({
    el: '#app',
    components: {FrameIndex},
    router,
    store,
    template: '<FrameIndex></FrameIndex>'
});
