// export function commonFetch (config) {
//   return this.fetch(config)
// }


export function boardBug (params) {
  return this.fetch({
    method: 'get',
    url: 'nbpAdmin/problemRanking/boardBug',
    params
  })
}
export function boardNeed (params) {
  return this.fetch({
    method: 'get',
    url: 'nbpAdmin/problemRanking/boardNeed',
    params
  })
}
export function selMonthRanking (params) {
  return this.fetch({
    method: 'get',
    url: 'nbpAdmin/problemRanking/selMonthRanking',
    params
  })
}
export function complaintComparison (params) {
  return this.fetch({
    method: 'get',
    url: 'nbpAdmin/problemRanking/complaintComparison',
    params
  })
}