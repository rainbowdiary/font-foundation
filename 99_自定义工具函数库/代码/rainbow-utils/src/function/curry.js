/* # 函数柯里化
curry(fn)(arg1)(arg2)(arg3)...

封装思路：
定义
  fn
  curry(fn) 返回一个函数拼接fn的所有参数

使用 addCurry = curry(fn)
     addCurry(1)(2)(3) */




//  add(1)(2)(3)(4) == >10
function fn(...args) {
  return args.reduce((a, b) => a + b)
}

function curry(fn) {
  let arr = []
  return function _c(...newArgs) {
    if (newArgs) {
      arr = [...arr, ...newArgs]
      return _c
    } else { }
    return fn.apply(this, arr)
  }
}

const add = curry(fn)

add(fn)(1)(2)(3)(4)