<template>
<div>
  
  <div class="table-wrap" > 
    
    <div
    class="table"
    >
      <div class="table-head">
        <div class="head-item-first">排名</div>
        <div class="head-item">问题类型</div>
        <div class="head-item-num">责任人</div>
        <div class="head-item-num">上月排名</div>
        <div class="head-item-num">昨日客诉量</div>
        <div class="head-item-num">{{ lastMonth }}月客诉量</div>
        <div class="head-item-num">{{ beforeLastMonth }}月客诉量</div>
        <div class="head-item-num">半年客诉量均值</div>
      </div>

      <!-- <slider ref="slider2" :options="options">

        <slideritem > -->
          <swiper :options="options" ref="mySwiper" v-if="componentList.length > 0">
            <swiper-slide v-for="(val,index) in componentList" :key="index">
            
      <!-- <slider ref="mySwiper" :options="options" v-if="componentList.length > 0">

        <slideritem v-for="(val,index) in componentList" :key="index"> -->
              <div
                class="table-body--item"
                v-for="(table, tableIndex) in val"
                :key="tableIndex"
              >
                <div class="body-item-first">
                  <span :class="'rank' + table.index">Top{{ table.index + 1 }}</span>
                </div>
                <div class="body-item">{{table.modularName }}</div>
                <div class="body-item-num">
                  <img class="img-style" :src="table.avatar" min-width="30" height="30"/>
                  {{ table.name || '-' }}
                </div>
                <div class="body-item-num">
                  {{ table.monthRanking }}
                  <span :class="(table.monthRanking - table.beforeMonthRanking) > 0 ? 'red' : 'green'">
                    （
                    <span>{{ getOp(table.monthRanking, table.beforeMonthRanking) }}</span>
                    {{ table.monthRanking - table.beforeMonthRanking }}
                    ）
                  </span>
                </div>
                <div class="body-item-num">
                  {{ table.ydayProblemTotal }}
                  <span :class="(table.ydayProblemTotal - table.beforeYdayProblemTotal) > 0 ? 'red' : 'green'">
                    （
                    <span>{{ getOp(table.ydayProblemTotal, table.beforeYdayProblemTotal) }}</span>
                    {{ table.ydayProblemTotal - table.beforeYdayProblemTotal }}
                    ）
                  </span>
                </div>
                <div class="body-item-num">
                  <span :class="(table.monthProblemTotal - table.beforeMonthProblemTotal) > 0 ? 'red' : 'green'">
                    {{ table.monthProblemTotal }}
                  </span>
                </div>
                <div class="body-item-num">
                  {{ table.beforeMonthProblemTotal }}
                </div>
                <div class="body-item-num">
                  {{ table.halfYearAverage }}
                </div>
                
              </div>
            </swiper-slide>
          </swiper>
        <!-- </slideritem>
       
      </slider> -->
          

    
    </div>
    
  </div>


  <div class="total-wrap" style="margin-top: 20px">
    <div class="table-wrap" style="flex: 0 0 680px"> 
      <div class="title">
        客诉趋势
      </div>
      
      <div
        class="table"
        style="padding: 0px 20px"
      >
        <!-- <c-chart
          style="height: 400px"
          type="bar"
          id="chart-id0"
          :option="optionsData"
          theme="black"
        ></c-chart> -->
        <barChart v-if="comparisonData.length > 0" :complainList="comparisonData"></barChart>
      </div>
    </div>
    <div class="flex-gap-div"></div>
    <div class="table-wrap"> 
      <div class="title">
        批量问题预警

        <div class="img-empty"></div>


      </div>
      <!-- <Table3></Table3> -->
      
    </div>
    <div class="flex-gap-div"></div>

    <div class="table-wrap"> 
      <div class="title">
        异常崩溃

        <div class="img-empty"></div>

        <!-- <el-empty description="暂无数据" :image-size="200"></el-empty> -->
        
      </div>
      <!-- <Table4></table4> -->
      
    </div>

  </div>


</div>
  
</template>

<script>
// import Table4 from './table4.vue'
// import Table3 from './table3.vue'
import barChart from './barChart.vue'
// import CChart from '@/components/charts/Index.vue'
// import Swiper from 'swiper'
import moment from 'moment'
// import { slider, slideritem } from 'vue-concise-slider'
	// 局部引入 vue-awesome-swiper 及其样式
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

