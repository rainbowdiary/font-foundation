const fs = require('fs')
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0)
  setImmediate(() => {
    console.log('immediate')
  });
})

/*
    在上述代码中，setImmediate 永远先执行。因为两个代码写在 IO 回调中，
    IO 回调是在 poll 阶段执行，当回调执行完毕后队列为空，发现存在 setImmediate 回调，
    所以就直接跳转到 check 阶段去执行回调了。

   1. poll队列有I/O回调: 执行完队列任务，进入check阶段，并往下轮训
            poll -> check -> 往下依次轮训

*/
