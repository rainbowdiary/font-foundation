import {call} from "./call"
export function bind(fn, obj, ...args) {
  //返回一个新函数，新函数调用，原函数才会被调用
  return (...args2) => {
    // 调用原函数并制定this值
    const result = call(fn, obj, ...args, ...args2)
    return result
  }
}