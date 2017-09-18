<template>

  <div class="main-left-menu">
      <el-menu class="main-menu" :default-active="$route.path" :unique-opened="true" :router="true" :collapse="menuCollapse" theme="dark">

        <el-submenu index="1">
          <template slot="title"><i class="fa fa-cog menu-icon" aria-hidden="true"></i>系统管理</template>
          <el-menu-item index="/RoleManage">角色管理</el-menu-item>
          <el-menu-item index="/OperatorManage">操作员管理</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="fa fa-bar-chart menu-icon" aria-hidden="true"></i>基础数据管理</template>
          <el-menu-item index="2-1">字典数据</el-menu-item>
          <el-menu-item index="2-2">证件类型</el-menu-item>
          <el-menu-item index="2-3">事件类型</el-menu-item>
          <el-menu-item index="2-4">地区管理</el-menu-item>
          <el-menu-item index="2-5">网格管理</el-menu-item>
          <el-menu-item index="2-6">部门管理</el-menu-item>
          <el-menu-item index="2-7">人员类型</el-menu-item>
          <el-menu-item index="2-7">房屋类型</el-menu-item>
          <el-menu-item index="2-7">人员管理</el-menu-item>
          <el-menu-item index="2-7">房屋管理</el-menu-item>
          <el-menu-item index="2-7">摄像头管理</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="fa fa-sitemap menu-icon" aria-hidden="true"></i>工作流管理</template>
          <el-menu-item index="3-1">流程管理</el-menu-item>
          <el-menu-item index="3-2">环节管理</el-menu-item>
          <el-menu-item index="3-2">活动管理</el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title"><i class="fa fa-book menu-icon" aria-hidden="true"></i>工单管理</template>
          <el-menu-item index="4-1">事件上报</el-menu-item>
          <el-menu-item index="4-2">12345热线</el-menu-item>
          <el-menu-item index="4-2">领导交办</el-menu-item>
          <el-menu-item index="4-2">事件工单查询</el-menu-item>
          <el-menu-item index="4-2">回访工单查询</el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title"><i class="fa fa-bell menu-icon" aria-hidden="true"></i>应急预案</template>
          <el-menu-item index="5-1">预案管理</el-menu-item>
          <el-menu-item index="5-2">预案流程设置</el-menu-item>
          <el-menu-item index="5-2">预案通知模板</el-menu-item>
          <el-menu-item index="5-2">预案启动</el-menu-item>
          <el-menu-item index="5-2">预案日志查询</el-menu-item>
          <el-menu-item index="5-2">预案工单查询</el-menu-item>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title"><i class="fa fa-user menu-icon" aria-hidden="true"></i>个人事务</template>
          <el-menu-item index="6-1">事件待办</el-menu-item>
          <el-menu-item index="6-2">回访待办</el-menu-item>
          <el-menu-item index="6-2">消息中心</el-menu-item>
          <el-menu-item index="6-2">预案通知</el-menu-item>
        </el-submenu>

        <el-submenu index="8">
          <template slot="title"><i class="fa fa-pie-chart menu-icon" aria-hidden="true"></i>数据统计</template>
          <el-menu-item index="8-1">签到统计</el-menu-item>
          <el-menu-item index="8-2">求救统计</el-menu-item>
          <el-menu-item index="8-2">求救统计(按网格)</el-menu-item>
          <el-menu-item index="8-2">求救统计(按时间段)</el-menu-item>
          <el-menu-item index="8-2">平台事件统计</el-menu-item>
          <el-menu-item index="8-2">事件类型统计</el-menu-item>
          <el-menu-item index="8-2">地区统计</el-menu-item>
          <el-menu-item index="8-2">来源统计</el-menu-item>
          <el-menu-item index="8-2">轨迹查询</el-menu-item>
          <el-menu-item index="8-2">实时轨迹(按事件)</el-menu-item>
          <el-menu-item index="8-2">实时轨迹(按时间)</el-menu-item>
          <el-menu-item index="8-2">事件轨迹</el-menu-item>
          <el-menu-item index="8-2">求救统计(按进度)</el-menu-item>
          <el-menu-item index="8-2">警报信息</el-menu-item>
          <el-menu-item index="8-2">网格区域查询</el-menu-item>
          <el-menu-item index="8-2">水利工程分布</el-menu-item>
          <el-menu-item index="8-2">避灾场所分布</el-menu-item>
          <el-menu-item index="8-2">国土地质灾害分布</el-menu-item>
          <el-menu-item index="8-2">救灾物资分布</el-menu-item>
        </el-submenu>

      </el-menu>

  </div>
</template>

<script>
export default {
  components: {},
  name: 'MainMenu',
  data () {
    return {
      menuCollapse: false
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
  props: {
    menus: {
      type: Array
    }
  },
  methods: {

  }
}
</script>

<style scoped>

  .main-left-menu{
    display: inline-block;
    width: 200px;
    height: 580px;
    background-color: #324157;
    user-select: none;
    overflow-y: auto;
    overflow-x: hidden;

    /* IE下自定义滚动条样式 */
    /*scrollbar-3dlight-color: transparent;
    scrollbar-highlight-color: transparent;
    scrollbar-face-color: transparent;
    scrollbar-arrow-color: transparent;
    scrollbar-shadow-color: transparent;
    scrollbar-dark-shadow-color: transparent;
    scrollbar-base-color: transparent;
    scrollbar-track-color: transparent;*/
  }

  /* chrome下自定义滚动条样式 */
  /*.main-left-menu::-webkit-scrollbar {
    width: 0;
  }*/

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
