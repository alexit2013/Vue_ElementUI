<template>
  <div id="app">

    <!-- 页面头部导航 -->
    <main-nav></main-nav>

    <!-- 页面左侧菜单 -->
    <main-menu></main-menu>

    <!-- 页面内容主体 -->
    <div class="main-body-content">

      <transition  name="fade" mode="out-in">
        <router-view></router-view>
      </transition>

    </div>

  </div>
</template>

<script>
  import MainNav from '../components/MainNav.vue'
  import MainMenu from '../components/MainMenu.vue'
export default {
  name: 'PageMain',
  components: { MainNav, MainMenu },
  data () {
    return {
      menuCollapse: false
    }
  },
  created: function () {
      // $parent  $children:[]
    //this.$root.hello();
  },
  methods: {

  }
}
</script>

<style scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0
  }

  .main-body-content{
    position: absolute;
    display: inline-block;
    width: 85.5%;
    height: 90.5%;
    overflow-y: auto;
    overflow-x: hidden;
  }


</style>
