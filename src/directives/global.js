/**
 * Created by Administrator on 2017-09-20 0020.
 */

import Vue from 'vue'
import store from './../store/index'
import router from './../router/index'

export default function () {

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

}
