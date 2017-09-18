
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import elementUI from 'element-ui'
import slimscroll from 'jquery-slimscroll'
import echarts from 'echarts'

import './../static/reset.css'
import 'element-ui/lib/theme-default/index.css'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.echarts = echarts;

Vue.use(elementUI); /* exports 导出的所有属性和方法都绑定到Vue全局对象的prototype原型对象上 */


new Vue({
  el: '#app',
  data () {
    return {
       'abc': 333
    }
  },
  methods: {
    hello: function () {
      alert(666);
    }
  },
  router,
  template: '<App/>',
  components: { App }
});

