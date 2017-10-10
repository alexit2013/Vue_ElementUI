/**
 * Created by huangxiaofeng on 2017-09-21 0021.
 */

import { getMenus } from 'api/menu/menuAPI'

export default {
  state:{
    menuShrink: false,
    menus: '',
    authRoutes: ''
  },
  mutations:{
    CHANGE_SHRINK(state){
      state.menuShrink = !state.menuShrink;
    },
    SET_MENUS(state, menus){
      state.menus = menus;
    },
    SET_AUTH_ROUTES(state, routes){
      state.authRoutes = routes;
    }
  },
  actions: {
    changeShrink({ commit }){
      commit("CHANGE_SHRINK");
    },
    setMenus({ commit }, menus){
      commit("SET_MENUS", menus);
    },
    getMenus({ commit, state }){
      return new Promise((resolve, reject) => {
        getMenus(state.role).then(response => {
          const menus = response.data;
          commit('SET_MENUS', menus);
          ls.set('menus', menus);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    generateAuthRoutes({ commit }, menus){
      let authRoutes =['/MainWelcome'];
      for(let item of menus){
        item.linkPath && authRoutes.push(item.linkPath);
        if(item.hasOwnProperty('subMenu') && item.subMenu.length > 0){
          for(let sItem of item.subMenu){
            sItem.linkPath && authRoutes.push(sItem.linkPath);
          }
        }
      }
      commit("SET_AUTH_ROUTES", authRoutes);
    }

  }
};

