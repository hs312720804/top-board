import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/global.styl'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import lodash from 'lodash'
import './services'
import cUtils from '@ccprivate/utils/dist/ccUtil.cjs'
import '@/static/font.styl'

Vue.prototype.$cUtils = cUtils
Vue.prototype.$echarts = echarts
Vue.prototype.$lodash = lodash
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
