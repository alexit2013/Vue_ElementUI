import fetch from 'utils/fetch'
import path from 'api/path'

/* 获取菜单 */
export function getMenus(role) {
  return fetch({
    url: path.GET_MENUS,
    method: 'post',
    data: role
  })
}

export default { getMenus }

