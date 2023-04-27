import Vue from 'vue'
import fetch from './fetch'
import wrapService from '@/utlis/wrapService'
import * as common from './common'
import * as data from './data'

const service = {
  app: Vue,
  init (cb) {
    cb()
  },
  fetch,
  ...common,
  ...data
}
export const $service = wrapService(service, ['app', 'init', 'fetch', 'genApiService'])
// 排除 genApiService 是因为该方法不是一个 Promise 方法
Vue.prototype.$service = $service

export default service
