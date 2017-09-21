/**
 * Created by huangxiaofeng on 2017-09-21 0021.
 */

export default {
  state:{
    tabs: [{
      title: '欢迎使用',
      name: '/MainWelcome'
    }]
  },
  mutations:{
    PUSH_TAB(state, tab){
      state.tabs.filter((item) => {
        return tab.name === item.name;
      }).length < 1 && state.tabs.push(tab);
    },
    SET_TABS(state, tabs){
      state.tabs = tabs;
    },
    CLEAR_TABS(state){
      state.tabs.length > 1 && state.tabs.splice(1,state.tabs.length);
    },
    SAVE_TABS(state){
      ls.set('tabs', state.tabs);
    }
  },
  actions: {
    pushTab({ commit }, tab){
      commit("PUSH_TAB", tab);
      commit("SAVE_TABS");
    },
    setTabs({ commit }, tabs){
      commit("SET_TABS", tabs);
      commit("SAVE_TABS");
    },
    clearTabs({ commit }){
      commit("CLEAR_TABS");
      commit("SAVE_TABS");
    }
  }
};

