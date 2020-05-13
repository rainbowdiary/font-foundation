export function apply(fn, obj, args) {
  if (obj === null || obj === undefined) obj = window
  // 调用函数
  // this(...args)
  // obj需要一个函数tempFn,值为fn ; 变成obj.fn()
  obj.tempFn = fn;
  // 调用函数
  const result = obj.tempFn(...args)
  // 删除obj的tempFn属性
  delete obj.tempFn
  
  // 需要返回值
  return result
}