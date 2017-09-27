<template>
  <div class="login-container">
    <el-form class="card-box login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <h3 class="title">系统登录</h3>

      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <i class="fa fa-user" style="" aria-hidden="true"></i>
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" spellcheck="false" placeholder="用户名" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="fa fa-unlock-alt" aria-hidden="true"></i>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
                  placeholder="密码" />
        <!--<span class='show-pwd' @click='showPwd'><i class="fa" :class="pwdType==='password'?'fa-eye-slash':'fa-eye'" aria-hidden="true"></i></span>-->
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.prevent="handleLogin">登录</el-button>

    </el-form>

  </div>
</template>

<script>
  import { isvalidUsername } from 'utils/validate'
  import { mapMutations } from 'vuex'
  export default {
    name: 'PageLogin',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'))
        } else {
          callback()
        }
      };
      return {
        loginForm: {
          username: 'admin',
          password: '888888'
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        pwdType: 'password',
        loading: false
      }
    },
    methods: {
      ...mapMutations({
          setToken: 'SET_TOKEN',
          setUserInfo: 'SET_USER_INFO',
          setRole: 'SET_ROLE'
      }),
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin() {
        this.$refs['loginForm'].validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store.dispatch('userLogin', this.loginForm).then((data) => {
                this.loading = false;
                if(data.result === 'success'){
                  this.$router.push('/');
                }else{
                  this.$alert(data.message, '提示：', {
                    confirmButtonText: '确定'
                  });
                }
            }).catch((err) => {
              console.error(err);
              this.loading = false;
              this.$confirm('登录失败，是否启用模拟"admin"账户登陆？', '提示：', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
              }).then(() => {
                // 登陆失败后可选择使用本地模拟数据登陆，权限为最高的admin
                this.setToken('a3578asd21cxx54asd21as5d4as');
                this.setUserInfo({name:'小明', age:'26'});
                this.setRole('admin');
                this.$router.push('/');
              }, ()=>{});
            })
          } else {
            console.error('登陆表单校验出错。');
            return false
          }
        })
      }
    },
    mounted: function () {
      $('.el-input__inner').css({"background":"transparent","border":0,"color":"#eee"});
    }
  }
</script>

<style scoped>

  .login-container{
    user-select: none;
  }

  .login-container {
    position: relative;
    height: 100vh;
    background-color: #2d3a4b;
  }

  .el-input {
    display: inline-block;
    height: 42px;
    width: 85%;
    margin-left: -10px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    font-size: 20px;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: #eee;
    margin: 0 auto 40px auto;
    text-align: center;
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
  }
  .thirdparty-button{
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
</style>
