<template>
  <div id="page404">
    我是404页面~
    <router-link to="/RoleManage">返回首页</router-link>
    <h1 v-text="$store.state.userName"></h1>
    <button @click="showName">点我</button>
  </div>
</template>

<script>
  import { vuex } from './../vuex/vuex'
export default {
  name: 'Page404',
  data () {
    return {
    }
  },
  store:vuex,
  methods: {
      showName: function () {

        /*this.$store.state.axx='aax';
        alert(this.$store.state.axx);
        this.$store.state.axx='haha';
        alert(this.$store.state.axx);*/
        
        this.$store.dispatch('showUserName', "hahahahaa");
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
