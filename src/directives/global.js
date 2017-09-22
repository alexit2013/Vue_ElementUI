/**
 * Created by Administrator on 2017-09-20 0020.
 */

import Vue from 'vue'
import store from 'store/index'
import router from 'router/index'

/*
 * 点击元素后，添加一个tab
 * 指令参数：{title: '首页', name: '/main'}
 * 示例：
 * <li v-add-tab="{title: '首页', name: '/main'}">点我添加一个名为"首页"的标签页</li>
 */
Vue.directive('addTab', {
  inserted: (el, binding) => {
    let $el = $(el);
    let val = binding.value;
    $el.click(function () {
      store.dispatch('pushTab', {title: val.title, name:val.name});
      router.push('/OperatorManage');
    });
  }
});


