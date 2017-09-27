/**
 * Created by huangxiaofeng on 2017-09-25 0025.
 */

export default {
  '/register': {'needLogin': false, 'auth': '*'},
  '/PageLogin': {'needLogin': false, 'auth': '*'},
  '/PageMain': {'needLogin': true, 'auth': ["admin","superManager","manager"]},
  '/MainWelcome': {'needLogin': true, 'auth': ["admin","superManager","manager"]},
  '/RoleManage': {'needLogin': true, 'auth': ["admin","superManager","manager"]},
  '/OperatorManage': {'needLogin': true, 'auth': ["admin","superManager"]},
  '/404': {'needLogin': false, 'auth': '*'}
}
