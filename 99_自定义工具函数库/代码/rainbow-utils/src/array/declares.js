export function map(array, cb) {
  // 遍历数组每一个元素，并调用函数得到一个结果数据，添加到新数组arr
  let arr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = cb(element, index)
    arr.push(result)
  }
  return arr
}

export function reduce(array, cb, initValue) {
  let total = initValue
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    total = cb(total, element, index)
  }
  return total
}

export function filter(array, cb) {
  let arr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = cb(element, index)
    // arr.push(result)
    result ? arr.push(element) : ""
  }
  return arr
}
// 遍历每一个的元素,找到满足条件的第一个元素，为true返回当前元素，全部为false，返回undefined
export function find(array, cb) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let result = cb(element, index)
    if (result) {
      return element
    }
  }
  return undefined
}

export function findIndex(array, cb) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let result = cb(element, index)
    if (result) {
      return index
    }
  }
  return -1
}
export function every(array, cb) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let result = cb(element, index)
    if (!result) {
      return false
    }
  }
  return true
}

export function some(array, cb) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = cb(element, index)
    if (result) {
      return true
    }
  }
  return false
}