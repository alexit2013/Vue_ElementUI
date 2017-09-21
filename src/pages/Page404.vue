<template>
  <div id="page404">
    我是404页面~
    <router-link :to="mainPath">返回首页</router-link>
    <button @click="showName">点我</button>
  </div>
</template>

<script>

export default {
  name: 'Page404',
  data () {
    return {
        mainPath: this.$store.state.tabs[this.$store.state.tabs.length-1].name
    }
  },

  methods: {
      showName: function () {
      }
  },
  created () {

  },
  computed: {

  }
}
</script>

<style scoped>

</style>
