import axios from 'axios';
import config from './config'

let baseUrl = 'http://www.jiekou.cn';

export const getAllUserInfo = params => { return axios.post(`${baseUrl}/getAllUserInfo`, params, config).then(res => res.data); };
export const register = params => { return axios.post(`${baseUrl}/register`, params, config).then(res => res.data); };
export const login = params => { return axios.post(`${baseUrl}/login`, params, config).then(res => res.data); };


/*export default { requestLogin, requestLogin2 }*/
