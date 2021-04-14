/**
 vuex管理的状态对象
 驱动应用的数据源
 它应该是唯一的
 const state = {
		xxx: initValue
	}
 */
/* 状态对象 */
export default {
  // 纬度
  latitude: 40.10038,
  // 经度
  longitude: 116.36867,
  // 地址相关信息对象
  address: [],
  //食品分类数组
  categories: [],
  //商家数组
  shops: [],
  // 用户信息
  userInfo: {},
}
