<template>
<div
  class="table"
>
  <div class="table-head">
    <div class="head-item-first">应用名称</div>
    <div class="head-item-num">责任人</div>
    <div class="head-item">崩溃次数</div>
  </div>
  <div
    class="table-body--item"
    v-for="(table, tableIndex) in tableData"
    :key="tableIndex"
  >
    
  <div class="body-item-first">{{table.name}}</div>
  <div class="body-item-num">
    <img :src="table.thumbnail" class="img-style"  min-width="30" height="30"/>
  </div>
  <div class="body-item">
    <Progress :value="table.value"></Progress>
  </div>
  </div>
</div>
</template>

<script>
 import Progress from '@/components/progress.vue'
 export default {
   components: {
    Progress
   },
   data () {
     return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '10%',
        thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
        value: 20
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '10%',
        thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
        value: 50
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '10%',
        thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
        value: 70
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '10%',
        thumbnail: 'https://a1.cdn.91360.com/cms/bs3/upload/section/31c9f4a94769e924b7ccd764c075b29a_t.png',
        value: 90
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
.table-head .head-item-first{
  color: #fff;
  width: 150px;
  text-align left
  margin-left 20px
}

.table-head .head-item-num {
  width: 150px;
}
.table-body--item .body-item-first{
  text-align left
  margin-left 20px
  width: 150px;
}
.table-body--item .body-item-num{
  width: 150px;
}

.table-body--item {
  border-top 1px solid rgba(151,151,151,0.2)
}
 
</style>
