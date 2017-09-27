
/* 以下CSS加载顺序不要随意调整 */
import 'static/reset.css'
import 'element-ui/lib/theme-default/index.css'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './router/routerPolling'
import elementUI from 'element-ui'
import echarts from 'echarts'
import store from './store/index'
import 'jquery-slimscroll'
import 'directives/global'

Vue.config.productionTip = false;

Vue.prototype.echarts = echarts;

Vue.use(elementUI);

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});

