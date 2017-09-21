<template>
  <div id="page404">
    我是404页面~
    <router-link :to="tabs[tabs.length-1].name">返回首页</router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
  name: 'Page404',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
        'tabs'
    ])
  }
}
</script>

<style scoped>

</style>
