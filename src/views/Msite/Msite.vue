<template>
  <section class="msite">
    <!--首页头部-->
    <HeadTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeadTop>

    <!--首页导航-->
    <nav class="msite_nav" v-if="categorys.length">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(arr1,index) in categoryArry" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(arr2,index) in arr1" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+ arr2.image_url" />
              </div>
              <span>{{arr2.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <img v-else src="./images/msite_back.svg" alt="back" />
    <!--首页附近商家-->
    <shopList></shopList>
  </section>
</template>

<script>
import HeadTop from '../../component/head/head'
import shopList from '../../component/shopList/shopList'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { mapState } from 'vuex'
export default {
  mounted () {

  },
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {
    HeadTop,
    shopList
  },
  computed: {
    ...mapState(['address', 'categorys']),
    // 使用categorys创建二维数组
    categoryArry () {
      const { categorys } = this
      // 返回的二维数组
      const arr = []
      // max = 8
      let arr1 = []
      categorys.forEach(element => {
        if (arr1.length === 8) {
          arr1 = []
        }
        if (arr1.length === 0) {
          arr.push(arr1)
        }

        arr1.push(element)
      })
      return arr
    }
  },
  watch: {
    categorys (value) {
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          loop: true,
          pagination: { el: '.swiper-pagination' }
        })
      }

      )
    }
  }
}
</script>

<style lang="stylus">
@import '../../../static/stylus/mixins.styl';

&.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }
}
</style>
