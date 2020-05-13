# this指向：
1. fn()  this指向window。  在严格模式下，指向undefined
2. obj1.obj2.fn()  this指向obj2
3. fn.call/apply/bind(obj) this指向obj
4. new Fn() this指向产生的实例对象
5. 回调函数中this:
定时器回调函数 window
dom事件回调函数 被绑定事件的dom元素
6. 箭头函数的this：
没有自己的this和arguments。 离它最近的一层包裹它函数（外层函数）的this和arguments.