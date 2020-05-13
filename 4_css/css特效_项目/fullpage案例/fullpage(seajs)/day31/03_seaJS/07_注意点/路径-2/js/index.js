define(function (require,exports,module) {
    //在模块内部的./可以认为是一个绝对路径!!!  它必定指向当前模块的位置!!
    var a = require("./a/a-1/a-1.js");
    console.log(a);
})



// 此处的./  得看当前js文件在哪边被引入!!!
seajs.use("./js/a.js");