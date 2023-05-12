/**
 * Created Date: Thursday, December 16th 2021, 7:29:14 pm
 * 自定义 fetch 方法
 * 注：不要在当前方法中使用 this ，因为 qiankun 子应用启动时会把当前方法传递给子应用的 mainFetch
 * Copyright (c) 2021 Your Company
 */
import Vue from 'vue'
import qs from 'qs'
import axios from 'axios'
import NProgress from 'nprogress'
import { Loading, Message } from 'element-ui'
import 'nprogress/nprogress.css'
let loadingInstance
let logOutNum = 0

const instance = axios.create({
  timeout: 50000
})

export default function fetch ({
  method = 'get',
  url,
  data,
  params,
  options = {},
  headers = {},
  isJSON = true,
  loadingShow = false,
  nprogressShow = true,
  isFile = false,
  successCodes = []
}) {
  if (nprogressShow) {
    NProgress.start()
  }
  if (!loadingInstance && loadingShow) {
    loadingInstance = Loading.service({ target: document.querySelector('.el-main') })
  }
  let pushData = null
  if (isJSON || data instanceof FormData) {
    pushData = data
  } else {
    if (typeof data === 'string') {
      pushData = data
    } else {
      pushData = qs.stringify(data)
    }
  }

  const option = {
    method,
    url: `topBoard-api/${url}`,
    data: pushData,
    params,
    ...options
  }
  option.headers = {
    ...headers
  }
  return instance(option)
    .then(function (res) {
      if (isFile) {
        return res
      }
      const { data } = res
      const isSuccess = [1000, 200].concat(successCodes).findIndex(code => String(code) === String(data.code)) > -1
      if (data.success || isSuccess) {
        // return data.data || data
        return data
      } else {
        // eslint-disable-next-line no-throw-literal
        throw {
          code: data.code,
          message: data.msg
        }
      }
    })
    .catch(e => {
      if (e.response) {
        const { data, status, statusText } = e.response
        e = {
          code: String(data.code || status),
          message: data.message || data.msg || statusText || '请求错误'
        }
      } else if (e instanceof Error) {
        e = {
          code: e.name,
          message: e
        }
      }
      // 登录过期处理
      if (e.code === '1998' || e.code === '2005') {
        if (logOutNum > 0) return
        logOutNum++
        const outTimes = 1
        Message({
          type: 'warning',
          message: `登录超时，${outTimes}秒后请重新登陆。`
        })
        setTimeout(function () {
          logOutNum = 0
          option.headers = {
            Authorization: ''
          }
          Vue.prototype.$ssoLogout(undefined, null)
          throw e
        }, outTimes * 1000)
      } else {
        throw e
      }
    })
    .finally(() => {
      if (nprogressShow) {
        NProgress.done()
      }
      if (loadingInstance && loadingShow) {
        loadingInstance.close()
      }
      loadingInstance = ''
    })
}
