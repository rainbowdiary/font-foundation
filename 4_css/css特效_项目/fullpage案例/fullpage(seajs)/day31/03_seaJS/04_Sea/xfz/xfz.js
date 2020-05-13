(function (w) {
    w.xfz={};

    function a() {
        console.log("a from lnr")
    }

    function b() {
        console.log("b from lnr")
    }

    function c() {
        console.log("c from lnr")
    }

    w.xfz.a = a;
    w.xfz.b = b;
    w.xfz.c = c;

})(window)
