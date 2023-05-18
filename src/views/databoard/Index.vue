<template>
<el-scrollbar
  class="pages"
  ref="pages"
  id="pages"
>
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <page :pWidth='pWidth' :menuId="menuId"></page>
        </div>
        <div class="swiper-slide">
          <page2 :pWidth='pWidth' :menuId="menuId"></page2>

        </div>
      </div>
    </div> -->
  <!-- </div> -->

  <!-- 【电视】 模式：自动轮播 -->
  <div  v-if="autoplay === true" :style="{'height': `${pagesHeight}px`}">
    <div class="databoard"
      :style="{
        'transformOrigin':'left top',
        'transform':`scale(${scalseNum})`,
        '-webkit-transform':`scale(${scalseNum})`,
        '-moz-transform':`scale(${scalseNum})`,
        '-o-transform':`scale(${scalseNum})`,
        '-ms-transform':`scale(${scalseNum})`
      }"
    >
      <slider ref="slider" :options="options" @slide="slide">
        <slideritem v-for="(val,index) in componentList" :key="index">
          <component :is="val" :currentPage="currentPage"></component>
        </slideritem>
      </slider>
    </div>
  </div>
  <!-- 【PC】 模式：不自动轮播 -->
  <div v-else :style="{'height': `${pagesHeight}px`}">
    <div class="databoard"
      :style="{
        'transformOrigin':'left top',
        'transform':`scale(${scalseNum})`,
        '-webkit-transform':`scale(${scalseNum})`,
        '-moz-transform':`scale(${scalseNum})`,
        '-o-transform':`scale(${scalseNum})`,
        '-ms-transform':`scale(${scalseNum})`
      }"
    >
    
      <div v-for="(val,index) in componentList" :key="index">
        <component :is="val" :currentPage="currentPage"></component>
      </div>
    </div>
  </div>
</el-scrollbar>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
import page from './Page.vue'
import page2 from './Page2.vue'
import { slider, slideritem } from 'vue-concise-slider'
import myMinix from './mixin';

export default {
  mixins: [myMinix], // todo.vue 中声明 minix 进行混合
  components: {
    page,
    page2,
    slider,
    slideritem
  },
  props: {
    menuId: [String, Number]
  },
  data () {
    return {
      scalseNum: 1,
      pagesHeight: 1080,
      componentList: ['page', 'page2'],
      show: true,
      pWidth: 1920,
      options: {
        currentPage: 0,
        autoplay: '15000',
        loop: true
      },
      currentPage: 0,
      autoplay: true
    }
  },
  watch: {
    '$route': {
      handler () {
        console.log('this.$route--->', this.$route)
        this.autoplay = this.$route.query.autoplay || true
      }, 
      immediate: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      elementResizeDetectorMaker().listenTo(document.getElementById('pages'), (element) => {
        // _this.pWidth = element.clientWidth
        this.resize_window(element.clientWidth)

      })
    })

    // this.bannerPoint()
  },
  methods: {
    // 监听事件
    slide (data) {
      console.log('1-------------->', data)
      this.currentPage = data.currentPage
    },
    resize_window (width) {
      const scalseNum = Number((width) / 1920)
      this.scalseNum = scalseNum
      this.pagesHeight = 1080 * scalseNum
    },
    bannerPoint() {
      // new Swiper(".swiper-container", {
      //   loop: true,
      //   initialSlide: 0, //设定初始化时slide的索引
      //   autoplay: {
      //     delay: 100000, // 1秒切换一次
      //     disableOnInteraction: false
      //   },
      //   updateOnImagesReady: true,
      //   slidesPerView: 1,  //设置slider容器能够同时显示的slides数量
      //   watchOverflow: true,//因为仅有1个slide，swiper无效
      //   //spaceBetween : '10%',按container的百分比

      //   observer: true, //在 Swiper 的上启用动态检查器(Mutation Observer)，如果你更改swiper 的样式（隐藏/显示）或修改其子元素（添加/删除幻灯片），Swiper 会更新（重新初始化）并触发 observerUpdate 事件。
      //   observeParents: true,
      //   observeSlideChildren: true,
       
      // })
    }

  }

}
</script>
<style lang="stylus" scoped>
@import './page.styl'
</style>
