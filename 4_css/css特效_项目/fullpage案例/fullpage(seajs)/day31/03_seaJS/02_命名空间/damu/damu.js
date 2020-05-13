function damu() {
    function a() {
        var commonFn = common();
        commonFn.commonFn()
        console.log("a from damu")
    }

    function b() {
        console.log("b from damu")
    }

    function c() {
        console.log("c from damu")
    }

    return {
        a:a,
        b:b,
        c:c
    }
}