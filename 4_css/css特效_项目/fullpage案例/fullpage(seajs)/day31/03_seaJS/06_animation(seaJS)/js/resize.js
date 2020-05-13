define(function (require,exports,module) {
    var  frame = require("./frame.js");
    window.onresize=function () {
        var items = document.querySelectorAll("#wrap .content .list > .item ")
        var content = document.querySelector("#wrap .content")
        var arrow = document.querySelector("#wrap .head .head-main .arrow");
        var ups = document.querySelectorAll("#wrap .head .head-main .nav > li .up");
        var list = document.querySelector("#wrap .content .list");


        for(var i=0;i<items.length;i++){
            items[i].style.height = content.offsetHeight  +"px";
        }

        arrow.style.left = ups[frame.now].parentNode.offsetLeft + ups[frame.now].offsetWidth/2 - arrow.offsetWidth/2 + "px";
        list.style.top= -frame.now*content.offsetHeight  +"px";
    }
})