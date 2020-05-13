/*

  promise.resolve()花费了 3 个 microtick

  核心原因是第一次 new Promise 的时候，
  他接着入栈了一个 undefined value，
  导致需要多执行一次的 undefined 的 then 回调。  
  isolate->factory()->undefined_value(),

分析:
执行 return Promise.resolve() ，
创建一个 Promise 实例，执行 resolve ，此时将该 Promise 的 resolve 的 value（这里是undefined） 进入微任务队列，将该 Promise 的状态扭转为 resolve。然后接着执行了之前注册好的 "外部第二个then" ,然后注册 “外部第三个then” ，接着执行 “内部第一个then” 的 return 的 resolve 的这个 undefined value 的 Promise，执行完成之后，然后注册下一个then ,但是没有下一个 then 了，执行完成，整个 return 任务完成，本次同步任务也执行完成，接着执行注册的 “外部第三个then” ，执行完成之后，注册 “外部第四个then”，此时 ”内部第一个then“ 执行完成，注册 ”内部第二个then”，最后执行完“外部第四个then”，再执行 刚刚注册的“内部第二个then”.

作者：深山蚂蚁
链接：https://juejin.im/post/5dc028dcf265da4d4b5fe94f
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/  
void Promise::Resolver::Resolve(Handle<Value> value) {
  i::Handle<i::JSObject> promise = Utils::OpenHandle(this);
  i::Isolate* isolate = promise->GetIsolate();
  LOG_API(isolate, "Promise::Resolver::Resolve");
  ENTER_V8(isolate);
  EXCEPTION_PREAMBLE(isolate);
  i::Handle<i::Object> argv[] = { promise, Utils::OpenHandle(*value) };
  has_pending_exception = i::Execution::Call(
      isolate,
      isolate->promise_resolve(),
      isolate->factory()->undefined_value(),
      arraysize(argv), argv,
      false).is_null();
  EXCEPTION_BAILOUT_CHECK(isolate, /* void */ ;);
}
PromiseResolve = function PromiseResolve(promise, x) {
    PromiseDone(promise, +1, x, promiseOnResolve)
}
function PromiseDone(promise, status, value, promiseQueue) {
    if (GET_PRIVATE(promise, promiseStatus) === 0) {
        PromiseEnqueue(value, GET_PRIVATE(promise, promiseQueue), status);
        PromiseSet(promise, status, value);
    }
}