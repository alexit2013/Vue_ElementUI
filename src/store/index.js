/**
 * Created by huangxiaofeng on 2017-09-08 0008.
 */
import Vue from 'vue'
import Vuex from 'vuex';
import tabs from './modules/tabs';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tabs
  },
  getters
});
