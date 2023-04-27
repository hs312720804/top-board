<template>
<div class="progress-bar">
  <div class="progress-bar__outer">

    <div 
      class="progress-bar__inner" :style="{width: value + '%'}">
      <div 
        class="progress-bar__innerText" 
      >
        {{ value }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { number } from 'echarts';

 export default {
   components: {},
   props: {
    value: {
      type: number,
      default: 0
    }
   },
   data () {
     return {
      // value: 88
     }
   },
   created() {

   },
   methods: {

   }
 }
</script>

<style lang='stylus' scoped>
.progress-bar {
  padding-right: 50px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  margin-right: -55px;
  box-sizing: border-box;
}
.progress-bar__outer {
  height: 23px;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
  background-color: #4393ff33
}
.progress-bar__inner {
  position: absolute;
  left: 0;
  top: 0;
  // display inline-block
  height: 100%;
  background-color: #409eff;
  text-align: right;
  line-height: 1;
  white-space: nowrap;
  transition: width .6s ease;
}
.progress-bar__innerText {
  font-size: 16px;
  font-weight: 600;
  color: #ffffffe6
  position: absolute;
  left: 100%;
  line-height: 23px;
  padding: 0 14px;
}
</style>
