/*
vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
相当于data对象的状态对象
 */
const state = {
  count: 0  // 指定初始化数据
}

/*
包含了n个直接更新状态的方法的对象
 */
const mutations = {
  /**
   * 增加
   * @param {*} state 
   */
  INCREMENT (state) {
    state.count++
  },
  /**
   * 减少
   * @param {*} state 
   */
  DECREMENT (state) {
    state.count--
  }
}

/*
包含了n个间接更新状态的方法的对象
 */
const actions = {
  /**
   * 增加
   * @param {*} param0 
   */
  increment ({commit}) {
    // 提交一个mutation请求
    commit('INCREMENT')
  },
  /**
   * 减少
   * @param {*} param0 
   */
  decrement ({commit}) {
    // 提交一个mutation请求
    commit('DECREMENT')
  },
  /**
   * 如果是奇数则增加
   * @param {*} param0 
   */
  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      // 提交一个mutation请求
      commit('INCREMENT')
    }
  },
  /**
   * 延时增加
   * @param {*} param0 
   */
  incrementAsync ({commit}) {
    setTimeout(() => {
      // 提交一个mutation请求
      commit('INCREMENT')
    }, 1000)
  },
}

/**
 * 包含多个getter计算属性的对象
 */
const getters = {
  evenOrOdd (state) { // 当读取属性值时自动调用并返回属性值
    return state.count%2===0 ? '偶数' : '奇数'
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})