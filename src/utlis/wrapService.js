import { Notification } from 'element-ui'
/**
 *
 * @param {Object} service 传入的服务方法集对象
 * @param {Array} noNoteArray 不需要async的方法key数组
 */
function wrapService (service, noNoteArray) {
  const $service = {
    service
  }
  Object.keys(service).forEach((key) => {
    if (typeof service[key] === 'function' && noNoteArray.indexOf(key) < 0) {
      $service[key] = async (args, message) => {
        return service[key](args)
          .then((result) => {
            if (message) {
              Notification({
                title: '操作成功',
                type: 'success',
                message
              })
            }
            return result
          })
          .catch((error) => {
            Notification({
              title: `操作失败（Code = ${error.code}）`,
              type: 'error',
              message: error.message
            })
            return Promise.reject(error)
          })
      }
    } else {
      $service[key] = service[key]
    }
  })
  return $service
}

export default wrapService
