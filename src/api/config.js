import Qs from 'qs'

// Axios 全局默认 config
export default{

  //请求的接口，在请求的时候，如axios.get(url,config); 这个get里的url会覆盖掉config中的url
  url: '/UserInfo',

  // 请求方法同上
  method: 'post', // default

  // 基础url前缀：baseURL 将自动加在 url 前面，除非 url 是一个绝对 URL。
  baseURL: 'http://www.jiekou.cn',

  // transformRequest 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [
    function(data) {

      // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
      data = Qs.stringify(data);
      return data;
    }
  ],

  //请求前数据处理
  transformResponse: [function (data) {
    // 这里提前处理返回的数据

    return data;
  }],

  // 请求头信息
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  //get请求默认参数
  params: {
    datetime: new Date().getTime()
  },

  //post请求默认参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
  //只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  data: {
    datetime: new Date().getTime()
  },

  //设置超时时间
  // 如果请求话费了超过 timeout 的时间，请求将被中断
  timeout: 20000,

  // responseType 表示服务器响应的数据类型
  // 可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  //跨域请求时是否需要凭证
  //跨域方法一：设置为true
  withCredentials:false, // false

  //跨域方法二：代理到后台IP
  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  /*proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  }*/

}


/*
* Axios 数据响应结构
*
 {
 // `data` 由服务器提供的响应
 data: {},

 // `status` 来自服务器响应的 HTTP 状态码
 status: 200,

 // `statusText` 来自服务器响应的 HTTP 状态信息
 statusText: 'OK',

 // `headers` 服务器响应的头
 headers: {},

 // `config` 是为请求提供的配置信息
 config: {}
 }

 使用 then 时，你将接收下面这样的响应：
 axios.get('/user/12345')
 .then(function(response) {
 console.log(response.data);
 console.log(response.status);
 console.log(response.statusText);
 console.log(response.headers);
 console.log(response.config);
 });
*/
