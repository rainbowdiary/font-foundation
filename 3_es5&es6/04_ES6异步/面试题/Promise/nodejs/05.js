process.nextTick(() => {
  console.log('nextTick-1')
  process.nextTick(() => { //nextTick会阻塞队列导致有风险
    for (var i = 0; i < 100; i++) {
      console.log('nextTick-2')
    }
  })
})

setImmediate(() => {
  console.log("setImmediate-1")
})
 /*
  同步代码执行完毕 -> 查看是否有nextTick -> 执行 nextTick，清空nextTick队列 -> 进入下一个阶段
--'nextTick-1'
--'nextTick-2'*100
-"setImmediate-1"

*/

// nextTick-1 nextTick-2*100 setImmediate-1

