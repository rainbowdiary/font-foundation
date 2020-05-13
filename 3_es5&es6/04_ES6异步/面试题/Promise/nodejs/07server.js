const http = require("http");
const config = require("./config")
const server = http.createServer();

let count = 0;

server.on("request", (req, res) => {
  res.end(`request is comming ${count++}`)
})

server.listen(config.port, config.host, () => {
  console.log(`serve is listening on http://${config.host}:${config.port}`)
})

/*
server.listen先执行 ；server.on里面的回调当用户请求过来了，才会将回调塞到poll队列中；
请求一次塞入一次

process.nextTick会阻塞，所以尽量不适用；如果nextTick内的回调逻辑写的很复杂，会导致请求的I/O回调一直无法执行；
所以process.nextTick使用有风险，
所以使用setImmediate();只有高版本的node才有
*/