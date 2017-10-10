/**
 * Created by huangxiaofeng on 2017/09/08.
 */

import Mock from 'mockjs'
import store from 'store/index'

const baseUrl = process.env.BASE_API;
const Random = Mock.Random;

export default function(){

  Random.extend({
    selectOne: function(dateArr) {
      let selectOne = dateArr;
      return this.pick(selectOne);
    }
  });

	Mock.mock(`${baseUrl}/getAllUserInfo`, {
		"UserInfo":Array(10).fill(1).map(() => {
			return {
			  "id|+1": 1,
        name: Random.cname(), //随机生成一个中文姓名
        date: Random.date('yyyy-MM-dd'), //随机生成一个日期
        address: Random.county(true) + Random.csentence(6, 10), //随机生成一个省市县 + 6-10个中文字符
        tag: Random.selectOne(['家', '公司']) //随机选择一个自定义字符串
			}
		})
	});

}


/* 模拟'admin'权限: 最高权限 */
export const mockAdmin = function () {

  const menus = [
    {
      title:"系统管理",
      linkPath:"",
      menuIcon:"fa fa-cog",
      subMenu:[
        {title:"角色管理",linkPath:"/RoleManage"},
        {title:"操作员管理",linkPath:"/OperatorManage"}
      ]
    },
    {
      title:"基础数据管理",
      linkPath:"",
      menuIcon:"fa fa-bar-chart",
      subMenu:[
        {title:"证件类型1112",linkPath:"/zzz"},
        {title:"事件类型",linkPath:"/zzz"},
        {title:"地区管理",linkPath:"/zzz"},
        {title:"字典数据",linkPath:"/zzz"},
        {title:"证件类型",linkPath:"/zzz"},
        {title:"事件类型",linkPath:"/zzz"},
        {title:"字典数据",linkPath:"/zzz"},
        {title:"证件类型",linkPath:"/zzz"},
        {title:"事件类型",linkPath:"/zzz"},
        {title:"字典数据",linkPath:"/zzz"}
      ]
    },
    {
      title:"工作流管理",
      linkPath:"",
      menuIcon:"fa fa-sitemap",
      subMenu:[
        {title:"流程管理",linkPath:"/zzz"},
        {title:"环节管理",linkPath:"/zzz"},
        {title:"活动管理",linkPath:"/zzz"}
      ]
    },
    {
      title:"工单管理",
      linkPath:"",
      menuIcon:"fa fa-book",
      subMenu:[
        {title:"事件上报",linkPath:"/zzz"},
        {title:"12345热线",linkPath:"/zzz"},
        {title:"领导交办",linkPath:"/zzz"}
      ]
    },
    {
      title:"应急预案",
      linkPath:"",
      menuIcon:"fa fa-bell",
      subMenu:[
        {title:"预案管理",linkPath:"/zzz"},
        {title:"预案流程设置",linkPath:"/zzz"},
        {title:"预案通知模板",linkPath:"/zzz"}
      ]
    },
    {
      title:"个人事务",
      linkPath:"",
      menuIcon:"fa fa-user",
      subMenu:[
        {title:"事件待办",linkPath:"/zzz"},
        {title:"回访待办",linkPath:"/zzz"},
        {title:"消息中心",linkPath:"/zzz"}
      ]
    },
    {
      title:"数据统计",
      linkPath:"",
      menuIcon:"fa fa-pie-chart",
      subMenu:[
        {title:"签到统计",linkPath:"/zzz"},
        {title:"求救统计",linkPath:"/zzz"},
        {title:"求救统计(按网格)",linkPath:"/zzz"}
      ]
    }
  ];

  //设置Token、角色、用户信息、菜单信息
  store.commit('SET_TOKEN', 'a3578asd21cxx54asd21as5d4as');
  ls.set('Token', 'a3578asd21cxx54asd21as5d4as');
  store.commit('SET_USER_INFO', {name:'Admin', age:'26'});
  store.commit('SET_ROLE', 'admin');

  //设置权限菜单
  store.commit('SET_MENUS', menus);
  ls.set('menus', menus);
};

