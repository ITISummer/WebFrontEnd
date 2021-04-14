/**
 store对象
 1.所有用vuex管理的组件中都多了一个属性$store, 它就是一个store对象
 2.属性:
 state: 注册的state对象
 getters: 注册的getters对象
 3.方法:
 dispatch(actionName, data): 分发action
 */
/* vuex 最核心的状态管理对象 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
// 申明使用插件
Vue.use(Vuex)

// 向外暴露store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
