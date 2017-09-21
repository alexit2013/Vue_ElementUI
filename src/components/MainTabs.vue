<template>
  <div class="main-tabs">
    <el-tabs :active-name="$route.path" closable type="card" @tab-click="tabSelected" @tab-remove="tabRemove">
      <el-tab-pane
        v-for="(item, index) in tabs"
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
          this.$confirm('是否关闭右侧所有选项卡?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$store.dispatch('clearTabs');
            this.$route.path !== this.tabs[0].name && this.$router.push(this.tabs[0].name);
          }, ()=>{});

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
  }

</style>