/* 模拟'superManager'权限: 超级管理员没有角色管理权限 */
export const mockSuperManager = function () {

  const menus = [
    {
      title:"系统管理",
      linkPath:"",
      menuIcon:"fa fa-cog",
      subMenu:[
        {title:"操作员管理",linkPath:"/OperatorManage"}
      ]
    },
    {
      title:"基础数据管理",
      linkPath:"",
      menuIcon:"fa fa-bar-chart",
      subMenu:[
        {title:"证件类型1112",linkPath:"/zzz"},
        {title:"事件类型",linkPath:"/zzz"},
        {title:"地区管理",linkPath:"/zzz"},
        {title:"字典数据",linkPath:"/zzz"},
        {title:"证件类型",linkPath:"/zzz"},
        {title:"事件类型",linkPath:"/zzz"},
        {title:"字典数据",linkPath:"/zzz"},
        {title:"证件类型",linkPath:"/zzz"},
        {title:"事件类型",linkPath:"/zzz"},
        {title:"字典数据",linkPath:"/zzz"}
      ]
    },
    {
      title:"工作流管理",
      linkPath:"",
      menuIcon:"fa fa-sitemap",
      subMenu:[
        {title:"流程管理",linkPath:"/zzz"},
        {title:"环节管理",linkPath:"/zzz"},
        {title:"活动管理",linkPath:"/zzz"}
      ]
    },
    {
      title:"工单管理",
      linkPath:"",
      menuIcon:"fa fa-book",
      subMenu:[
        {title:"事件上报",linkPath:"/zzz"},
        {title:"12345热线",linkPath:"/zzz"},
        {title:"领导交办",linkPath:"/zzz"}
      ]
    },
    {
      title:"应急预案",
      linkPath:"",
      menuIcon:"fa fa-bell",
      subMenu:[
        {title:"预案管理",linkPath:"/zzz"},
        {title:"预案流程设置",linkPath:"/zzz"},
        {title:"预案通知模板",linkPath:"/zzz"}
      ]
    },
    {
      title:"个人事务",
      linkPath:"",
      menuIcon:"fa fa-user",
      subMenu:[
        {title:"事件待办",linkPath:"/zzz"},
        {title:"回访待办",linkPath:"/zzz"},
        {title:"消息中心",linkPath:"/zzz"}
      ]
    },
    {
      title:"数据统计",
      linkPath:"",
      menuIcon:"fa fa-pie-chart",
      subMenu:[
        {title:"签到统计",linkPath:"/zzz"},
        {title:"求救统计",linkPath:"/zzz"},
        {title:"求救统计(按网格)",linkPath:"/zzz"}
      ]
    }
  ];

  store.commit('SET_TOKEN', 'gfd4er845d1sdf54sd6f54ds21');
  ls.set('Token', 'gfd4er845d1sdf54sd6f54ds21');
  store.commit('SET_USER_INFO', {name:'超级管理员', age:'26'});
  store.commit('SET_ROLE', 'superManager');

  //设置权限菜单
  store.commit('SET_MENUS', menus);
  ls.set('menus', menus);
};

/* 模拟'manager'权限: 普通管理员没有操作员管理权限 */
export const mockManager = function () {

  const menus = [
    {
      title:"系统管理",
      linkPath:"",
      menuIcon:"fa fa-cog",
      subMenu:[
        {title:"角色管理",linkPath:"/RoleManage"}
      ]
    },
    {
      title:"基础数据管理",
      linkPath:"",
      menuIcon:"fa fa-bar-chart",
      subMenu:[
        {title:"证件类型1112",linkPath:"/zzz"},
        {title:"事件类型",linkPath:"/zzz"},
        {title:"地区管理",linkPath:"/zzz"},
        {title:"字典数据",linkPath:"/zzz"},
        {title:"证件类型",linkPath:"/zzz"},
        {title:"事件类型",linkPath:"/zzz"},
        {title:"字典数据",linkPath:"/zzz"},
        {title:"证件类型",linkPath:"/zzz"},
        {title:"事件类型",linkPath:"/zzz"},
        {title:"字典数据",linkPath:"/zzz"}
      ]
    },
    {
      title:"工作流管理",
      linkPath:"",
      menuIcon:"fa fa-sitemap",
      subMenu:[
        {title:"流程管理",linkPath:"/zzz"},
        {title:"环节管理",linkPath:"/zzz"},
        {title:"活动管理",linkPath:"/zzz"}
      ]
    },
    {
      title:"工单管理",
      linkPath:"",
      menuIcon:"fa fa-book",
      subMenu:[
        {title:"事件上报",linkPath:"/zzz"},
        {title:"12345热线",linkPath:"/zzz"},
        {title:"领导交办",linkPath:"/zzz"}
      ]
    },
    {
      title:"应急预案",
      linkPath:"",
      menuIcon:"fa fa-bell",
      subMenu:[
        {title:"预案管理",linkPath:"/zzz"},
        {title:"预案流程设置",linkPath:"/zzz"},
        {title:"预案通知模板",linkPath:"/zzz"}
      ]
    },
    {
      title:"个人事务",
      linkPath:"",
      menuIcon:"fa fa-user",
      subMenu:[
        {title:"事件待办",linkPath:"/zzz"},
        {title:"回访待办",linkPath:"/zzz"},
        {title:"消息中心",linkPath:"/zzz"}
      ]
    },
    {
      title:"数据统计",
      linkPath:"",
      menuIcon:"fa fa-pie-chart",
      subMenu:[
        {title:"签到统计",linkPath:"/zzz"},
        {title:"求救统计",linkPath:"/zzz"},
        {title:"求救统计(按网格)",linkPath:"/zzz"}
      ]
    }
  ];

  //设置Token、角色、用户信息
  store.commit('SET_TOKEN', 'cxvsd1s65f48e1eww5e6f4sdf');
  ls.set('Token', 'cxvsd1s65f48e1eww5e6f4sdf');
  store.commit('SET_USER_INFO', {name:'管理员', age:'23'});
  store.commit('SET_ROLE', 'manager');

  //设置权限菜单
  store.commit('SET_MENUS', menus);
  ls.set('menus', menus);
};


