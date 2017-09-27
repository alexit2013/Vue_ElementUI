<template>

    <div class="main-menu-container">
        <div class="main-menu-scroll">
            <div class="main-menu-shrink">
                <i v-menu-shrink class="fa fa-bars main-menu-shrink-btn" aria-hidden="true"></i>
            </div>
            <el-menu class="main-menu" :collapse="$store.getters.menuShrink" @select="menuSelected" :default-active="$route.path" :unique-opened="true" :router="true" theme="dark">
                <template v-for="(item, pIndex) in menus">
                    <el-submenu v-menu-shrink v-if="item.subMenu" :index="pIndex+1+''" :key="item.title">
                        <template slot="title"><i class="menu-icon" :class="[item.menuIcon.split(' ')[0],item.menuIcon.split(' ')[1]]" aria-hidden="true"></i><span>{{item.title}}</span></template>
                        <el-menu-item v-for="(subItem, cIndex) in item.subMenu" :key="subItem.title" :index="subItem.linkPath">{{subItem.title}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="item.linkPath"><i class="menu-icon" :class="[item.menuIcon.split(' ')[0],item.menuIcon.split(' ')[1]]" aria-hidden="true"></i><span>{{item.title}}</span></el-menu-item>
                </template>
            </el-menu>
        </div>
    </div>

</template>

<script>
  import { validRoleRouter } from 'utils/authValidate'
export default {
  name: 'MainMenu',
  data () {
    return {
      menus: [
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
      ]
    }
  },
  mounted: function () {
    $('.main-menu-scroll').slimScroll({
      width: '100%',
      height: '100%',
      color: 'transparent',
      railColor: 'transparent',
      railVisible: true,
      alwaysVisible: true
    });
  },
  methods: {
    menuSelected: function (indexPath) {
      if (!validRoleRouter(indexPath)) {
        return
      }
      for (var item of this.menus) {
        if (item.subMenu && item.subMenu.length > 0) {
          for (var sItem of item.subMenu) {
            if (sItem.linkPath === indexPath) {
              this.$store.dispatch('pushTab', {name: indexPath, title: sItem.title});
              return;
            }
          }
        } else {
          if (item.linkPath === indexPath) {
            this.$store.dispatch('pushTab', {name: indexPath, title: item.title});
            return;
          }
        }

      }
    }

  }
}
</script>

<style scoped>

    /* 菜单组件容器,展开/收缩：12.5rem/4rem */
    .main-menu-container {
        width: 12.5rem;
        height: 90.5%;
        max-height: 90.5%;
        background-color: #324157;
        transition: .38s;
    }

    /* 菜单组件 */
    .main-menu {
        position: relative;
        width: 100%;
        height: 100%;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        user-select: none;
    }

    /* 菜单图标 */
    .menu-icon {
        display: inline-block;
        font-size: 18px;
        margin: 0 10px 0 5px;
        width: 18px;
        height: 18px;
    }

    /* 收缩按钮容器*/
    .main-menu-shrink{
        position: relative;
        height: 3rem;
        background-color: #324157;
        border-bottom: 1px dashed rgba(191,203,217,1);
    }

    /* 收缩按钮 */
    .main-menu-shrink-btn{
        position: absolute;
        right: 1.2rem;
        font-size: 22px;
        color: #bfcbd9;
        line-height: 3rem;
        display: inline-block;
        cursor: pointer;
        transition: .38s;
    }

</style>
