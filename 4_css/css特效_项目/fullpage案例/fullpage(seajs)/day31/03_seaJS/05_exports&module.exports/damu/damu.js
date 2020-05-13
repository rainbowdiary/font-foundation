define(function(require, exports, module) {

    function a() {
        console.log("a from damu")
    }


    function b() {
        console.log("b from damu")
    }

    function c() {
        console.log("c from damu")
    }


    /*module.exports={
        a:a,
        b:b,
        c:c
    }*/

    //module.exports 本身就是一个对象
    module.exports.a=a;
    module.exports.b=b;
    module.exports.c=c;
});


