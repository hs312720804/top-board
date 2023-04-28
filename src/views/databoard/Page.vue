<template>
  <div style="position: relative">
    <div class="guides-header">
      <div class="site-name">
        Top 问题榜
        <span class="sub-title">
          数据统计：{{ currentMonth }}
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
              <span class="num">{{ answersData.total }}</span>
            </div>
            <div class="sub-info">
              同比
              <template v-if="answersData.lastYearMonthTotal > 0">
                
                <span :class="(answersData.total - answersData.lastYearMonthTotal) > 0 ? 'up-img' : 'down-img'"></span>
                <span class="sub-info-num" :class="(answersData.total - answersData.lastYearMonthTotal) > 0 ? 'red' : 'green'">
                  {{ (( answersData.total - answersData.lastYearMonthTotal ) / answersData.lastYearMonthTotal * 100).toFixed(1) }}%
                </span>
              </template>
              <span v-else>-</span>
              <span style="margin-left: 20px">环比</span>
              <template v-if="answersData.lastMonthTotal > 0">
                
                <span :class="(answersData.total - answersData.lastMonthTotal) > 0 ? 'up-img' : 'down-img'"></span>
                <span class="sub-info-num" :class="(answersData.total - answersData.lastMonthTotal) > 0 ? 'red' : 'green'">
                  {{ (( answersData.total - answersData.lastMonthTotal ) / answersData.lastMonthTotal * 100).toFixed(1) }}%
                </span>
              </template>
              <span v-else>-</span>
            
            </div>

          </div>
          <div class="grid-columns--content-box box2" >
            <div>
              <span class="icon icon1"></span>
              <span class="info">待处理</span>
              <span class="num">{{ answersData.waitHandle }}</span>
            </div>
          </div>
          <div class="grid-columns--content-box box3" >
            <div>
              <span class="icon icon2"></span>
              <span class="info">处理中</span>
              <span class="num">{{ answersData.handling }}</span>
            </div>
          </div>
          <div class="grid-columns--content-box box4" >
            <div>
              <i class="icon el-icon-success"></i>
              <span class="info">已解决</span>
              <span class="num">{{ answersData.releases }}</span>
            </div>
          </div>
          <div class="grid-columns--content-box box5" >
            <div>
              
              <i class="icon el-icon-star-off"></i>
              <span class="info">满意度</span>
              <span class="num">{{ answersData.satisfactionRatio }}</span>
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
            <span class="info" style="margin-left: 0;margin-right: 10px;">BUG</span>
            <span class="num">{{ boardBugData.total === undefined ?  '/' : boardBugData.total }}</span>
            <div class="sub-info left-right-layout" >
              <div >
                同比
                <template v-if="boardBugData.lastYearMonthTotal > 0">
                
                  <span :class="(boardBugData.total - boardBugData.lastYearMonthTotal) > 0 ? 'up-img' : 'down-img'"></span>
                  <span class="sub-info-num" :class="(boardBugData.total - boardBugData.lastYearMonthTotal) > 0 ? 'red' : 'green'">
                    <!-- 8.5% -->
                    {{ (( boardBugData.total - boardBugData.lastYearMonthTotal ) / boardBugData.lastYearMonthTotal * 100).toFixed(1)}}%
                  </span>
                </template>
                <span v-else>-</span>

              </div>
              <div >
                环比
                <template v-if="boardBugData.lastMonthTotal > 0">
                
                  <span :class="(boardBugData.total - boardBugData.lastMonthTotal) > 0 ? 'up-img' : 'down-img'"></span>
                  <span class="sub-info-num" :class="(boardBugData.total - boardBugData.lastMonthTotal) > 0 ? 'red' : 'green'">
                    {{ (( boardBugData.total - boardBugData.lastMonthTotal ) / boardBugData.lastMonthTotal * 100).toFixed(1) }}%
                  </span>
                </template>
                <span v-else>-</span>

              </div>
            </div>
          </div>
          <div class="grid-columns--content-box" >
            <div>
              <span class="icon icon1"></span>
              <span class="info">待处理</span>
              <span class="num">{{ boardBugData.waitHandle === undefined ?  '/' : boardBugData.waitHandle }}</span>
            </div>
          </div>
          <div class="grid-columns--content-box" >
            <div>
              <span class="icon icon2"></span>
              <span class="info">处理中</span>
              <span class="num">{{ boardBugData.handling === undefined ? '/' : boardBugData.handling }}</span>
            </div>
          </div>
          <div class="grid-columns--content-box" >
            <div>
              <i class="icon el-icon-success"></i>
              <span class="info">已解决</span>
              <span class="num">{{ boardBugData.release === undefined ?  '/' : boardBugData.release }}</span>
            </div>
          </div>
          <div class="grid-columns--content-box" >
            <div>
              
              <i class="icon el-icon-star-off"></i>
              <span class="info">满意度</span>
              <span class="num">{{ boardBugData.satisfactionRatio === undefined ? '/' : (boardBugData.satisfactionRatio * 100 + '%')  }}</span>
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
            <span class="info" style="margin-left: 0;margin-right: 15px;">转需求</span>
            <span class="num">{{ boardNeedData.total === undefined ? '/' : boardNeedData.total }}</span>
            <div class="sub-info left-right-layout" >
              <div>
                同比
                <template v-if="boardNeedData.lastYearMonthTotal > 0">
                
                  <span :class="(boardNeedData.total - boardNeedData.lastYearMonthTotal) > 0 ? 'up-img' : 'down-img'"></span>
                  <span class="sub-info-num" :class="(boardNeedData.total - boardNeedData.lastYearMonthTotal) > 0 ? 'red' : 'green'">
                    {{ (( boardNeedData.total - boardNeedData.lastYearMonthTotal ) / boardNeedData.lastYearMonthTotal * 100).toFixed(1) }}%
                  </span>
                </template>
                <span v-else>-</span>

              </div>
              <div >
                环比
                <template v-if="boardNeedData.lastMonthTotal > 0">
                  <span :class="(boardNeedData.total - boardNeedData.lastMonthTotal) > 0 ? 'up-img' : 'down-img'"></span>
                  <span class="sub-info-num" :class="(boardNeedData.total - boardNeedData.lastMonthTotal) > 0 ? 'red' : 'green'">
                    {{ (( boardNeedData.total - boardNeedData.lastMonthTotal ) / boardNeedData.lastMonthTotal * 100).toFixed(1) }}%
                  </span>
                </template>
                <span v-else>-</span>
              </div>
            </div>
          </div>
          <div class="grid-columns--content-box" >
            <div>
              <span class="icon icon1"></span>
              <span class="info">待排期</span>
              <span class="num">{{ boardNeedData.waitHandle === undefined ? '/' : boardNeedData.waitHandle}}</span>
            </div>
          </div>
          <div class="grid-columns--content-box" >
            <div>
              <span class="icon icon2"></span>
              <span class="info">进行中</span>
              <span class="num">{{ boardNeedData.handling === undefined ? '/' : boardNeedData.handling}}</span>
            </div>
          </div>
          <div class="grid-columns--content-box" >
            <div>
              <i class="icon el-icon-success"></i>
              <span class="info">已发布</span>
              <span class="num">{{ boardNeedData.release === undefined ? '/' : boardNeedData.release}}</span>
            </div>
          </div>
          <div class="grid-columns--content-box" >
            <div>
              
              <i class="icon el-icon-star-off"></i>
              <span class="info">满意度</span>
              <span class="num">{{ boardNeedData.satisfactionRatio === undefined ? '/' : (boardNeedData.satisfactionRatio * 100 + '%') }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-columns--box">
        <TableContent></TableContent>
      </div>
    </div>
  </div>
    

</template>

<script>
// import ScreenFull from './Screenfull.vue'
// import elementResizeDetectorMaker from 'element-resize-detector'
// import CChart from '@/components/charts/Index.vue'
import TableContent from './table/table1.vue'
import setInterval from './setInterval.js'
// import getYMD from '@/utlis/date.js'
import moment from 'moment'
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
      currentMonth: '',
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
      boardBugData: {},
      boardNeedData: {},
      answersData: []
      // scalseNum: 1,
      // pagesHeight: 1080,
    }
  },
  computed: {},
  created() {
    this.currentMonth = moment(new Date()).subtract(1,'months').startOf('month').format('YYYY-MM')

    // this.currentMonth = moment().format('YYYY-MM');  //获取当年月  2022-09
    // console.log(' currentMonth-------->', this.currentMonth)
    const lastMonthTime = moment(new Date()).subtract(1,'months').startOf('month').format('yyyy-MM-DD HH:mm:ss')

    const parmas = {
      date: lastMonthTime
    }
    this.$service.boardBug(parmas).then((res) => {
      this.boardBugData = res.data || {}
    })
    this.$service.boardNeed(parmas).then((res) => {
      this.boardNeedData = res.data || {}
    })


    const today = moment(new Date()).format('YYYY-MM-DD')

    const parmas2 = {
      timeCode: today
    }
    // 咨询解答
    this.$service.selConsultationAnswers(parmas2).then((res) => {
      if (res && res.data) {
        this.answersData = res.data
      }
    })

  },
  methods: {
    
    // resize_window (width) {
    //   const scalseNum = Number((width) / 1920)
    //   this.scalseNum = scalseNum
    //   this.pagesHeight = 1080 * scalseNum
    // }
    
  },
  mounted () {
  
  }
}
</script>

<style lang="stylus" scoped>
@import './page.styl'
</style>
