import Vue from 'vue'
import Router from 'vue-router'
import PageMain from 'pages/PageMain.vue'

Vue.use(Router);

/* 异步加载组件模块 */
const _import = require('./asynLoader');

/* 常量路由表 */
export const constantRouterMap =  [
    {
      path: '/',
      redirect: '/MainWelcome'
    },
    {
      path: '/PageRegister',
      component: _import('pages/register/PageRegister'),
      name: 'PageRegister'
    },
    {
      path: '/PageLogin',
      component: _import('pages/PageLogin'),
      name: 'PageLogin'
    },
    {
      path: '/PageMain',
      name: 'PageMain',
      component: PageMain,
      children: [
        { path: '/MainWelcome', name: 'MainWelcome', component: _import('components/MainWelcome') },
        { path: '/RoleManage', name: 'RoleManage', component: _import('components/RoleManage') },
        { path: '/OperatorManage', name: 'OperatorManage', component: _import('components/OperatorManage') },
      ]
    },
    {
      path: '/404',
      component: _import('pages/Page404'),
      name: '404',
      hidden: true
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }
];

/* 异步路由表 */
export const asynRouterMap = [

];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
