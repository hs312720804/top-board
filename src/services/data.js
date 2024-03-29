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

// 咨询解答
export function selConsultationAnswers (params) {
  return this.fetch({
    method: 'get',
    url: 'nbpAdmin/problemRanking/selConsultationAnswers',
    params
  })
}
// 红榜
export function redRank (params) {
  return this.fetch({
    method: 'get',
    url: 'nbpAdmin/problemRanking/redRank',
    params
  })
}
// 黑榜
export function blackRank (params) {
  return this.fetch({
    method: 'get',
    url: 'nbpAdmin/problemRanking/blackRank',
    params
  })
}
// 异常崩溃
export function collapse (params) {
  return this.fetch({
    method: 'get',
    url: 'nbpAdmin/problemRanking/collapse',
    params
  })
}