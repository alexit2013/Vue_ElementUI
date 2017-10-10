/**
 * Created by huangxiaofeng on 2017-09-21 0021.
 */

export default {
  tabs: state => state.tabs.tabs,
  menuShrink: state => state.menu.menuShrink,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  role: state => state.user.role,
  menus: state => state.menu.menus,
  authRoutes: start => start.menu.authRoutes
}

