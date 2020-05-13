# ES6学习资料
你不知道的JS most start
You-Dont-Know-JS 上卷
阮一峰 es6入门

# ES6/7核心:
    一.异步的最佳实践
    二.模块化
    三.ES6新增语法和API


## 三.ES6新增语法和API
map:不满足要求的进行转换成想要的数组
...运算符:平铺里面的内容
slice伪数组转真数组
splice:增删改

### 箭头函数this基于作用域
### 新增API
字符串新增:includes startsWidth endsWidth padStart padEnd 
对象新增:is assign keys values entries
数组新增:from(伪数组->真数组) fill entries (of keys values是鸡肋)

伪数组:有length,有下标的对象
伪数组->真数组 Array.prototype.slice.call(ArrayLike)

### 严格模式
arguments.callee :保存原函数;用于匿名函数自调
### class
    class是实例化对象

## 四.模块化&NPM
node 
seajs 玉帛的代码
requirejs

### ES6模块化:
静态化语法:暴露的都是代码块而不是对象;webpack
动态:seajs,commonjs

export {}:是大括号,是代码块,不是对象
export 后面跟代码块
    命名冲突:  别名/整体加载* as
import 命名空间 from 路径
export default 对象: 对象赋值给default变量,传什么default变量接什么.
### npm:
script:
    npm run 命令 : 实现npx包执行器规则,去node_modules下面的bin目录找命令
版本: x.y.z (语义化版本号)
    z: 改bug
    y: 功能改变
    x: 使用习惯改变
### babel
1)语法
.babelrc 插件preset-env
bowserslist 查看可以兼容到哪个浏览器的哪个版本
2)API
import @babel/polyfill
tree shaking


## json 
    // json 转 对象
    // 1.import 导入json文件:自动转换为js对象
    // 2.JSON.parse()

30-secibds-of-code
    css
    react 