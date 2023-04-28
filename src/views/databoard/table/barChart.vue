<template>
<div>
  <div class="position-right">
    <div class="mark">上周<div class="color-block" style="background:#4393FF ;"></div></div>
    <div class="mark">本周<div class="color-block" style="background:#35D0C0 ;"></div></div>
    <div class="mark">较上周
      <span class="up-down">
        <img src="../../../assets/imgs/arrow(1).svg"/>
        <img src="../../../assets/imgs/arrow(2).svg" style="transform: rotate(180deg);"/>
      </span>
    </div>
  </div>

  <div class="bar-chart">
    <div class="bar-left">
      <div :style="{height:complainMaxStyle}">
        <span class="bar-left-txt">{{complainMaxNum}}</span>
      </div>
      <div :style="{height:complainMaxStyle}">
        <span class="bar-left-txt">{{(complainMaxNum/5)*4}}</span>
      </div>
      <div :style="{height:complainMaxStyle}">
        <span class="bar-left-txt">{{(complainMaxNum/5)*3}}</span>
      </div>
      <div :style="{height:complainMaxStyle}">
        <span class="bar-left-txt">{{(complainMaxNum/5)*2}}</span>
      </div>
      <div :style="{height:complainMaxStyle}">
        <span class="bar-left-txt">{{(complainMaxNum/5)}}</span>
      </div>
      <div :style="{height:complainMaxStyle}">
        <span class="bar-left-txt">0</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="module" v-for="(item,index) in complainList.slice(0,10)" :key="index">
        <div class="module-up-down" v-if="getPercentageChange(item.beforeMonthProblemTotal,item.monthProblemTotal) !=0">
          <span :class="item.beforeMonthProblemTotal>item.monthProblemTotal?'down':'up'">{{ getPercentageChange(item.beforeMonthProblemTotal,item.monthProblemTotal) }}%</span>
          <img v-if="item.beforeMonthProblemTotal>item.monthProblemTotal" src="../../../assets/imgs/arrow(1).svg"/>
          <img v-if="item.beforeMonthProblemTotal<item.monthProblemTotal" src="../../../assets/imgs/arrow(2).svg" style="transform: rotate(180deg);"/>
        </div>
        <div class="rec_item_wrapper" :style="{height:item.beforeMonthProblemTotal*(280/complainMaxNum)>item.monthProblemTotal*(280/complainMaxNum)?item.beforeMonthProblemTotal*(280/complainMaxNum)+'px':item.monthProblemTotal*(280/complainMaxNum)+'px'}">
          <div class="beforeMonthProblemTotal bar" :class="item.beforeMonthProblemTotal*(280/complainMaxNum) > 2 ? 'radius':''" :style="{ height: item.beforeMonthProblemTotal*(280/complainMaxNum)+'px' }"></div>
          <div class="monthProblemTotal bar" :class="item.monthProblemTotal*(280/complainMaxNum) > 2 ? 'radius':''" :style="{ height: item.monthProblemTotal*(280/complainMaxNum)+'px' }"></div>                
        </div>
        <div class="modle-name">{{ item.modularName }}</div>              
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
      complainMaxStyle:0,
      complainMaxNum:0,//柱状最大值
      // complainList: [],
    }
  },
  props: {
    complainList: {
      type: Array,
      default: () => []
    }
  },
  created() {
    console.log(this.windowWidth)

    this.selWeeklyReport()   
    
  },
  methods: {
    selWeeklyReport() {
      this.complainMaxStyle = 280/5+'px'
      console.log(this.complainMaxStyle)

      //一本周客诉量
      // this.complainList = [{
      //   beforeMonthProblemTotal: 10,
      //   monthProblemTotal: 20,
      //   modularName: '111'
      // },{
      //   beforeMonthProblemTotal: 1000,
      //   monthProblemTotal: 2530,
      //   modularName: '456'
      // },{
      //   beforeMonthProblemTotal: 100,
      //   monthProblemTotal: 20,
      //   modularName: '111'
      // },{
      //   beforeMonthProblemTotal: 1000,
      //   monthProblemTotal: 2530,
      //   modularName: '555'
      // },{
      //   beforeMonthProblemTotal: 1000,
      //   monthProblemTotal: 2530,
      //   modularName: '555'
      // }]
      let maxNum = []
      let length = 0
      debugger
      if(this.complainList.length>10){
        length = 10
      }else{
        length = this.complainList.length
      }
      for (let i = 0; i < length; i++) {
        maxNum.push(this.complainList[i].monthProblemTotal)
        maxNum.push(this.complainList[i].beforeMonthProblemTotal)
      }

      if( 0 < Math.max(...maxNum) && Math.max(...maxNum) <= 50 ) {
        this.complainMaxNum = 50
      //  this.complainMaxNum = parseInt(Math.max(...maxNum)/10+1)%10*10//十位
      }else if( 50 < Math.max(...maxNum) && Math.max(...maxNum) <= 100 ) {
        this.complainMaxNum = 100
      }else if(100 < Math.max(...maxNum) && Math.max(...maxNum) <= 1000) {
        this.complainMaxNum = parseInt(Math.max(...maxNum)/100+1)%10*100//百位
      }else if(1000 < Math.max(...maxNum) && Math.max(...maxNum) <= 10000) {
        this.complainMaxNum = parseInt(Math.max(...maxNum)/1000+1)%10*1000//千位
      }else{
        this.complainMaxNum = Math.max(...maxNum)
      }
    },
    getPercentageChange(oldNumber, newNumber){
      if(oldNumber == 0 || newNumber == 0){
        return 100
      }else{
        //本周比上周情况 =（本周-上周）/上周
        return parseInt(Math.abs( (newNumber - oldNumber) /  oldNumber  )*100)     
      }
      
    },
  }
}
</script>

