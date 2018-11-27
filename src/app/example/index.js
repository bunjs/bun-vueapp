import store from './base/store';
import router from './base/routes.js';
import api from './base/api.js';
import FrameIndex from './base/App.vue';

//暴露给后端渲染用
module.exports = {
  store,
  router,
  api,
  FrameIndex
}