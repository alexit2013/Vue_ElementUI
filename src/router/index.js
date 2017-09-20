import Vue from 'vue'
import Router from 'vue-router'
import PageMain from './../pages/PageMain.vue'
import Page404 from './../pages/Page404.vue'
import PageRegister from '../pages/register/PageRegister.vue'
import RoleManage from './../components/RoleManage.vue'
import OperatorManage from './../components/OperatorManage.vue'
import MainWelcome from './../components/MainWelcome.vue'

Vue.use(Router);

var router =  new Router({
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


router.beforeEach((to, from, next) => {

  console.log('改变了');


  next()   // 进行下一个钩子函数
});


export default router;
