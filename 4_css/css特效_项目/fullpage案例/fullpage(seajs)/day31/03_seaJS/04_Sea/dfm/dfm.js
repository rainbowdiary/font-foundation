(function (w) {
    w.dfm={};

    function a() {
        console.log("a from ss")
    }

    function b() {
        console.log("b from ss")
    }

    function c() {
        console.log("c from ss")
    }

    w.dfm.a = a;
    w.dfm.b = b;
    w.dfm.c = c;

})(window)
