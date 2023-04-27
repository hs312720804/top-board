<template>
  <el-scrollbar
    class="pages"
    ref="pages"
    id="pages"
  >
    <div
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
      >
        <div style="position: relative">
          <div class="guides-header">
            <div class="site-name">
              Top 问题榜
              <span class="sub-title">
                数据统计时间至：2023-04-16（{{cycle[1].startDate}} / {{cycle[1].endDate}}）
              </span>
            </div>
          </div>
          <div class="databoard-box">
           
            <div class="grid-columns--box">
              <TableContent2></TableContent2>
            </div>
            <!-- <div
              class="grid-item--box"
              v-for="(item, index) in databoardData"
              :key="index"
              :style="item.style"
            >
              <div class="grid-columns--title">
                <div class="name">{{ item.title }}</div>
                <div v-if="item.tabs" class="title-tabs">
                  <span
                    :class="tabs.value === item.params.terminalType ? 'cur-tabs' : ''"
                    v-for="tabs in item.tabs"
                    :key="tabs.value"
                    @click="switchTabs(item, tabs)"
                  >{{tabs.name}}</span>
                </div>
                <el-select
                  v-model="passCallParams.serId"
                  placeholder="请选择"
                  class="select-cycle"
                  v-if="item.type === 'statistics2'"
                  @change="changePaasData"
                  :popper-append-to-body="false"
                >
                  <el-option
                    v-for="paasItem in dropDown"
                    :key="paasItem.serId"
                    :label="paasItem.serName"
                    :value="paasItem.serId">
                  </el-option>
                </el-select>
              </div>
              <div class="grid-item--chart">
                <c-chart
                  :type="item.type"
                  :id="`chart-id${index + 1}`"
                  :option="item.data"
                  theme="black"
                  v-if="item.data.series.length && (item.type === 'bar' || item.type === 'line')"
                ></c-chart>
                <div
                  class="table"
                  v-if="item.type === 'table'"
                >
                  <div class="table-head">
                    <div class="head-item-first">排名</div>
                    <div class="head-item">团队名称</div>
                    <div class="head-item-num">贡献项目数</div>
                    <div class="head-item-num">活跃项目数</div>
                  </div>
                  <div
                    class="table-body--item"
                    v-for="(table, tableIndex) in item.table"
                    :key="tableIndex"
                  >
                    <div class="body-item-first">第{{ tableIndex + 1}}名</div>
                    <div class="body-item">{{table.departmentName}}</div>
                    <div class="body-item-num">{{table.contribute}}个</div>
                    <div class="body-item-num">{{table.activityServiceNumber}}个</div>
                  </div>
                </div>
                <div v-if="item.type === 'statistics1' || item.type === 'statistics2'" class="statistics-box">
                  <div class="statistics" :class="item.type">
                    <div v-for="(statistics, statisticsIndex) in item.statistics" :key="statisticsIndex">
                      <div class="label">{{ statistics.label }}</div>
                      <div class="value">{{ $cUtils.format.addChineseUnit((item.statisticsData[statistics.key] || 0), 2) }}</div>
                    </div>
                  </div>
                  <div class="chart-box">
                    <c-chart
                      type="line"
                      :id="`chart-id${index + 1}`"
                      :option="item.data"
                      theme="black"
                      v-if="item.data.series.length"
                    ></c-chart>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <setInterval :dropDown="dropDown" @switch="countDownSwitch"></setInterval> -->
  </el-scrollbar>
</template>

<script>
// import ScreenFull from './Screenfull.vue'
import elementResizeDetectorMaker from 'element-resize-detector'
// import CChart from '@/components/charts/Index.vue'
import TableContent2 from './TableContent2.vue'
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
    menuId: [String, Number]
  },
  data () {
    return {
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
      scalseNum: 1,
      pagesHeight: 1080,
    }
  },
  computed: {},
  methods: {
    
    resize_window (width) {
      const scalseNum = Number((width) / 1920)
      this.scalseNum = scalseNum
      this.pagesHeight = 1080 * scalseNum
    }
    
  },
  mounted () {
 
    this.$nextTick(() => {
      elementResizeDetectorMaker().listenTo(document.getElementById('pages'), (element) => {
        this.resize_window(element.clientWidth)
      })
    })
  
  }
}
</script>

<style lang="stylus" scoped>
@import './page.styl'
</style>
