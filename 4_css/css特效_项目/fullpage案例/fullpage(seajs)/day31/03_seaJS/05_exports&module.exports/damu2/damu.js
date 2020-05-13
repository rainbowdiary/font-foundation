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



    //exports 与 module.exports 指向同一个对象
    exports.a=a;
    exports.b=b;
    exports.c=c;

    /*exports={
        a:a,
        b:b,
        c:c
    }*/
});


