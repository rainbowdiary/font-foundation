define("./js/index",["./damu","./laofu"],(require,exports,module)=>{
    //  模块内的路径  ./ 参照于当前模块!!!!
    var damu = require("./damu")
    var laofu = require("./laofu")
    module.exports={
        damu,
        laofu
    }
})

define("./js/damu",["./laoliu"],function(require, exports, module) {
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
define("./js/laofu",["./laoliu"],function(require, exports, module) {
    var laoliu = require("./laoliu")
    function a(){
        laoliu.publicFn()
        console.log("laofu-a")
    }
    // 对外提供接口
    module.exports = {
        a:a
    }
})
define("./js/laoliu",(require, exports, module)=>{
    module.exports = {
        publicFn(){
            console.log("公共的老刘")
        }
    }
})