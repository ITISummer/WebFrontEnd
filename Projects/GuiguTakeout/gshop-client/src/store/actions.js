/**
 *
 包含多个事件回调函数的对象
 通过执行: commit()来触发mutation的调用, 间接更新state
 谁来触发: 组件中: $store.dispatch('action名称')  // 'zzz'
 可以包含异步代码(定时器, ajax)
 const actions = {
		zzz ({commit, state}, data1) {
			commit('yyy', data2)
		}
	}
 */
/* 通过 mutation 间接更新 state 的多个方法对象 */
// ES6 解构赋值导入
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
} from './mutation-types'

// ES6 解构赋值导入
import {
  reqAddress,
  reqCategories,
  reqShops,
  reqUserInfo,
} from '../api'

// ES6 统一暴露
export default {
  /**
   * 异步获取地址
   * @param commit
   * @param state
   * @returns {Promise<void>}
   */
  async getAddress ({commit, state}) {
    // 发送异步 ajax 请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个 mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  /**
   * 异步获取食品分类列表
   * @param commit
   * @returns {Promise<void>}
   */
  async getCategories ({commit}) {
    // 发送异步 ajax 请求
    const result = await reqCategories()
    // 提交一个 mutation
    if (result.code === 0) {
      const categories = result.data
      commit(RECEIVE_CATEGORIES, {categories: categories})
    }
  },
  /**
   * 异步获取商家列表
    * @param commit
   * @param state
   * @returns {Promise<void>}
   */
  async getShops ({commit, state}) {
    // 发送异步 ajax 请求
    const {latitude, longitude} = state
    const result = await reqShops({latitude,longitude})
    // 提交一个 mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  /**
   * 同步记录用户信息-因为这时已经获取到用户信息，则进行同步处理
   * @param commit
   * @param state
   */
  recordUserInfo({commit},userInfo) {
    commit(RECEIVE_USER_INFO,{userInfo})
  }

}