// import { slider, slideritem } from 'vue-concise-slider'

// import { Virtual } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/vue';

 export default {
   components: {
    // Table4,
    // Table3,
    barChart,
    swiper,
		swiperSlide
    // slider,
    // slideritem
  },
  // props: {
    // tableData1: {
    //   type: Array,
    //   default: () => []
    // },
    // tableData2: {
      // }
  // },
  props: {
    currentPage: {
      type: [String, Number],
      default: ''
    }
  },
   data () {
     return {
      lastMonth: '',
      beforeLastMonth: '',
      tableData: [],
      tableData1: [],
      tableData2: [],
      componentList: [], // 总的轮播数据
      comparisonData: [], // 客诉趋势
      options: {
        // direction: 'vertical',
        // 改变swiper样式时，自动初始化swiper
        observer: true,
        // 监测swiper父元素，如果有变化则初始化swiper
        observeParents: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      }
      // options: {
      //   currentPage: 0,
      //   autoplay: '1000',
      //   loop: true
      // }
     }
   },
   computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    watch: {
      currentPage: {
        handler() {
          this.swiper.slideTo(1, 0, false)
          // console.log('this.$refs.mySwiper------->', this.$refs.mySwiper)
          // // this.$refs.mySwiper.slide(1)
          // this.$nextTick(() => {
          //   this.$refs.mySwiper.$emit('slideTo', 0)
          // })
          // this.$refs.mySwiper.$emit('autoplayStart',1000)
        },
        immediate: true
      }
    },
   created() {
    this.lastMonth = moment(new Date()).subtract(1,'months').startOf('month').format('M')
    this.beforeLastMonth  = moment(new Date()).subtract(2,'months').startOf('month').format('M')
    const today = moment(new Date()).format('YYYY-MM-DD')

    const parmas = {
      timeCode: today
    }
    this.$service.selMonthRanking(parmas).then((res) => {
      if (res && res.data) {
        this.tableData = res.data.map((item, i) => {
          let info = {}
          if (item.userInfo) {
            info = JSON.parse(item.userInfo)[0]
          }
          console.log('info-->', info)
          return {
            index: i,
            ...item,
            avatar: info && info.avatar ? info.avatar : '',
            name: info && info.name ? info.name : '',
          }
        })

        this.tableData1 = this.tableData.slice(0, 5)
        this.tableData2 = this.tableData.slice(5, 10)
        this.componentList = [
         this.tableData1,
         this.tableData2
        ]
        console.log('tableData-------->', this.tableData)
      }
    })
    this.$service.complaintComparison(parmas).then((res) => {
      debugger
      if (res && res.data) {
        this.comparisonData = res.data
      }
    })
    // for (let i = 0; i < 10; i ++) {
    //   this.tableData.push({
    //     index: i,
    //     date: '2016-05-02',
    //     name: `王小虎${i}`,
    //     address: '10%',
    //     thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
    //   })
    // }
    
   },
   mounted () {
    // new Swiper("#rank", {
    //   // direction: 'vertical',  //滚动方向
    //   loop: true,
    //   initialSlide: 0, //设定初始化时slide的索引
    //   autoplay: {
    //     delay: 8000, // 1秒切换一次
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
  },
  methods: {
    getOp(val1, val2) {
      if (val1 > val2) {
        return '+'
      } else if (val1 < val2) {
        return ''
      } else if (val1 === val2) {
        return ''
      }
    }
  }
 }
</script>

<style lang='stylus' scoped>
@import './table.styl'
text-align center
.table-head .head-item-first, .table-head .head-item-num {
    color: #fff;
    width: 190px;
}
.table-body--item .body-item-first{
  width: 190px;
}
.table-body--item .body-item-num{
  width: 190px;
}

.table-body--item {
  border-top 1px solid rgba(151,151,151,0.2)
}
.red {
  color: red
}
.green {
  color: green
}

.total-wrap {
  height: 500px
}
.img-empty {
  // background color url('image') position repeat
  background-size: contain;
  background-repeat: no-repeat;
  background-image url('~@/assets/imgs/empty.svg')
  width: 36%;
  height: 269px;
  margin: 0 auto;
  top: 45px;
  position: relative;
  opacity 0.5
  &::after {
    content: '暂无数据';
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    color: #80828b;
  }
}
</style>
