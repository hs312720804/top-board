<template>

  <div class="total-wrap">
    <div class="table-wrap"> 
      <div class="title">
        荣誉榜
        <div class="position-right">
          已解决：6801
        </div>
      </div>
  
      <div
        class="table"
      >
        <div class="table-head">
          <div class="head-item-first">排名</div>
          <div class="head-item">应用名称</div>
          <div class="head-item-num">头像</div>
          <div class="head-item-num">已解决问题</div>
          <div class="head-item-num">解决率</div>
        </div>
        <div
          class="table-body--item"
          v-for="(table, tableIndex) in tableData"
          :key="tableIndex"
        >
          <div class="body-item-first">
            <span :class="'rank'+tableIndex">Top{{ tableIndex + 1}}</span>
          </div>
          <div class="body-item">{{table.departmentName}}</div>
          <div class="body-item-num">
            <img :src="table.thumbnail" class="img-style" min-width="30" height="30"/>
          </div>
          <div class="body-item-num">{{table.contribute}}个</div>
          <div class="body-item-num">{{table.activityServiceNumber}}个</div>
        </div>
      </div>
    </div>
    <div class="flex-gap-div"></div>
    <div class="table-wrap"> 
      <div class="title">
        黑榜
        <div class="position-right">
          待解决：6801
        </div>
      </div>
  
      <div
        class="table"
      >
        <div class="table-head">
          <div class="head-item-first">排名</div>
          <div class="head-item">应用名称</div>
          <div class="head-item-num">头像</div>
          <div class="head-item-num">已解决问题</div>
          <div class="head-item-num">解决率</div>
        </div>
        <div
          class="table-body--item"
          v-for="(table, tableIndex) in tableData"
          :key="tableIndex"
        >
          <div class="body-item-first">
            <span :class="'rank'+tableIndex">Top{{ tableIndex + 1}}</span>
          </div>
          <div class="body-item">{{table.departmentName}}</div>
          <div class="body-item-num">
            <img :src="table.thumbnail" class="img-style" min-width="30" height="30" />
          </div>
          <div class="body-item-num">{{table.contribute}}个</div>
          <div class="body-item-num">{{table.activityServiceNumber}}个</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   components: {},
   data () {
     return {
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
      }]
     }
   },
   created() {

   },
   methods: {

   }
 }
</script>

<style lang='stylus' scoped>
@import './table.styl'
</style>
