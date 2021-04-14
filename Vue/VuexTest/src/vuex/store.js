/*
vuex核心管理模块store对象
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新 state 函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters // 包含多个 getter 计算属性函数的对象
})