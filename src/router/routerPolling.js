/**
 * Created by huangxiaofeng on 2017-09-26 0027.
 */

import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import { validRoleRouter, isLogin } from 'utils/authValidate'
import { Message } from 'element-ui'
import router from './index'

/* 页面加载进度条配置 */
NProgress.configure({ easing: 'ease', speed: 300, minimum: 0.1, showSpinner: false });

/* 路由钩子 */
router.beforeEach((to, from, next) => {

  /*
   * 一、用户是否登陆：
   *    1、已登录：进行第二步
    *   2、未登录：访问的路由是不是无需登录就能访问的，如登录页、注册页、404页，查询白名单数组
    *     2.1、是： 直接next()
    *     2.2、否：跳转到登录页面
   *
   * 二、所访问的路由是否存在于可访问路由表里
   *    1、存在：直接next()
   *    2、不存在：跳转到404页面(只有手动地址栏输入才会到这一步)
   *
   */

  NProgress.start();

  const path = to.path;
  if(!validRoleRouter(path)){
    if(isLogin()){
      Message({
        showClose: true,
        message: '抱歉，您无权访问该页面。'
      });
      NProgress.done();
      return;
    }else{
      next('/PageLogin');
      NProgress.done();
      return;
    }
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
