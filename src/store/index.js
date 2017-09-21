/**
 * Created by huangxiaofeng on 2017-09-08 0008.
 */
import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
      tabs: [{
        title: '欢迎使用',
        name: '/MainWelcome'
      }]
    },
    mutations:{
      PUSH_TAB(state, tab){
        state.tabs.filter((item) => {
          return tab.title === item.title;
        }).length < 1 && (state.tabs.push(tab));
      },
      SET_TABS(state, tabs){
        state.tabs = tabs;
      },
      CLEAR_TABS(state){
        state.tabs.length > 1 && state.tabs.splice(1,state.tabs.length);
      }
    },
    actions: {
      pushTab({ commit }, tab){
        commit("PUSH_TAB", tab);
      },
      setTabs({ commit }, tabs){
        commit("SET_TABS", tabs);
      },
      clearTabs({ commit }){

        commit("CLEAR_TABS");
      }
  }
});
