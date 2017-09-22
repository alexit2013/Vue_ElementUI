<template>

  <div class="main-left-menu">

      <el-menu class="main-menu" @select="menuSelected" :default-active="$route.path" :unique-opened="true" :router="true" :collapse="menuCollapse" theme="dark">
        <template v-for="(item, pIndex) in menus">
          <el-submenu v-if="item.subMenu" :index="pIndex+1+''" :key="item.title">
            <template slot="title"><i class="menu-icon" :class="[item.menuIcon.split(' ')[0],item.menuIcon.split(' ')[1]]" aria-hidden="true"></i>{{item.title}}</template>
            <el-menu-item v-for="(subItem, cIndex) in item.subMenu" :key="subItem.title" :index="subItem.linkPath">{{subItem.title}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="item.linkPath"><i class="menu-icon" :class="[item.menuIcon.split(' ')[0],item.menuIcon.split(' ')[1]]" aria-hidden="true"></i>{{item.title}}</el-menu-item>
        </template>
      </el-menu>

  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      menuCollapse: false,
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
            {title:"字典数据",linkPath:"/zzz"},
            {title:"证件类型",linkPath:"/zzz"},
            {title:"事件类型",linkPath:"/zzz"},
            {title:"地区管理",linkPath:"/zzz"}
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
        },
        {
          title:"自定义哈",
          linkPath:"/lala",
          menuIcon:"fa fa-pie-chart"
        }

      ]
    }
  },
  mounted: function () {
    $('.main-menu').slimScroll({  //自定义滚动条
      width: '200px',
      height: '580px',
      color: 'transparent',
      railColor: 'transparent',
      railVisible: true,
      alwaysVisible: true
    });
  },
  methods: {
    menuSelected: function (indexPath) {
      for (var item of this.menus) {
        if(item.subMenu && item.subMenu.length > 0){
          for (var sItem of item.subMenu) {
            if(sItem.linkPath === indexPath){
                this.$store.dispatch('pushTab', {name: indexPath, title: sItem.title});
                return;
            }
          }
        }else{
          if(item.linkPath === indexPath){
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

  .main-left-menu{
    position: absolute;
    width: 12.5rem;
    height: 100%;
    background-color: #324157;
    user-select: none;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .menu-icon{
    display: inline-block;
    font-size: 18px;
    margin: 0 10px 0 5px;
    width: 18px;
    height: 18px;
  }

  .el-menu{
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    min-height: 100%;
    transition: .38s;
  }


</style>
