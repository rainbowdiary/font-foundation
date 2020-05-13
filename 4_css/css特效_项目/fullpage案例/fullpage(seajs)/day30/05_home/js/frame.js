(function (w) {
    window.addEventListener("load",fn);
    function fn() {
        var dir=""; //定义鼠标滚轮的方向
        var frame={now:0}; //定义当前滑到了哪一屏
        w.frame = frame;
        var timer =0;//定时器开关标识
        var liNodes = document.querySelectorAll("#wrap .head .head-main .nav > li");
        var downs = document.querySelectorAll("#wrap .head .head-main .nav > li .down");
        var ups = document.querySelectorAll("#wrap .head .head-main .nav > li .up");
        var arrow = document.querySelector("#wrap .head .head-main .arrow");

        var items = document.querySelectorAll("#wrap .content .list > .item ")
        var content = document.querySelector("#wrap .content")
        var list = document.querySelector("#wrap .content .list")

        var points = document.querySelectorAll("#wrap .content .points > li")

        //头部
        arrow.style.left = ups[0].parentNode.offsetLeft + ups[0].offsetWidth/2 - arrow.offsetWidth/2 + "px";
        for(var i=0;i<liNodes.length;i++){
            liNodes[i].index=i;
            liNodes[i].onclick=function () {
                move(this.index);
            }
        }

        //content 尺寸
        for(var i=0;i<items.length;i++){
            items[i].style.height = content.offsetHeight  +"px";
        }
        //鼠标滚轮的滑屏  content
         if(content.addEventListener){
            content.addEventListener("DOMMouseScroll",function (ev) {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn(ev);
                },200)
            })
         }
         content.onmousewheel=function (ev) {
             clearTimeout(timer);
             timer = setTimeout(function () {
                 fn(ev);
             },200)
         };
         function fn(ev) {
             ev = ev||event;
             if(ev.detail){
                dir = ev.detail<0?"up":"down";
             }else if (ev.wheelDelta){
                 dir = ev.wheelDelta>0?"up":"down";
             }

             switch (dir){
                 case "up":
                     if(frame.now>0){
                         frame.now--;
                     }
                     move(frame.now);
                     break;
                 case "down":
                     if(frame.now<(liNodes.length-1)){
                         frame.now++;
                     }
                     move(frame.now);
                     break;
             }

             if(ev.cancelable){
                 ev.preventDefault();
             }
             return false;
         }

        //小圆点
        for(var i=0;i<points.length;i++){
            (function (i) {
                points[i].onclick=function () {
                    move(i);
                }
            })(i)
        }

        //切屏时的核心函数
        move(0);
        function move(index) {
            frame.now = index; //同步全局的now
            //头部行为
            for(var j=0;j<downs.length;j++){
                // downs[j].style.width="0px";
                downs[j].style.width="";
            }
            downs[index].style.width = "100%";
            //小箭头
            arrow.style.left = ups[index].parentNode.offsetLeft + ups[index].offsetWidth/2 - arrow.offsetWidth/2 + "px";

            //主体内容
            list.style.top= -index*content.offsetHeight  +"px";

            //小圆点
            for(var j=0;j<points.length;j++){
                points[j].classList.remove("active")
            }
            points[index].classList.add("active")
        }
    }

})(window)