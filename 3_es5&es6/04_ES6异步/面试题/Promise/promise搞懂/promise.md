深度揭秘 Promise 微任务注册和执行过程：https://juejin.im/post/5dc028dcf265da4d4b5fe94f

Promise 执行过程的正确理解姿势：https://juejin.im/post/5dad3405f265da5bb252ff32

这两篇文章，是我们部门的一个技术大牛写的，他面试过无数人。他面试的时候，最喜欢问别人 Promise的话题。

如果你能学好 promise，在这问题上，绝对吊打面试官。

尤其是第一篇文章，作者说他写得非常有底气，值得我们多研究几遍。



# 总结
* promise状态发生改变（即调用resolve），then方法被同步被注册，不是被执行！
* 注册是同步的
* 第一个then的同步代码执行完成之后才会注册第二个then的回调
* 同步代码执行完成之后才会执行微任务
* then方法的注册是同步的
* then 的注册，是指微任务队列的注册

错误处理:
  promise异常trycatch无法捕获