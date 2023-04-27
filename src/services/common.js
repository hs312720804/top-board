import { Message } from 'element-ui'
class BaseListFetchParamsError extends Error {
  constructor (msg) {
    super(msg)
    this.code = -1
    this.name = 'BaseListFetchParamsError'
  }
}

export function baseListFetch ({ apiJson = {}, apiKey, data, params }) {
  const apis = apiJson[apiKey]
  if (!apis) {
    return Promise.reject(new BaseListFetchParamsError(`缺少 ${apiKey} 服务，请在管理后台配置对应的服务`))
  }
  const [url, method] = apis
  return this.fetch({
    url, method, data, params
  })
}

export function commonFetch (config) {
  return this.fetch(config)
}

/**
 * 当前方法必须通过 Vue 原型链上 $service 调用（即在vue组件中，使用 this.$service.genApiService；或直接 Vue.prototype.$service.genApiService）
 * 不要直接 import 该方法，因为该方法会调用 Vue 原型链上 $service 中的 commonFetch 方法（即 this.commonFetch）
 * @param {*} apiJson
 * @param {*} fetchConfig
 * @returns
 */
export function genApiService (apiJson = {}, fetchConfig = {}) {
  const serviceMap = {}
  Object.keys(apiJson).forEach(key => {
    const [url, method] = apiJson[key]
    // 不要直接使用 this.fetch ,因为 this.fetch 没有经过 wrapService 处理，无法进行统一提示
    serviceMap[key] = ({ data, params, ...config } = {}, successMsg) => this.commonFetch({ ...fetchConfig, ...config, url, method, data, params }, successMsg).then(({ data }) => data)
  })
  return apiKey => {
    const service = serviceMap[apiKey]
    if (!service) {
      const errMsg = `缺少 ${apiKey} 服务，请在管理后台配置对应的服务`
      Message.error(errMsg)
      return () => Promise.reject(new BaseListFetchParamsError(errMsg))
    }
    return service
  }
}
