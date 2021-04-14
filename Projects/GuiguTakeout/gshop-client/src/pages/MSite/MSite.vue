<template>
    <section class="msite">
        <!--首页头部 - 抽取的公共组件-->
        <HeaderTop :title="address.name">
           <router-link class="header_search" slot="left" to="/search">
            <i class="iconfont icon-sousuo"></i>
          </router-link>
          <router-link class="header_login" slot="right" :to="userInfo._id?'/userinfo':'/login'">
            <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
            <span class="header_login_text" v-else><i class="iconfont icon-person"></i></span>
          </router-link>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categories.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categories,index) in categoriesArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(category, index) in categories" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+category.image_url">
                  </div>
                  <span>{{category.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" alt="msite-back" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>

          </div>
          <ShopList/>
        </div>
      </section>
</template>

<script>
import {mapState} from 'vuex';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import ShopList from "../../components/ShopList/ShopList";
export default {
  data() {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  watch: {
    categories (value) {
      /*setTimeout(() => {
        // 可以实现界面更新，但不是很好
        // 创建一个 swiper 实例来实现轮播
        new Swiper('.swiper-container', {
          // 可以循环轮播
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      },100)*/
      // 使用 vue 自带的函数来实现界面更新就立即创建 swiper 对象
      // https://vuejs.org/v2/api/#Vue-nextTick
      this.$nextTick(() => { // 此条语句要写在数据更新之后
        // 一旦完成界面更新，就理解调用
        // 创建一个 swiper 实例来实现轮播
        new Swiper('.swiper-container', {
          // 可以循环轮播
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }
  },
  mounted() {
    // 调用 getCAtegory() action.js 里面定义
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getShops')

  },
  computed: {
    // 读取（计算） address 等属性, state.js 里面定义的
    //当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，
    //我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键
    ...mapState(['address',"categories","userInfo"]),

    // 根据 categories 一维数组生成一个二维数组，每个一维数组中元素个数最大为 8
    categoriesArr() {
      const {categories} = this
      // 准备空的二维数组
      const arr = []
      let minArr = []
      // 遍历 categories
      categories.forEach( c => {
        // 填充一维数组
        if (minArr.length === 8) {
          minArr = []
        }
        // 将小数组塞到大数组
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        minArr.push(c)
      })
      return arr
    }

  },
  // 包含的组件
  components: {HeaderTop,ShopList}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
