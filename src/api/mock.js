/**
 * Created by huangxiaofeng on 2017/09/08.
 */

import Mock from 'mockjs'

const baseUrl = "http://www.jiekou.cn";
const Random = Mock.Random;

export default function(){

  Random.extend({
    selectOne: function(dateArr) {
      let selectOne = dateArr;
      return this.pick(selectOne);
    }
  });

	Mock.mock(`${baseUrl}/getAllUserInfo`, {
		"UserInfo":Array(10).fill(1).map(() => {
			return {
			  "id|+1": 1,
        name: Random.cname(), //随机生成一个中文姓名
        date: Random.date('yyyy-MM-dd'), //随机生成一个日期
        address: Random.county(true) + Random.csentence(6, 10), //随机生成一个省市县 + 6-10个中文字符
        tag: Random.selectOne(['家', '公司']) //随机选择一个自定义字符串
			}
		})
	});

}
