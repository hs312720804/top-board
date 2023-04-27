export const getYMD = () => {  
  let myDate = new Date()
  let myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
  let myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
  let myToday = myDate.getDate(); //获取当前日(1-31)
  myMonth = myMonth > 9 ? myMonth : '0' + myMonth
  myToday = myToday > 9 ? myToday : '0' + myToday
  let nowDate = myYear +  myMonth +  myToday
  return nowDate
}