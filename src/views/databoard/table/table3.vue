<template>
<div
  class="table"
>
  <div class="table-head">
    <div class="head-item">问题名称</div>
    <div class="head-item-num">责任人</div>
    <div class="head-item-num">客诉量</div>
  </div>
  <div
    class="table-body--item"
    v-for="(table, tableIndex) in tableData"
    :key="tableIndex"
    :style="{background: tableIndex === 0 ? '#4880FF' : '#26292E'}"
  >
    
  <div class="body-item">{{table.name}}</div>
  <div class="body-item-num">
    <img :src="table.thumbnail" class="img-style" min-width="30" height="30"/>
  </div>
  <div class="body-item-num">
    12
  </div>
  </div>
</div>
</template>

<script>
 export default {
   components: {
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


.table-head .head-item-num {
  width: 150px;
}
.table-body--item .body-item-num{
  width: 150px;
}

.table-body--item {
  border-top 1px solid rgba(151,151,151,0.2)
}

.table-body--item {
  border-top: 1px solid rgba(151,151,151,0.2);
  width: 520px;
  height: 77px;
  border-radius: 8px;
  margin: 20px;
  background: #26292E;
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.3);
  border-radius: 8px;
}
.table-head {
  padding 0 20px 
  box-sizing: border-box;
}
.table-head .head-item {
  text-align left
}
.table-body--item .body-item{
  text-align left
  margin-left: 23px
}
 
</style>
