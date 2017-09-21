<template>
  <div id="app">

    <!-- 页面头部导航 -->
    <main-nav></main-nav>

    <!-- 页面左侧菜单 -->
    <main-menu></main-menu>

    <!-- 页面内容主体 -->
    <div class="main-body-content">

    <div v-add-tab="tab">添加标签</div>

      <!-- 标签页组件 -->
      <main-tabs></main-tabs>

      <transition name="el-zoom-in-center">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>

    </div>

  </div>
</template>

<script>
  import MainNav from '../components/MainNav.vue'
  import MainMenu from '../components/MainMenu.vue'
  import MainTabs from '../components/MainTabs.vue'
export default {
  name: 'PageMain',
  components: { MainNav, MainMenu, MainTabs },
  data () {
    return {
      menuCollapse: false,
      tab: {title:'指令添加的Tab',name:'/OperatorManage'}
    }
  }
}
</script>

<style scoped>

  .main-body-content{
    position: absolute;
    display: inline-block;
    width: 85.5%;
    height: 90.5%;
    overflow-y: auto;
    overflow-x: hidden;
  }


</style>
