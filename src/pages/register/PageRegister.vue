<template>
  <div class="pageLogin">

      <el-row :gutter="20">

          <!-- 步骤条组件 -->
          <el-col :span="5" :offset="1" style="height: 620px;">
              <div class="box-step">
                  <el-steps :space="150" direction="vertical" process-status="finish" :active="RegisterProcess">
                      <el-step title="个人信息"></el-step>
                      <el-step title="公司信息"></el-step>
                      <el-step title="完成"></el-step>
                  </el-steps>
              </div>
          </el-col>

          <!-- 注册组件 -->
          <el-col :span="16" style="height: 620px;">
              <div class="box-component">

                  <transition  name="fade" mode="out-in">
                      <keep-alive>
                          <component :is="showComponent"></component>
                      </keep-alive>
                  </transition>

              </div>
              <el-button type="primary" @click="nextStep" style="float: right; margin: 20px 100px;">下一步</el-button>
          </el-col>
      </el-row>

  </div>
</template>

<script>
    import PersonalInfo from './components/PersonalInfo.vue'
    import CompanyInfo from './components/CompanyInfo.vue'
    import RegisterFinish from './components/RegisterFinish.vue'

  export default {
  name: 'PageRegister',
  components: { PersonalInfo, CompanyInfo, RegisterFinish },
  data () {
    return {
        RegisterProcess: 0,
        PersonalInfo: PersonalInfo,
        CompanyInfo: CompanyInfo,
        RegisterFinish: RegisterFinish
    }
  },
  computed: {
      showComponent: function () {
          switch (this.RegisterProcess){
              case 0:
                  return 'PersonalInfo';
              case 1:
                  return 'CompanyInfo';
              case 2:
                  return 'RegisterFinish';
          }
      }
  },
  methods: {
      nextStep: function () {
          this.RegisterProcess < 2
              ? this.RegisterProcess++
              : this.$router.push('/RoleManage');
      }
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

    .pageLogin{
        width: 100%;
        height: 100%;
        background: url("../../assets/bg-login.jpg") no-repeat 100% 100% / 100% 100%;
    }

    .box-step{
        margin: 50% 80px;
    }

    .box-component{
        background-color: rgba(1,1,1, .3);
        height: 400px;
        width: 700px;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 20px 50px;
        margin-top: 80px;
        border-radius: 10px;
    }

    /* chrome下自定义滚动条样式 */
    .box-component::-webkit-scrollbar
    {
        width: 0;
    }


</style>
