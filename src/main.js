
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import elementUI from 'element-ui'
import slimscroll from 'jquery-slimscroll'
import echarts from 'echarts'
import store from './store/index'
import directives from './directives/global'

import './../static/reset.css'
import 'element-ui/lib/theme-default/index.css'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.echarts = echarts;

Vue.use(elementUI);
directives();

new Vue({
  el: '#app',
  store:store,
  router,
  template: '<App/>',
  components: { App }
});

