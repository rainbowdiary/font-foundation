define(function(require, exports, module) {
    //模块内的路径
    var laoliu = require("./laoliu")
    function a(){
        laoliu.publicFn()
        console.log("damu-a")
    }
    // 对外提供接口
    module.exports = {
        a:a
    }
})