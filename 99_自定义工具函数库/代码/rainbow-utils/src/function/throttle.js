import call from "./call"
export function throttle(cb, delay) { //只是节流函数的工具函数
  let pre = 0
  return function (event) {  //返回一个事件回调函数，也是节流函数
    let current = Date.now();
    if (current - pre > delay) {
      cb.call(this, event)  // 调用事件函数,且原this不能改变
      pre = current
    }
  }
}