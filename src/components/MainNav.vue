<template>
  <div class="main-header">

      <div class="main-logo">智慧后台管理系统</div>

      <div class="main-header-menus">

        <el-menu theme="dark" default-active="0" :unique-opened="true" :router="false" class="el-menu-demo" mode="horizontal">

          <el-menu-item index="/RoleManage"><i class="el-icon-document vam fs-18" aria-hidden="true"></i><span class="vam">事件待办</span><el-badge :value="12" class="badge-item"></el-badge></el-menu-item>

          <el-menu-item index="3"><i class="el-icon-star-off vam fs-18" aria-hidden="true"></i><span class="vam">回访待办</span><el-badge :value="0" class="badge-item"></el-badge></el-menu-item>

          <el-menu-item index="4"><i class="el-icon-message vam fs-18" aria-hidden="true"></i><span class="vam">消息中心</span><el-badge :value="1" class="badge-item"></el-badge></el-menu-item>

          <el-submenu class="user-img" index="5">
            <template slot="title">Sunshine</template>
            <el-menu-item index="5-1"><i  class="fa fa-pencil" aria-hidden="true"></i>修改密码</el-menu-item>
            <el-menu-item index="5-2" @click="outSystem"><i class="fa fa-sign-out" aria-hidden="true"></i>退出系统</el-menu-item>
          </el-submenu>

        </el-menu>

      </div>


  </div>
</template>

<script>
export default {
  components: {},
  name: 'MainNav',
  data () {
    return {
      menuCollapse: false
    }
  },
  methods: {
    outSystem: function () {
      this.$confirm('是否注销当前登录并退出？', '提示：', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        type: 'warning'
      }).then(() => {
        ls.rm('Token');
        ls.rm('menus');
        ls.rm('tabs');
        this.$router.push('/PageLogin');
      }, ()=>{});
    }
  }
}
</script>

<style scoped>

  /* 头部导航容器 */
  .main-header{
    position: relative;
    width: 100vw;
    height: 60px;
    z-index: 1;
    background-color: #324157;
    -webkit-box-shadow: 0 0 5px #222;
    -moz-box-shadow: 0 0 5px #222;
    box-shadow: 0 0 5px #222;
    user-select: none;
  }

  /* 头部导航 > LOGO区域 */
  .main-logo{
    position: absolute;
    left: 25px;
    line-height: 60px;
    color: #fff;
    font-size: 25px;
  }

  /* 头部导航 > 功能区域 */
  .main-header-menus{
    position: absolute;
    right: 15px;
    line-height: 60px;
  }

  .user-img{
    margin-left: 50px;
  }

  .user-img::before{
    content: '';
    background-image:url('./../assets/UserImg.jpg');
    background-size:40px 40px;
    position: absolute;
    width: 40px;
    height: 40px;
    left: -30px;
    top: 10px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 20px;
    z-index: 999;
    cursor: pointer;
  }

  .badge-item{
    margin-top: -10px;
  }

  .fa{
    font-size: 18px; margin-right: 10px; color: #324157;
  }

  .el-menu{
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    min-height: 100%;
    transition: .38s;
  }

</style>
