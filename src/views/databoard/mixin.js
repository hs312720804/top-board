import moment from 'moment'

export default {
  components: {},
  provide() {
    return {
      _this: this
    }
  },
  data () {
    return {
      // ------- page
      boardBugData: {},
      boardNeedData: {},
      answersData: [],

      // ------- table1
      table1ComponentList: [], // 总的轮播数据
      blackComponentList: '', 
      proccessed: '-',
      unProccessed: '-',

      // ------- table2
      tableData: [],
      tableData1: [],
      tableData2: [],
      table2ComponentList: [], // 总的轮播数据
      comparisonData: [], // 客诉趋势
    }
  },
  created() {
    this.initPage()
    this.initTable1()
    this.initTable2()
  },
  
  methods: {
    initPage () {
      // 接口请求
      const lastMonthTime = moment(new Date()).subtract(1,'months').startOf('month').format('yyyy-MM-DD HH:mm:ss')

      const parmas = {
        date: lastMonthTime
      }
      this.$service.boardBug(parmas).then((res) => {
        this.boardBugData = res.data || {}
      })
      this.$service.boardNeed(parmas).then((res) => {
        this.boardNeedData = res.data || {}
      })


      const today = moment(new Date()).format('YYYY-MM-DD')

      const parmas2 = {
        timeCode: today
      }
      // 咨询解答
      this.$service.selConsultationAnswers(parmas2).then((res) => {
        if (res && res.data) {
          this.answersData = res.data
        }
      })
    },
    initTable1() {
      const lastMonthTime = moment(new Date()).subtract(1,'months').startOf('month').format('yyyy-MM-DD HH:mm:ss')

      const parmas = {
        date: lastMonthTime
      }
      this.$service.redRank(parmas).then((res) => {
        if (res && res.data && res.data.list) {
          this.proccessed = res.data.proccessed
          this.unProccessed = res.data.unProccessed
          const tableData = res.data.list.map((item, i) => {
            let info = {}
            if (item.userInfo) {
              info = item.userInfo[0]
            }
            console.log('info-->', info)
            return {
              index: i,
              ...item,
              avatar: info && info.avatar ? info.avatar : '',
              name: info && info.name ? info.name : '',
            }
          })

          const tableData1 = tableData.slice(0, 5)
          this.table1ComponentList = tableData1
          
        }
      })
      this.$service.blackRank(parmas).then((res) => {
        if (res && res.data && res.data.list) {
          const tableData = res.data.list.map((item, i) => {
            let info = {}
            if (item.userInfo) {
              info = item.userInfo[0]
            }
            console.log('info-->', info)
            return {
              index: i,
              ...item,
              avatar: info && info.avatar ? info.avatar : '',
              name: info && info.name ? info.name : '',
            }
          })

          const tableData1 = tableData.slice(0, 5)
        
          this.blackComponentList = tableData1
          
        }
      })
    },
    initTable2() {
      const today = moment(new Date()).format('YYYY-MM-DD')

      const parmas = {
        timeCode: today
      }
      this.$service.selMonthRanking(parmas).then((res) => {
        if (res && res.data) {
          this.tableData = res.data.map((item, i) => {
            let info = {}
            if (item.userInfo) {
              info = JSON.parse(item.userInfo)[0]
            }
            console.log('info-->', info)
            return {
              index: i,
              ...item,
              avatar: info && info.avatar ? info.avatar : '',
              name: info && info.name ? info.name : '',
            }
          })

          this.tableData1 = this.tableData.slice(0, 5)
          this.tableData2 = this.tableData.slice(5, 10)
          this.table2ComponentList = [
            this.tableData1,
            this.tableData2
          ]
          console.log('tableData-------->', this.tableData)
        }
      }).finally(() => {
        this.$service.complaintComparison(parmas).then((res) => {
          if (res && res.data) {
            this.comparisonData = res.data
          }
        })
      })
    }
  }
}
