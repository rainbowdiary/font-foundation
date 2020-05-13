define(function(require, exports, module) {

    function xxx() {
        console.log("xxx")
    }

    function common() {
        xxx();
        console.log("common")
    }

    module.exports={
        common:common
    }
});