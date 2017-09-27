import fetch from 'utils/fetch'
import path from 'api/path'

/* 获取所有用户信息（测试） */
export function getAllUserInfo(params) {
  return fetch({
    url: path.GET_USER_INFO,
    method: 'post'
  })
}

/* 用户登录 */
export function userLogin(userJson) {
  return fetch({
    url: path.USER_LOGIN,
    method: 'post',
    data: userJson
  })
}

/* 获取用户信息 */
export function getUserInfo(token) {
  return fetch({
    url: path.GET_USER_INFO,
    method: 'post',
    data: token
  })
}

/* 修改用户信息 */
export function updateUserInfo(userInfo) {
  return fetch({
    url: path.UPDATE_USER_INFO,
    method: 'post',
    data: userInfo
  })
}
