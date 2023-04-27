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
        <div class="head-item">团队名称</div>
        <div class="head-item-num">贡献项目数</div>
        <div class="head-item-num">活跃项目数</div>
      </div>
      <div
        class="table-body--item"
        v-for="(table, tableIndex) in tableData"
        :key="tableIndex"
      >
        <div class="body-item-first">第{{ tableIndex + 1}}名</div>
        <div class="body-item">{{table.departmentName}}</div>
        <div class="body-item-num">{{table.contribute}}个</div>
        <div class="body-item-num">{{table.activityServiceNumber}}个</div>
      </div>
    </div>
    <!-- <el-table
      :data="tableData"
      style="width: 100%"
      header-cell-class-name="table_header"
      cell-class-name="cell-class">
      <el-table-column
        prop="date"
        label="排名"
        width="120">
        <template slot-scope="scope">
          Top{{ scope.row.index }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="应用名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.thumbnail" min-width="30" height="30"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="已解决问题">
      </el-table-column>
      <el-table-column
        prop="address"
        label="解决率">
      </el-table-column>
    </el-table> -->
  </div>
  <div style="width: 18px"></div>
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
        <div class="head-item">团队名称</div>
        <div class="head-item-num">贡献项目数</div>
        <div class="head-item-num">活跃项目数</div>
      </div>
      <div
        class="table-body--item"
        v-for="(table, tableIndex) in tableData"
        :key="tableIndex"
      >
        <div class="body-item-first">第{{ tableIndex + 1}}名</div>
        <div class="body-item">{{table.departmentName}}</div>
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
.total-wrap {
  display flex
}
.title {
  height: 77px;
  line-height: 77px;
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  padding-left 33px
}
.table-wrap {
  flex 1
  background: #1F2025;
  border-radius: 14px;
  border: 1px solid #2B3038;
  position relative
  overflow: hidden;
}
.position-right {
  position: absolute;
  right: 25px;
  top: 0;
  border-radius: 2px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: #67A6FB;
}
</style>
