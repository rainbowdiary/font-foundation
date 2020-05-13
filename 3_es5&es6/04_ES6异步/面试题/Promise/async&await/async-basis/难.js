async function testSometing() {
  console.log("执行testSometing");
  return "testSometing";   //，返回的是一个Promise对象要要等它resolve，
}

async function testAsync() {
  console.log("执行testAsync");
  return Promise.resolve("hello async");
}

async function test() {
  console.log("test start...");
  const v1 = await testSometing();
  console.log(v1);
  const v2 = await testAsync();
  console.log(v2);
  console.log(v1, v2);
}

test();

var promise = new Promise((resolve) => { console.log("promise start.."); resolve("promise"); });//3
promise.then((val) => console.log(val));

console.log("test end...")

/*
node执行顺序:
    test start...
    执行testSometing
    promise start..
    test end...
    promise
    testSometing
    执行testAsync
    hello async
    testSometing hello async

浏览器执行顺序:
    test start...
    执行testSometing
    promise start..
    test end...
    testSometing
    执行testAsync
    promise
    hello async
    testSometing hello async
*/