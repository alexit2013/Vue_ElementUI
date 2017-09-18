<template>
  <div class="main-header">

      <div class="main-logo">华数智慧抗台指挥系统</div>

      <div class="main-header-menus">

        <el-menu theme="dark" default-active="0" :unique-opened="true" :router="true" class="el-menu-demo" mode="horizontal">

          <el-menu-item index="1"><i class="el-icon-document vam fs-18" aria-hidden="true"></i><span class="vam">事件待办</span><el-badge :value="12" class="badge-item"></el-badge></el-menu-item>

          <el-menu-item index="3"><i class="el-icon-star-off vam fs-18" aria-hidden="true"></i><span class="vam">回访待办</span><el-badge :value="0" class="badge-item"></el-badge></el-menu-item>

          <el-menu-item index="4"><i class="el-icon-message vam fs-18" aria-hidden="true"></i><span class="vam">消息中心</span><el-badge :value="1" class="badge-item"></el-badge></el-menu-item>

          <el-submenu class="user-img" index="5">
            <template slot="title">Sunshine</template>
            <el-menu-item index="5-1"><i  class="fa fa-pencil" aria-hidden="true"></i>修改密码</el-menu-item>
            <el-menu-item index="5-2"><i class="fa fa-repeat" aria-hidden="true"></i>更换账号</el-menu-item>
            <el-menu-item index="5-3"><i class="fa fa-sign-out" aria-hidden="true"></i>退出系统</el-menu-item>
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
  props: {

  },
  methods: {

  }
}
</script>

<style scoped>

  .main-header{
    min-width: 100%;
    height: 60px;
    position: relative;
    background-color: #324157;
    user-select: none;
    z-index: 3;
    -webkit-box-shadow: 0 0 5px #222;
    -moz-box-shadow: 0 0 5px #222;
    box-shadow: 0 0 5px #222;
  }

  .main-logo{
    position: absolute;
    left: 25px;
    line-height: 60px;
    color: #fff;
    font-size: 25px;
  }

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
