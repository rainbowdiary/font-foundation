// 1. 开始执行
console.log(1)	// 	2. 打印 1
setTimeout(function () {	// 6. 浏览器在 0ms 后，将该函数推入任务队列
  console.log(2)	// 7. 打印 2
  Promise.resolve(1).then(function () {	// 8. 将 resolve(1) 推入任务队列  9. 将 function函数推入任务队列
    console.log('ok')	// 10. 打印 ok
  })
})	// 3.调用 setTimeout 函数，并定义其完成后执行的回调函数
setTimeout(function () {		// 11. 浏览器 0ms 后，将该函数推入任务队列
  console.log(3)	// 12. 打印 3
})  // 4. 调用 setTimeout 函数，并定义其完成后执行的回调函数
// 5. 主线程执行栈清空，开始读取 任务队列 中的任务
// output： 1  2 ok 3