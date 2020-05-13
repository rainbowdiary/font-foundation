(function () {
    window.onload=function () {
        var liNodes = document.querySelectorAll("#wrap .head .head-main .nav > li");
        var downs = document.querySelectorAll("#wrap .head .head-main .nav > li .down");
        var ups = document.querySelectorAll("#wrap .head .head-main .nav > li .up");
        var arrow = document.querySelector("#wrap .head .head-main .arrow");
        arrow.style.left = ups[0].parentNode.offsetLeft + ups[0].offsetWidth/2 - arrow.offsetWidth/2 + "px";
        for(var i=0;i<liNodes.length;i++){
            (function (i) {
                liNodes[i].onclick=function () {
                    for(var j=0;j<downs.length;j++){
                        // downs[j].style.width="0px";
                        downs[j].style.width="";
                    }
                    downs[i].style.width = "100%";
                    arrow.style.left = ups[i].parentNode.offsetLeft + ups[i].offsetWidth/2 - arrow.offsetWidth/2 + "px";
                }
            })(i)
        }
    }
})()