(function (w) {
    w.damu={};

    function a() {
        common.common();
        console.log("a from damu")
    }

    function b() {
        console.log("b from damu")
    }

    function c() {
        console.log("c from damu")
    }

    w.damu.a=a;
    w.damu.b=b;
    w.damu.c=c;
})(window)
