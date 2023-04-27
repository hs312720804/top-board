<template>
  <!-- <el-scrollbar
    class="pages"
    ref="pages"
    id="pages"
  > -->
    <!-- <div
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
      > -->
  <div style="position: relative">
    <div class="guides-header">
      <div class="site-name">
        客诉数据总览
        <span class="sub-title">
          数据统计：{{ currentMonth }}
        </span>
      </div>
    </div>
    <div class="databoard-box">
      
      <div class="grid-columns--box">
        <TableContent2 :tableData="tableData"></TableContent2>
      </div>
      
    </div>
  </div>
      <!-- </div>
    </div> -->
    <!-- <setInterval :dropDown="dropDown" @switch="countDownSwitch"></setInterval> -->
  <!-- </el-scrollbar> -->
</template>

<script>
// import ScreenFull from './Screenfull.vue'
// import elementResizeDetectorMaker from 'element-resize-detector'
// import CChart from '@/components/charts/Index.vue'
import TableContent2 from './table/table2.vue'
import moment from 'moment'
import setInterval from './setInterval.js'
export default {
  mixins: [setInterval],
  components: {
    // CChart,
    // ScreenFull
    // setInterval
    TableContent2
  },
  props: {
    menuId: [String, Number],
    pWidth: {
      type: [String, Number],
      default: ''
    }
  },
  // watch: {
  //   pWidth(val) {
  //     this.resize_window(val)
  //   }
  // },
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
      }, {
        value: 'quarter',
        label: '季度'
      }, {
        value: 'year',
        label: '年度'
      }],
      tableData: [],
      barData: []
      
    }
  },
  computed: {},
  created() {
    this.currentMonth = moment(new Date()).subtract(1,'months').startOf('month').format('YYYY-MM')

    // this.currentMonth = moment().format('YYYY-MM');  //获取当年月  2022-09
    // console.log(' currentMonth-------->', this.currentMonth)
    const parmas = {
      timeCode: '2023-04-27'
    }
    this.$service.selMonthRanking(parmas).then((res) => {
      this.tableData = res.data || {}
    })
    // this.$service.complaintComparison(parmas).then((res) => {
    //   this.barData = res.data || {}
    // })
    
  
  },
  methods: {
    
  },
  mounted () {
 
    // this.$nextTick(() => {
    //   elementResizeDetectorMaker().listenTo(document.getElementById('222'), (element) => {
    //     this.resize_window(element.clientWidth)
    //   })
    // })
  
  }
}
</script>

<style lang="stylus" scoped>
@import './page.styl'
</style>
