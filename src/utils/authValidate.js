/**
 * Created by huangxiaofeng on 2017-09-25 0025.
 */

import auth from 'router/auth'
import store from 'store/index'

/* 判断某个角色是否能访问某个路由 */
export const validRoleRouter = function (pathName) {
  const role = store.getters.role;
  const needAuth = auth[pathName].auth;
  if(typeof needAuth==='string' && needAuth==='*'){return true}
  if(Object.prototype.toString.call(needAuth)==='[object Array]' && needAuth.indexOf(role) >=0 ){
    return true;
  }
};

/* 判断是否已登录 */
export const isLogin = function () {
  return !!store.getters.userInfo;
};
