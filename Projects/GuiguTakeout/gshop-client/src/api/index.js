/* 包含 n 个接口请求函数的模块
*  函数的返回值：promise 对象
*
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
//相当于：(param1, param2, …, paramN) =>{ return expression; }

// 当只有一个参数时，圆括号是可选的：
(singleParam) => { statements }
singleParam => { statements }

// 没有参数的函数应该写成一对圆括号。
() => { statements }
* [箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* */
import ajax from "./ajax";
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'
/**
* 获取地址信息(根据经纬度串)
*/
export const reqAddress = (geohash) => ajax(BASE_URL+'/position/' + geohash)
/**
* 获取 msite 页面食品分类列表
*/
export const reqCategories = () => ajax(BASE_URL+'/index_category')
/**
* 获取 msite 商铺列表(根据经纬度)
*/
export const reqShops = ({latitude, longitude}) => ajax(BASE_URL+'/shops', {latitude, longitude})
/**
* 账号密码登录
*/
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')
/**
* 获取短信验证码
*/
export const reqSendCode = phone => ajax(BASE_URL+'/send_code', {phone})
/**
* 手机号验证码登录
*/
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')
/**
* 获取用户信息(根据会话)
*/
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
/**
* 请求登出
*/
export const reqLogout = () => ajax(BASE_URL+'/logout')
/**
 * 根据经纬度和关键字搜索商铺列表
 */
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops',{geohash,keyword})
