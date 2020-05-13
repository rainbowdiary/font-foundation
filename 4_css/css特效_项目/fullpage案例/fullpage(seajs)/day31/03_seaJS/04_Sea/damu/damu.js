// 所有模块都通过 define 来定义

// 1. 怎么使用seajs定义模块
//         通过define()函数
// 2. 模块怎么往外暴露接口
//         通过define函数的第三个参数的exports属性往外暴露接口
// 3. 外部逻辑怎么获取对应模块的接口
//         通过 seajs.use("模块的路径",function (对应模块的module.exports属性) {
//
//         })
// 4. 依赖管理!!!!

define(function(require, exports, module) {
    //模块中的路径都是参照于当前模块的!!!!
    var common  = require("../common/common.js")  // require函数的返回值是指定模块的module.exports
    var common2  = require("../common2/common2.js")  // require函数的返回值是指定模块的module.exports

    function a() {
        common.common();
        common2.common2();
        console.log("a from damu")
    }

    function b() {
        console.log("b from damu")
    }

    function c() {
        console.log("c from damu")
    }


    module.exports={
        a:a,
        b:b,
        c:c
    }
});


