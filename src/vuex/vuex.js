/**
 * Created by huangxiaofeng on 2017-09-08 0008.
 */
import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const vuex = new Vuex.Store({
    state:{
      tabs: [{
        title: '欢迎使用',
        name: '/MainWelcome'
      }]
    },
    mutations:{
      PUSH_TAB(state, tab){
        state.tabs.push(tab);
      },
      SET_TABS(state, tabs){
        state.tabs = tabs;
      }
    },
    actions: {
      pushTab({ commit }, tab){
        commit("PUSH_TAB", tab);
      },
      setTabs({ commit }, tabs){
        commit("SET_TABS", tabs);
      }
  }
});
