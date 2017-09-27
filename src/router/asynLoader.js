/**
 * Created by huangxiaofeng on 2017-09-27 0027.
 */
module.exports = file => () => import('src/' + file + '.vue');
