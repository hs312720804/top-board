<template>

  <div class="total-wrap">
    <div class="table-wrap"> 
      <div class="title">
        荣誉榜
        <div class="position-right">
          累计已解决：{{ proccessed }}
        </div>
      </div>
  
      <div
        class="table"
      >
        <div class="table-head">
          <div class="head-item-first">排名</div>
          <div class="head-item">问题类型</div>
          <div class="head-item-num">责任人</div>
          <div class="head-item-num">已解决</div>
          <div class="head-item-num">解决率</div>
        </div>
        <!-- <swiper :options="options" v-if="componentList.length > 0">
            <swiper-slide v-for="(val,index) in componentList" :key="index"> -->
              <div
                class="table-body--item"
                v-for="(table, tableIndex) in table1ComponentList"
                :key="tableIndex"
              >
                <div class="body-item-first">
                  <span class="rank" :class="'rank' + table.index">Top{{ table.index + 1 }}</span>
                </div>
                <div class="body-item">{{ table.modularName }}</div>
                <div class="body-item-num">
                  <img class="img-style" :src="table.avatar" min-width="30" height="30"/>
                  {{ table.name || '-' }}
                </div>
                <div class="body-item-num">{{ table.processed }}</div>
                <div class="body-item-num">{{ Math.round((table.processedRatio * 100)) }}%</div>
              </div>
            <!-- </swiper-slide>
        </swiper> -->

      </div>
    </div>
    <div class="flex-gap-div"></div>
    <div class="table-wrap"> 
      <div class="title">
        黑榜
        <div class="position-right">
          累计待解决：{{ unProccessed }}
        </div>
      </div>
  
      <div
        class="table"
      >
        <div class="table-head">
          <div class="head-item-first">排名</div>
          <div class="head-item">问题类型</div>
          <div class="head-item-num">责任人</div>
          <div class="head-item-num">待解决</div>
          <div class="head-item-num">解决率</div>
        </div>

        <!-- <swiper :options="options" v-if="blackComponentList.length > 0">
            <swiper-slide v-for="(val,index) in blackComponentList" :key="index"> -->
              <div
                class="table-body--item"
                v-for="(table, tableIndex) in blackComponentList"
                :key="tableIndex"
              >
                <div class="body-item-first">
                  <span class="rank" :class="'rank' + table.index">Top{{ table.index + 1 }}</span>
                </div>
                <div class="body-item">{{ table.modularName }}</div>
                <div class="body-item-num">
                  <img class="img-style" :src="table.avatar" min-width="30" height="30"/>
                  {{ table.name || '-' }}
                </div>
                <div class="body-item-num">{{ table.processed }}</div>
                <div class="body-item-num">{{ Math.round((Number(table.processedRatio) * 100)) }}%</div>
              </div>
            <!-- </swiper-slide>
        </swiper> -->

        <!-- <div
          class="table-body--item"
          v-for="(table, tableIndex) in tableData"
          :key="tableIndex"
        >
          <div class="body-item-first">
            <span :class="'rank'+tableIndex">Top{{ tableIndex + 1}}</span>
          </div>
          <div class="body-item">{{ table.departmentName }}</div>
          <div class="body-item-num">
            <img class="img-style" :src="table.avatar" min-width="30" height="30"/>
            {{ table.name || '-' }}
          </div>
          <div class="body-item-num">{{table.contribute}}个</div>
          <div class="body-item-num">{{table.activityServiceNumber}}个</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
// import {
//   swiper,
//   swiperSlide
// } from 'vue-awesome-swiper'

// import 'swiper/dist/css/swiper.css'
export default {
  inject: ['_this'],
   components: {
    // swiper,
		// swiperSlide
   },
   data () {
     return {
      // tableData1: [],
      // tableData2: [],
      // componentList: [], // 总的轮播数据
      // blackComponentList: [], // 总的轮播数据
      
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
      },
      // proccessed: '-',
      // unProccessed: '-'
     }
   },
   computed: {
    table1ComponentList () {
      return this._this.table1ComponentList
    },
    blackComponentList () {
      return this._this.blackComponentList
    },
    proccessed () {
      return this._this.proccessed
    },
    unProccessed () {
      return this._this.unProccessed
    }
  },
   created() {
    // const lastMonthTime = moment(new Date()).subtract(1,'months').startOf('month').format('yyyy-MM-DD HH:mm:ss')

    // const parmas = {
    //   date: lastMonthTime
    // }
    // this.$service.redRank(parmas).then((res) => {
    //   if (res && res.data && res.data.list) {
    //     this.proccessed = res.data.proccessed
    //     this.unProccessed = res.data.unProccessed
    //     const tableData = res.data.list.map((item, i) => {
    //       let info = {}
    //       if (item.userInfo) {
    //         info = item.userInfo[0]
    //       }
    //       console.log('info-->', info)
    //       return {
    //         index: i,
    //         ...item,
    //         avatar: info && info.avatar ? info.avatar : '',
    //         name: info && info.name ? info.name : '',
    //       }
    //     })

    //     const tableData1 = tableData.slice(0, 5)
    //     this.componentList = tableData1
        
    //   }
    // })
    // this.$service.blackRank(parmas).then((res) => {
    //   if (res && res.data && res.data.list) {
    //     const tableData = res.data.list.map((item, i) => {
    //       let info = {}
    //       if (item.userInfo) {
    //         info = item.userInfo[0]
    //       }
    //       console.log('info-->', info)
    //       return {
    //         index: i,
    //         ...item,
    //         avatar: info && info.avatar ? info.avatar : '',
    //         name: info && info.name ? info.name : '',
    //       }
    //     })

    //     const tableData1 = tableData.slice(0, 5)
      
    //     this.blackComponentList = tableData1
         
    //   }
    // })
  
    
  },
  
}
</script>

<style lang='stylus' scoped>
@import './table.styl'
</style>
