<template>
  <div :id="id" :style="{height:height,width:width}" ref="charts"></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'bar'
    },
    option: {
      type: [Object, Array],
      default: () => {
        return {}
      }
    },
    theme: {
      type: String,
      default: 'white'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    option: {
      handler (val) {
        this.initChart(val)
      },
      deep: true
    }
  },
  methods: {
    initChart (data) {
      this.chart = this.$echarts.init(document.getElementById(this.id), null, { renderer: 'svg' })
      const chartsOption = {
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        color: ['#4393FF', '#35D0C0', '#37A2FF', '#FF0087', '#FFBF00'],
        legend: {
          show: false,
          data: ['Rainfall', 'Evaporation'],
        },
        toolbox: {
          show: true,
          feature: {
            // dataView: { show: true, readOnly: false },
            // magicType: { show: true, type: ['line', 'bar'] },
            // restore: { show: true },
            // saveAsImage: { show: true }
          }
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              show: true,
              margin: 22,
              textStyle: {
                color: 'rgba(255,255,255,0.9)',
                fontSize: 14
                // fontSize: 16, 可直接写数字,单位px
              }
            },
            
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              margin: 22,
              textStyle: {
                color: 'rgba(255,255,255,0.9)',
                fontSize: 12
                // fontSize: 16, 可直接写数字,单位px
              }
            },
            splitLine: {
              lineStyle: {
                color: '#E2E2E2',
                opacity: 0.1
              }
            },
          }
        ],
        series: [
          {
            name: 'Rainfall',
            type: 'bar',
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
           
          },
          {
            name: 'Evaporation',
            type: 'bar',
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ],
            markPoint: {
              data: [
                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
          }
        ]
      };
      this.chart.setOption(this.$lodash.merge(chartsOption, data))
    }
  },
  mounted () {
    this.initChart(this.option)
  }
}
</script>
