import Vue from 'vue'
import Router from 'vue-router'
import PageMain from './../pages/PageMain.vue'
import MainWelcome from './../components/MainWelcome.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router);

NProgress.configure({ easing: 'ease', speed: 300, minimum: 0.1, showSpinner: false });

/* 异步加载组件 */
const PageRegister = resolve => require(['../pages/register/PageRegister.vue'], resolve);
const RoleManage = resolve => require(['./../components/RoleManage.vue'], resolve);
const OperatorManage = resolve => require(['./../components/OperatorManage.vue'], resolve);
const Page404 = resolve => require(['./../pages/Page404.vue'], resolve);


const router =  new Router({
  scrollBehavior: ()=>({y:0}), //滚动条起始位置
  routes: [
    {
      path: '/',
      redirect: '/MainWelcome'
    },
    {
      path: '/PageLogin',
      component: PageRegister,
      name: '登录'
    },
    {
      path: '/',
      name: 'PageMain',
      component: PageMain,
      children: [
        { path: '/MainWelcome', name: '欢迎页', component: MainWelcome },
        { path: '/RoleManage', name: '角色管理', component: RoleManage },
        { path: '/OperatorManage', name: '操作员管理', component: OperatorManage },
      ]
    },
    {
      path: '/404',
      component: Page404,
      name: '页面走丢啦',
      hidden: true
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }
  ]
});

/* 路由钩子 */
router.beforeEach((to, from, next) => {
  NProgress.start();
  next()   // 继续跳转，如果传入一个路由地址，将改变航向，如果传入false，将取消导航
});

router.afterEach(() => {
  NProgress.done();
});



export default router;
