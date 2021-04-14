/**
 包含多个直接更新 state 的方法(回调函数)的对象
 谁来触发: action 中的 commit('mutation名称')
 只能包含同步的代码, 不能写异步代码
 const mutations = {
		yyy (state, data) {
			// 更新state的某个属性
		}
	}
 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 Vuex 中的 mutation 非常类似于事件：
 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
 */
/* 直接更新 state 的多个方法对象 */

// ES6 解构赋值导入

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
} from './mutation-types'

// ES6 默认（统一）暴露
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORIES] (state, {categories}) {
    state.categories = categories
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  }
}
