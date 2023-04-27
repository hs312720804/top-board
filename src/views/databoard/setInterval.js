export default {
  data () {
    return {
      countDown: '',
      countDownNum: 1,
      cycleCountDown: '',
      cycleCountDownNum: 1
    }
  },
  methods: {
    // 统计应用切换
    countDownStart () {
      this.countDown = setInterval(this.countDownChange, 20000)
    },
    countDownChange () {
      if (this.dropDown.length <= this.countDownNum) {
        this.countDownNum = 1
      } else {
        this.countDownNum++
      }
      this.$set(this.passCallParams, 'serId', this.dropDown[this.countDownNum - 1].serId)
      this.getPaasData()
    },
    countDownOver () {
      clearInterval(this.countDown)
    },

    // 统计区间切换
    cycleCountDownStart () {
      clearInterval(this.countDown)
      this.countDownStart()
      // this.cycleCountDownChange()
      // this.countDown = setInterval(this.cycleCountDownChange, 60000)
    },
    cycleCountDownChange () {
      if (this.cycle.length <= this.cycleCountDownNum) {
        this.cycleCountDownNum = 1
      } else {
        this.cycleCountDownNum++
      }
      const timeFlag = this.cycle[this.cycleCountDownNum - 1].value
      this.$set(this.timeParams, 'timeFlag', timeFlag)
      this.changeCycle(timeFlag)
    },
    cycleCountDownOver () {
      clearInterval(this.cycleCountDown)
    }
  },
  beforeDestroy () {
    this.cycleCountDownOver()
    this.countDownOver()
  }
}
