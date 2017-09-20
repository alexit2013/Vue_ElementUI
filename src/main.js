
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import elementUI from 'element-ui'
import slimscroll from 'jquery-slimscroll'
import echarts from 'echarts'
import { vuex } from './vuex/vuex'

import './../static/reset.css'
import 'element-ui/lib/theme-default/index.css'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.echarts = echarts;

Vue.use(elementUI);

new Vue({
  el: '#app',
  store:vuex,
  router,
  template: '<App/>',
  components: { App }
});