<style lang='stylus' scoped>
.position-right {
  position: absolute;
  right: 0;
  top: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
}
.body{
  flex: 1;
  display: block;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.header{
  /* width: 375px;
  height: 359px; */
  margin: 0 auto;
  position: relative; 
  background-color: #fff;
}
.header-bg{
  /* height: 309px; */
  background-size: cover;
  position: relative;
}
.time-box{
  color: #fff;
  position: absolute;
}
.top-title{
  position: absolute;
  bottom: 10px;
  left: 22px;
  font-family:"AlibabaPuHuiTiH" ;
  width: 330px;
}
.top-title .title{
  font-family:"AlibabaPuHuiTiM" ;
}
.contant{
  margin: 0 auto;
  text-align: left;
  background: #fff;
}
h1 {
  color: #06102C;
  text-align: left;
  font-size: 28px;
  margin: 0;
  font-family:"AlibabaPuHuiTiH" ;
  font-weight: 100;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0;
}
a {
  color: #42b983;
}
/* 本周较上周变化 */
.bar-chart{
  // width: 600px;
  // margin: 0 auto;
  position: relative;
}
.module-up-down{
  font-size: 10px;
  text-align: center;
  font-family:"AlibabaPuHuiTiH" ;
  font-weight: 100;
}
.down{
  color: #77C3F6 ;
}
.up{
  color: #FFAB7B;
}
.module-up-down img{
  width: 15px;
  height: 15px; 
  display: inherit;
  margin: 0px auto 5px;
}

.bar-left{
  // width: 18px;
  // margin-right: 11px;
  // display: inline-block;
  // top: 28px;
  // position: relative;

  width: 100%;
  // margin-right: 11px;
  display: inline-block;
  // position: absolute;
}
.bar-left-txt {
  background: #1f2025;
  top: 9px;
  position: relative;
  display: inline-block;
  width: 30px;
  text-align: right;
  padding-right: 20px;
}
.bar-right{
  // display: inline-block;
  padding-left: 41px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  // align-items: end;
  bottom: 26px;
  vertical-align: bottom;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  align-items: flex-end;
  -webkit-align-items: flex-end;
}
.bar-left div{
  // display:inline-block;
  // // width: 18px;
  // height: 23px;
  // line-height: 21px;
  // font-size: 12px;
  // color: #FFFFFF;
  // text-align: center;
  // float: left;



  line-height: 92px;
  font-size: 12px;
  color: #fff;
  text-align: left;
  /* float: left; */
  border-bottom: 1px solid #e2e2e21a;
  // border-bottom: 1px solid #e2e2e266;
  position: relative;
  top: -19px;
}
.module{
  display: inline-block;
  /* position: relative; */
  width: 30px;
  // margin-right: 10px;
}
.rec_item_wrapper{
  position: relative;
  width: 20px;
  height: 280px;
}
.rec_item_wrapper .bar:last-child{
  left:15px
}
.bar{
  height: 0px;
  width: 15px;
  position: absolute;
  bottom: 0;
  display: inline-block;
  transition: height 1s ease-out;  
}
.radius{
  border-radius: 2px 2px 0px 0px;
}
.beforeMonthProblemTotal{
  background: #4393FF; 
}
.monthProblemTotal{
 background: #35D0C0;
}
.modle-name{
  width: 52px;
  color: #FFF;
  line-height: 14px;
  font-size: 10px;
  display: inline-flex;
  height: 28px;
  position absolute
  margin-top: 7px;
  white-space: break-spaces;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
}
.mark{
  display: inline-block;
  color: #FFF;
  font-size: 16px;
  position: relative;
  margin-right 42px
}
.up-down{
  // width: 32px;
  // position: absolute;
  // left: 38px;
  // top: 0px;
  // height: 16px;
  // line-height: 17px;
}
.up-down img{
  width: 15px;
  height: 15px;
  margin-right: 2px;
}
.color-block{
  width:12px;
  height: 12px;
  display: inline-block;
  // position: absolute;
  // top: 2px;
  margin-left: 12px;
}
/* 问题排行 */
.problemRanking li{
 height: 14px;
 line-height: 14px;
 font-size: 12px;
 margin: 0;
 float: left;
}
.problem-box{
  height: 14px;
  margin-bottom: 12px;
}
.problem-box ul {
  padding:0;
  margin:0;
  height: 14px;
}
.bgcolor{
  margin-left: 10px !important;
  width: 260px;
  position: relative;
  background: #F1F5F3;
  border-radius: 2px;
}
.bgcolor .total{
  background-color: #688CFD;
  height: 14px;
  display: inline-block;
  border-radius: 2px;
}
.total{
  max-width: 232px;
}
.total-txt{
  height: 14px;
  display: inline-block;
  position: absolute;
  right: 6px;
}
.title{
  font-size: 18px;
  display: block;
  height: 25px;
  line-height: 25px;
  padding-left:2px
}

/* 产品处理情况 */
.product{
  /* width: 375px; */
  margin: 0 auto;
  background: #fff;
}
.product-body{
  padding: 0 22px;
  box-sizing: border-box;
  background: #F6F9F8;
  /* box-shadow: 1px 1px 6px 0px rgba(207,211,215,0.6); */
  border-radius: 0px 48px 0px 0px;
}
.product-body h1,.it-body h1{
 padding-top: 32px;
}
.product-rate{
  font-size: 14px;
  color: #141823;
  line-height: 25px;
  margin-top:10px;
}
.product-rate > div ul,.it-rate > div ul{
  width: 161px;
  display: inline-block;
}
.product-rate span{
  font-size: 18px;
  color: #00AB54;
  display: inline-block;
  padding:0 5px;
  font-weight: bold;
  font-family:"AlibabaPuHuiTiH" ;
  font-weight: bold;
}

.funnel div{
  text-align: center;
  color: #282C37;
  font-size: 12px;
  position: absolute;
  width: 100%;
}
.funnel span{
  font-weight: bold;
}
.funnel-1{
  top: 64px;
}
.funnel-2{
  top: 138px;
}
.funnel-3{
  top: 181px;
}
.funnel-4{
  top: 221px;
}
.funnel-5{
  top: 258px;
}
.product-body .personnel{
  padding-bottom: 42px;
  box-sizing: border-box;
}
.personnel > div{
  margin-bottom: 14px;
}
.personnel > div:last-child{
  margin-bottom: 0;
}
.personnel-box{
  height: 122px;
  background: #E6f9f3;
  border-radius: 12px;
  padding: 12px 10px 20px 10px;
  box-sizing: border-box;
  width: 330px;
  margin: 0 auto;
  margin-bottom: 14px;
}
.personnel .personnel-box:last-child{
  margin-bottom:0
}
.personnel-box li{
  display: block;
}
.it .personnel-box{
  background: #eff8ff;
}
.avatar-box{
  display: inline-block;
  width: 38px;
  height: 38px;
  text-align: center;
  vertical-align: middle;
  position: relative;
}
.avatar-bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 38px;
  z-index: 2;
}
.avatar{
  border-radius: 60px;
  width: 34px;
  height: 34px;
  position: absolute;
  left: 2px;
  top: 2px;
  z-index: 1;
}
.avatar-name{
  font-size: 16px;
  color: #141823;
  margin-left:8px;
  font-weight: bold;
}
.modular{
  margin-top:8px;
  font-size: 16px;
  color: #59627C;
}

.modular span{
  font-weight: bold;
  padding:0 3px;
  color: #000000;
}
/* 研发处理情况 */
.it{
  /* width: 375px; */
  margin: 0 auto;
  background: #F6F9F8;
}
.it-body{
  padding: 0 22px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 48px 0px 0px 0px;
}

.it-rate{
  font-size: 14px;
  color: #141823;
  line-height: 25px;
  margin-top: 10px;
}
.it-rate span{
  font-size: 18px;
  color: #0E65DF;
  display: inline-block;
  padding:0 5px;
  font-weight: bold;
  font-weight: bold;
}

.foot{
  /* width: 375px; */
  margin: 0 auto;
  background: #fff;
  padding-top: 50px;
  position:relative;
}
.foot img{
  width: 100%;
  border-radius: 24px 24px 0px 0px;
  position: absolute;
  bottom: 0;
}
 
</style>
