import userApi from 'api/user/userAPI'

export default {
  state:{
    token: '',
    userInfo: '',
    role: ''
  },
  mutations:{
    SET_TOKEN(state, token){
      state.token = token;
    },
    REMOVE_TOKEN(state){
      state.token = '';
      ls.rm('Token');
    },
    SET_USER_INFO(state, userInfo){
      state.userInfo = userInfo;
    },
    SET_ROLE(state, role){
      state.role = role;
    }

  },
  actions: {

    userLogin({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        userApi.userLogin(userInfo).then(response => {
          const data = response.data;
          if(data.result==='success'){
            const msg = data.message;
            commit('SET_TOKEN', msg.token);
            commit('SET_ROLE', msg.role);
            delete msg.userInfo.password; //不保存密码
            commit('SET_USER_INFO', msg.userInfo);
            ls.set('Token', msg.token); //登录成功后将token存储在localStorage之中
          }
          resolve(data);
        }).catch(err => {
          console.error(err);
          reject(err);
        });

      });
    },
    getUserInfo({ commit }, token) {
      return new Promise((resolve, reject) => {
        userApi.getUserInfo(token).then(response => {
          const data = response.data;
          commit('SET_USER_INFO', data.userInfo);
          resolve(data.userInfo);
        }).catch(error => {
          reject(error);
        });
      });
    },
    updateUserInfo({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        userApi.updateUserInfo(userInfo).then(response => {
          const data = response.data;
          commit('SET_USER_INFO', userInfo);
          resolve(userInfo);
        }).catch(error => {
          reject(error);
        });
      });
    }

  }
};

