define((require,exports,module)=>{
    var headFn = require("./head.js")
    var navFn = require("./nav.js")
    var swiper = require("./swiper.js")
    var tab = require("./tab.js")
    var touchscroll = require("./touchscroll.js")
    module.exports={
        headFn,
        navFn,
        swiper,
        tab,
        touchscroll
    }
})