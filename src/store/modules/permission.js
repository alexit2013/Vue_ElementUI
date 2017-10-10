/**
 * Created by huangxiaofeng on 2017-09-28 0028.
 */

import { constantRouterMap, asynRouterMap } from 'router/index'
import { getAuthRoutes } from 'api/user/userAPI'
import whiteList from '../../router/whiteList'

/**
 * 判断路由表里的路由是否可以添加到用户安全路由里
 * @param authRoutes
 * @param route
 */
function hasPermission(authRoutes, route) {
  const curPath = route.path;
  return whiteList.indexOf(curPath)>=0 || authRoutes.indexOf(curPath)>=0;
}

/**
 * 递归过滤异步路由表，返回符合AuthRoutes的路由表
 * @param asynRouterMap 需要权限访问的路由表
 * @param authRoutes 后台返回的角色路由数组
 */
function filterAsynRouter(asynRouterMap, authRoutes) {
  const accessedRouters = asynRouterMap.filter(route => {
    if (hasPermission(authRoutes, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsynRouter(route.children, authRoutes);
      }
      return true
    }
    return false
  });
  return accessedRouters;
}


export default {
  state: {
    authRoutes: '', // 后台返回当前角色可访问路由数组
    routers: constantRouterMap, // 路由常量数组
    accessedRouters: ''  // 根据角色路由匹配到的路由表
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.accessedRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    },
    SET_AUTH_ROUTES(state, routes){
      state.authRoutes = routes;
    }
  },
  actions: {
    getAuthRoutes({ commit, state}, role){
      return new Promise((resolve, reject) => {
        getAuthRoutes(role).then(response => {
          const data = response.data;
          commit('SET_AUTH_ROUTES', data);
          resolve(data);
        }).catch(error => {
          reject(error);
        });
      });
    },
    generateRoutes({ commit, state }, role, authRoutes) {
      return new Promise( resolve => {
        let accessedRouters;
        if (role === 'admin'){
          accessedRouters = asynRouterMap;
        } else {
          accessedRouters = filterAsynRouter(asynRouterMap, authRoutes);
        }
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    }
  }
}

