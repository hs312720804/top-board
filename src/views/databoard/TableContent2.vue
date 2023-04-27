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
      <div
        class="table-body--item"
        v-for="(table, tableIndex) in tableData"
        :key="tableIndex"
      >
        <div class="body-item-first">
          <span :class="'rank'+tableIndex">Top{{ tableIndex + 1}}</span>
        </div>
        <div class="body-item">会员服务/影视会员/自动续费/自动续费/</div>
        <div class="body-item-num">
          <img class="img-style" :src="table.thumbnail" min-width="30" height="30"/>
          李某人
        </div>
        <div class="body-item-num">{{table.contribute}}个</div>
        <div class="body-item-num">{{table.activityServiceNumber}}个</div>
        <div class="body-item-num">{{table.activityServiceNumber}}个</div>
        <div class="body-item-num">{{table.activityServiceNumber}}个</div>
        <div class="body-item-num">{{table.activityServiceNumber}}个</div>
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
      >
        <c-chart
          style="height: 400px"
          type="bar"
          id="chart-id0"
          :option="optionsData"
          theme="black"
        ></c-chart>
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
import Table4 from './table/table4.vue'
import Table3 from './table/table3.vue'
import CChart from '@/components/charts/Index.vue'
import moment from 'moment'

 export default {
   components: {
    Table4,
    Table3,
    CChart
  },
   data () {
     return {
      lastMonth: '',
      beforeLastMonth: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '10%',
        thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '10%',
        thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '10%',
        thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '10%',
        thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '10%',
        thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
      }],
      optionsData: {
      //   formatter:(params) => {
      //     const data = params[0]
      //     const value = data.value
      //     return `${value[0]}（复用项目数 : ${value[1]}个）`
      //   },
      //   yAxis: {
      //     // max: 100,
      //     splitNumber: 5,
      //     axisLabel: {
      //       formatter: '{value} 个'
      //     }
      //   },
      //   xAxis: {
      //     axisLabel: {
      //       rotate: 45
      //     }
      //   },
      //   grid: {
      //     top: 20
      //   },
      //   // series: []
      }

     }
   },
   created() {
    this.lastMonth = moment(new Date()).subtract(1,'months').startOf('month').format('M')
    this.beforeLastMonth  = moment(new Date()).subtract(2,'months').startOf('month').format('M')

    console.log('lastMonth--->', this.lastMonth)

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
