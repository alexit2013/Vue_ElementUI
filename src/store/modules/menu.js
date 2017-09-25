/**
 * Created by huangxiaofeng on 2017-09-21 0021.
 */

export default {
  state:{
    menuShrink: false
  },
  mutations:{
    CHANGE_SHRINK(state){
      state.menuShrink = !state.menuShrink;
    }
  },
  actions: {
    changeShrink({ commit }){
      commit("CHANGE_SHRINK");
    }
  }
};

