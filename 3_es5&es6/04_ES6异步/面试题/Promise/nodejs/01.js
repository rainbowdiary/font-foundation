console.log('start')
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function () {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function () {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function () {
  console.log('promise3')
})
console.log('end')

/*
浏览器: start end promise3 timer1  promise1 timer2  promise2
机制:
  同步->微任务->宏任务
*/

/*
 Node :  start end
    node中任何微任务都在宏队列之间
    两个宏队列进行切换的时候会去检查是否有微队列
--start
--end
  宏队列(timers阶段) : timer1 timer2
  微队列: 'promise3' 'promise1' 'promise2'

  同步任务执行完毕                               ??????? 同步任务执行完毕之后，进入poll阶段，poll阶段没有任务，网上进入timers阶段????为什么是跳着进入有任务的队列
  进入poll阶段
  timers有两个任务
  所以 poll -> timers队列  （两个宏队列切换，检查微队列并执行微任务）
--'promise3'
   进入timers阶段，执行'timer1'
--'timer1'
--'timer2'
  timers宏队列宏任务被清空，准备跳到下个阶段      ?????? 是跳到哪个阶段???? I/O callbacks  跳阶段是跳入下一个阶段还是直接跳到有任务的阶段
  检查微任务
--'promise1'
  跳到I/O callbacks阶段，没有队列，继续下个队列
  检查微任务
--'promise2'
  检查check是否有回调，发现没有setImmediate
*/
