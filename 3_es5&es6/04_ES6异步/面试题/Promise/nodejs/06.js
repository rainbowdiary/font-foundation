setImmediate(() => {
  console.log("setImmediate-2")
  setImmediate(() => {  //没有阻塞的效果，塞入队列是往前塞入队列，
    for (var i = 0; i < 100; i++) {
      console.log('nextTick')
    }
  })
})

setImmediate(() => {  //往后清空队列
  console.log("setImmediate-3")
})

/*
 同步代码 -> poll -> check -> 清空check阶段任务
 -- "setImmediate-2"
 --"setImmediate-3"
 --'nextTick'*100
 */