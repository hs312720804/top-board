<template>
<div>
  <div class="table-wrap" > 
    <div
    class="table"
    >
      <div class="table-head">
        <div class="head-item-first">TOP排名</div>
        <div class="head-item">问题类型</div>
        <div class="head-item-num">责任人</div>
        <div class="head-item-num">昨日客诉量</div>
        <div class="head-item-num">{{ lastMonth }}月客诉量</div>
        <div class="head-item-num">{{beforeLastMonth}}月客诉量</div>
        <div class="head-item-num">半年客诉量均值</div>
        <div class="head-item-num">上月排名</div>
      </div>

      <div id="rank">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div
              class="table-body--item"
              v-for="(table, tableIndex) in tableData.slice(0,5)"
              :key="tableIndex"
            >
              <div class="body-item-first">
                <span :class="'rank' + table.index">Top{{ table.index + 1 }}</span>
              </div>
              <div class="body-item">{{table.modularName }}</div>
              <div class="body-item-num">
                <img class="img-style" :src="table.thumbnail" min-width="30" height="30"/>
                {{ table.name }}
              </div>
              <div class="body-item-num">{{ table.ydayProblemTotal }}</div>
              <div class="body-item-num">{{ table.monthProblemTotal }}</div>
              <div class="body-item-num">{{ table.beforeMonthProblemTotal }}</div>
              <div class="body-item-num">{{ table.halfYearAverage }}</div>
              <div class="body-item-num">{{ table.monthRanking }}</div>
            </div>
          </div>
          <div class="swiper-slide">
            <div
              class="table-body--item"
              v-for="(table, tableIndex) in tableData.slice(5,10)"
              :key="tableIndex"
            >
              <div class="body-item-first">
                <span :class="'rank' + table.index">Top{{ table.index + 1}}</span>
              </div>
              <div class="body-item">{{ table.modularName }}</div>
              <div class="body-item-num">
                <img class="img-style" :src="table.thumbnail" min-width="30" height="30"/>
                {{ table.name }}
              </div>
              <div class="body-item-num">{{ table.ydayProblemTotal }}</div>
              <div class="body-item-num">{{ table.monthProblemTotal }}</div>
              <div class="body-item-num">{{ table.beforeMonthProblemTotal }}</div>
              <div class="body-item-num">{{ table.halfYearAverage }}</div>
              <div class="body-item-num">{{ table.monthRanking }}</div>
            </div>
          </div>
        </div>
      </div>

     
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
        <barChart></barChart>
      </div>
    </div>
    <div class="flex-gap-div"></div>
    <div class="table-wrap"> 
      <div class="title">
        批量问题预警
      </div>
      <Table3></Table3>
      
    </div>
    <div class="flex-gap-div"></div>

    <div class="table-wrap"> 
      <div class="title">
        异常崩溃
      </div>
      <Table4></table4>
      
    </div>

  </div>


</div>
  
</template>

<script>
import Table4 from './table4.vue'
import Table3 from './table3.vue'
import barChart from './barChart.vue'
// import CChart from '@/components/charts/Index.vue'
import Swiper from 'swiper'
import moment from 'moment'

// import { Virtual } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/vue';

 export default {
   components: {
    Table4,
    Table3,
    barChart
  },
  props: {
    // tableData: {
    //   type: Array,
    //   default: () => []
    // }
  },
   data () {
     return {
      lastMonth: '',
      beforeLastMonth: '',
      tableData: [],
     }
   },
   created() {
    this.lastMonth = moment(new Date()).subtract(1,'months').startOf('month').format('M')
    this.beforeLastMonth  = moment(new Date()).subtract(2,'months').startOf('month').format('M')
      for (let i = 0; i < 10; i ++) {
        this.tableData.push({
          index: i,
          date: '2016-05-02',
          name: `王小虎${i}`,
          address: '10%',
          thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
        })
      }
    
   },
   mounted () {
    new Swiper("#rank", {
      // direction: 'vertical',  //滚动方向
      loop: true,
      initialSlide: 0, //设定初始化时slide的索引
      autoplay: {
        delay: 6000, // 1秒切换一次
        disableOnInteraction: false
      },
      updateOnImagesReady: true,
      slidesPerView: 1,  //设置slider容器能够同时显示的slides数量
      watchOverflow: true,//因为仅有1个slide，swiper无效
      //spaceBetween : '10%',按container的百分比

      observer: true, //在 Swiper 的上启用动态检查器(Mutation Observer)，如果你更改swiper 的样式（隐藏/显示）或修改其子元素（添加/删除幻灯片），Swiper 会更新（重新初始化）并触发 observerUpdate 事件。
      observeParents: true,
      observeSlideChildren: true,
       
    })
  },
  methods: {

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
</style>
