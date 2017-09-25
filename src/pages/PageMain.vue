<template>
  <div id="app">

    <!-- 页面头部导航 -->
    <main-nav></main-nav>

    <!-- 页面左侧菜单 -->
    <main-menu></main-menu>

    <!-- 页面内容主体 -->
    <div class="main-body-content">

    <!--<div v-add-tab="tab">添加标签</div>-->

      <!-- 标签页组件 -->
      <main-tabs></main-tabs>

      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>

    </div>

  </div>
</template>

<script>
  import MainNav from 'components/MainNav.vue'
  import MainMenu from 'components/MainMenu.vue'
  import MainTabs from 'components/MainTabs.vue'
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

  #app{
    height: 100%;
  }

  .main-body-content{
    position: absolute;
    margin-left: 12.5rem;  /* 4rem */
    top: 60px;
    width: 85.4%; /* 95.4% */
    height: 90.5%;
    transition: .38s;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }
  .fade-enter, .fade-leave-to{
    opacity: .5
  }


</style>
