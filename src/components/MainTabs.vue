<template>
  <div class="main-tabs">
    <el-tabs :active-name="$route.path" type="card" @tab-click="tabSelected" @tab-remove="tabRemove">
      <el-tab-pane
        v-for="(item, index) in tabs"
        :closable="!!!index && tabs.length < 2 ? false : true"
        :key="item.name"
        :label="item.title"
        :name="item.name">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'MainTabs',
  data () {
    return {
    }
  },
  computed: {
    tabs: function () {
      return this.$store.state.tabs;
    }
  },
  methods: {
    tabSelected: function (tab) {
      this.$router.push(this.tabs[tab.index].name);
    },
    tabRemove: function (name) {
      if(this.$store.state.tabs.length > 1){
        if(name===this.tabs[0].name){
          this.$store.dispatch('clearTabs');
          this.$route.path !== this.tabs[0].name && this.$router.push(this.tabs[0].name);
          return;
        }
        this.$store.dispatch('setTabs', this.tabs.filter(function(item){
          return item.name !== name;
        }));
        this.$router.push(this.tabs[this.tabs.length-1].name);
      }

    }

  }
}
</script>

<style scoped>

  .main-tabs{
    max-height: 42px;
    overflow-y: hidden;
    user-select: none;
  }

</style>
