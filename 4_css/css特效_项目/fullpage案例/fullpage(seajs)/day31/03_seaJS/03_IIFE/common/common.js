(function (w) {
    w.common={};

    function common() {
        console.log("commonFn")
    }

    w.common.common = common;

})(window)