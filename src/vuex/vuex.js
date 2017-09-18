/**
 * Created by huangxiaofeng on 2017-09-08 0008.
 */
import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

//全局组件状态管理
export const vuex = new Vuex.Store({
    state:{
      userName:"hello"
    },
    mutations:{
      SHOWUSERNAME(state, str){
        state.userName = state.userName.split('').reverse().join('');
        //alert(str);
      }
    },
    actions: {
      showUserName( context, str ) {
        // { commit } commit("SHOWUSERNAME");
        context.commit("SHOWUSERNAME", str);
      }
  }
});
