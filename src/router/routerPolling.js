/**
 * Created by huangxiaofeng on 2017-09-26 0027.
 */

import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import store from 'store/index'
import { getToken } from 'utils/token'
import whiteList from 'router/whiteList'
import { Message } from 'element-ui'
import router from './index'

/* 页面加载进度条配置 */
NProgress.configure({ easing: 'ease', speed: 300, minimum: 0.1, showSpinner: false });

/* 路由钩子 */
router.beforeEach((to, from, next) => {

  NProgress.start();

  if(whiteList.indexOf(to.path) >= 0){next(); return}

  if(!!getToken()){

    !store.getters.menus && store.dispatch('setMenus', ls.get('menus'));

    !store.getters.authRoutes && store.dispatch('generateAuthRoutes', store.getters.menus);

    if(store.getters.authRoutes.indexOf(to.path) < 0 ){
      next('/404');
      NProgress.done();
      return;
    }

    next();

  }else{
    next('/PageLogin');
    NProgress.done();
  }
});

router.afterEach(() => {
  NProgress.done();
});
