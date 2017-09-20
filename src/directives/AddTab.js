/**
 * Created by Administrator on 2017-09-20 0020.
 */

import Vue from 'vue'

export default function () {

  Vue.directive('addTab', {
    inserted: function (el) {
      // 聚焦元素
      el.focus();
    }
  });

}
