import call from "./call"

export function debounce(cb, delay) {
  return function (event) {
    // if (cb.timeoutId) { //会检查原型链
    if (cb.hasOwnProperty("timeoutId")) { //不会检查原型链
      clearTimeout(cb.timeoutId)
    }
    //启动定时器只是准备处理事件
    cb.timeoutId = setTimeout(() => {    //回调函数的调用才是执行事件
      cb.call(this, event)
      delete cb.timeoutId
    }, delay);
  }
}