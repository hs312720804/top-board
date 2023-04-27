<template>
  <el-scrollbar
    class="pages"
    ref="pages"
    id="pages"
  >
    <div
      :style="{
        'height': `${pagesHeight}px`
      }"
    >
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
        <div style="position: relative">
          <div class="guides-header">
            <div class="site-name">
              Top 问题榜
              <span class="sub-title">
                数据统计时间至：2023-04-16（{{cycle[1].startDate}} / {{cycle[1].endDate}}）
              </span>
            </div>
          </div>
          <div class="databoard-box">
            <div class="grid-columns--box top-box">
              <div class="grid-columns--title">
                咨询解答
              </div>
              <div class="grid-columns--content">
                <div class="grid-columns--content-box box1" style="padding: 10px 0 0 24px;">
                  <div>
                    <span class="info" style="margin-left: 0;">累计</span>
                    <span class="num">25205</span>
                  </div>
                  <div class="sub-info">
                    同比
                    <span class="up-img"></span>
                    <span class="sub-info-num" style="margin-right: 54px">8.5%</span>
                    环比
                    <span class="down-img"></span>
                    <span class="sub-info-num" style="color:#FF3535">8.5%</span>
                  
                  </div>

                </div>
                <div class="grid-columns--content-box box2" >
                  <div>
                    <span class="icon icon1"></span>
                    <span class="info">待处理</span>
                    <span class="num">25205</span>
                  </div>
                </div>
                <div class="grid-columns--content-box box3" >
                  <div>
                    <span class="icon icon2"></span>
                    <span class="info">处理中</span>
                    <span class="num">777</span>
                  </div>
                </div>
                <div class="grid-columns--content-box box4" >
                  <div>
                    <i class="icon el-icon-success"></i>
                    <span class="info">已解决</span>
                    <span class="num">25205</span>
                  </div>
                </div>
                <div class="grid-columns--content-box box5" >
                  <div>
                    
                    <i class="icon el-icon-star-off"></i>
                    <span class="info">满意度</span>
                    <span class="num">80%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid-columns--box">
              <div class="grid-columns--title">
                BUG问题修复
              </div>
              <div class="grid-columns--content">
                <div class="grid-columns--content-box">
                  <span class="info" style="margin-left: 0;">BUG</span>
                  <span class="num">172</span>
                  <div class="sub-info left-right-layout" >
                    <div>
                      同比
                      <span class="up-img"></span>
                      <span class="sub-info-num" >8.5%</span>
                    </div>
                    <div>
                      环比
                      <span class="down-img"></span>
                      <span class="sub-info-num" style="color:#FF3535">8.5%</span>
                    </div>
                  </div>
                </div>
                <div class="grid-columns--content-box" >
                  <div>
                    <span class="icon icon1"></span>
                    <span class="info">待处理</span>
                    <span class="num">25205</span>
                  </div>
                </div>
                <div class="grid-columns--content-box" >
                  <div>
                    <span class="icon icon2"></span>
                    <span class="info">处理中</span>
                    <span class="num">777</span>
                  </div>
                </div>
                <div class="grid-columns--content-box" >
                  <div>
                    <i class="icon el-icon-success"></i>
                    <span class="info">已解决</span>
                    <span class="num">25205</span>
                  </div>
                </div>
                <div class="grid-columns--content-box" >
                  <div>
                    
                    <i class="icon el-icon-star-off"></i>
                    <span class="info">满意度</span>
                    <span class="num">/</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid-columns--box">
              <div class="grid-columns--title">
                需求/专项转化
              </div>
              <div class="grid-columns--content">
                <div class="grid-columns--content-box">
                  <span class="info" style="margin-left: 0;">BUG</span>
                  <span class="num">172</span>
                  <div class="sub-info left-right-layout" >
                    <div>
                      同比
                      <span class="up-img"></span>
                      <span class="sub-info-num" >8.5%</span>
                    </div>
                    <div>
                      环比
                      <span class="down-img"></span>
                      <span class="sub-info-num" style="color:#FF3535">8.5%</span>
                    </div>
                  </div>
                </div>
                <div class="grid-columns--content-box" >
                  <div>
                    <span class="icon icon1"></span>
                    <span class="info">待处理</span>
                    <span class="num">25205</span>
                  </div>
                </div>
                <div class="grid-columns--content-box" >
                  <div>
                    <span class="icon icon2"></span>
                    <span class="info">处理中</span>
                    <span class="num">777</span>
                  </div>
                </div>
                <div class="grid-columns--content-box" >
                  <div>
                    <i class="icon el-icon-success"></i>
                    <span class="info">已解决</span>
                    <span class="num">25205</span>
                  </div>
                </div>
                <div class="grid-columns--content-box" >
                  <div>
                    
                    <i class="icon el-icon-star-off"></i>
                    <span class="info">满意度</span>
                    <span class="num">80%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid-columns--box">
              <TableContent></TableContent>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <setInterval :dropDown="dropDown" @switch="countDownSwitch"></setInterval> -->
  </el-scrollbar>
</template>

<script>
// import ScreenFull from './Screenfull.vue'
import elementResizeDetectorMaker from 'element-resize-detector'
// import CChart from '@/components/charts/Index.vue'
import TableContent from './TableContent.vue'
import setInterval from './setInterval.js'
export default {
  mixins: [setInterval],
  components: {
    // CChart,
    // ScreenFull
    // setInterval
    TableContent
  },
  props: {
    menuId: [String, Number]
  },
  data () {
    return {
      array1: [
        {
          
        }
      ],
      databoardData: [],
      passCallParams: {
        endDate: "",
        serId: "",
        startDate: ""
      },
      dropDown: [],
      cycle: [{
        value: 'month',
        label: '月度'
      },  {
        value: 'quarter',
        label: '季度'
      }, {
        value: 'year',
        label: '年度'
      }],
      scalseNum: 1,
      pagesHeight: 1080,
    }
  },
  computed: {},
  methods: {
    
    resize_window (width) {
      const scalseNum = Number((width) / 1920)
      this.scalseNum = scalseNum
      this.pagesHeight = 1080 * scalseNum
    }
    
  },
  mounted () {
 
    this.$nextTick(() => {
      elementResizeDetectorMaker().listenTo(document.getElementById('pages'), (element) => {
        this.resize_window(element.clientWidth)
      })
    })
  
  }
}
</script>

<style lang="stylus" scoped>
@import './page.styl'
</style>
