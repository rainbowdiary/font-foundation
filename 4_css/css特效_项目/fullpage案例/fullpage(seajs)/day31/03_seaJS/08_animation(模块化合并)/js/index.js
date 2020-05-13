// index 主模块
define("./js/index.min.js",["./resize.js","./frame.js","./about.js","./home.js","./team.js","./open.js"],function (require,exports,module) {
    require("./resize.js");
    require("./frame.js");
    require("./about.js");
    require("./home.js");
    require("./team.js");
    require("./open.js");
})

//about
define("./js/about.js",function (require,exports,module) {
    window.addEventListener("load",fn);
    function fn() {
        var about3 = document.querySelector("#wrap .content .list .item .about .about-3");
        if(about3.getContext){
            var ctx = about3.getContext("2d");
            ctx.save();
            ctx.strokeStyle="#0080B9";
            ctx.beginPath();
            ctx.moveTo(about3.width,0);
            ctx.lineTo(0,about3.height);
            ctx.stroke()
            ctx.restore();
        }


        var uls = document.querySelectorAll("#wrap .content .list .item .about .about-4 > div .about-list")
        for(var i=0;i<uls.length;i++){
            change(uls[i]);
        }

        function change(ul) {
            var w = ul.clientWidth/2;
            var h =ul.clientHeight/2;
            for(var j=0;j<4;j++){
                var liNode = document.createElement("li");
                liNode.style.width =w +"px";
                liNode.style.height =h +"px";

                var img = document.createElement("img");
                img.src = ul.dataset.src;

                // 0.  0     0    left 0  top 0
                // 1.  -1    0    left -w  top 0
                // 2.  0    -1    left 0  top -h
                // 3.  -1   -1    left -w  top -h
                img.style.left = -(j%2)*w+"px";
                img.style.top = -Math.floor((j/2))*h +"px";

                liNode.appendChild(img);
                ul.appendChild(liNode);
            }



            // 0.   left 0  top 0
            // 1.   left -w  top 0
            // 2.   left 0  top -h
            // 3.   left -w  top -h

            // 0.   left 0  top h
            // 1.   left -2w  top 0
            // 2.   left w  top -h
            // 3.   left -w  top -2h

            // var img = document.querySelectorAll("#wrap .content .list .item .about .about-4 > div .about-list li img")
            ul.onmouseenter=function () {
                var img = this.querySelectorAll("li img")
                img.forEach(function (item,index) {
                    switch (index){
                        case 0 :
                            item.style.top = h + "px";
                            break;
                        case 1 :
                            item.style.left = -2*w + "px";
                            break;
                        case 2 :
                            item.style.left = w + "px";
                            break;
                        case 3 :
                            item.style.top = -2*h + "px";
                            break;
                    }
                })
            }
            ul.onmouseleave=function () {
                var img = this.querySelectorAll("li img")
                img.forEach(function (item,index) {
                    switch (index){
                        case 0 :
                            item.style.top = 0 + "px";
                            break;
                        case 1 :
                            item.style.left = -w + "px";
                            break;
                        case 2 :
                            item.style.left = 0 + "px";
                            break;
                        case 3 :
                            item.style.top = -h + "px";
                            break;
                    }
                })
            }
        }
    }
})
//biubiubiu
define("./js/biubiubiu.js",function (require,exports,module) {
    /* var arr =[];
     var timer1 = 8888;
     var timer2 = 8888;*/

    var obj={
        arr:[],
        timer1:0,
        timer2:0
    }

    function qipao (canvasNode) {

        console.log("qipao")
        //考虑变量提升的问题
        /* Array.isArray(biubiubiu.obj.arr)?biubiubiu.obj.arr.length=0:"";
         clearInterval(biubiubiu.timer1)
         clearInterval(biubiubiu.timer2)*/


        if (canvasNode.getContext){
            var ctx =canvasNode.getContext("2d");
            //放随机圆的信息  圆心 半径
            obj.timer1 = setInterval(function () {
                ctx.clearRect(0,0,canvasNode.width,canvasNode.height)
                //动画！！！！
                obj.arr.forEach(function (item,index) {
                    item.deg+=5;
                    item.x = item.startX + Math.sin((item.deg*Math.PI/180)) * item.stepY ;
                    item.y = item.startY - (item.deg*Math.PI/180)* item.stepX;

                    if(item.y <=-item.r){
                        obj.arr.splice(1,index)
                    }
                })


                //画圆
                obj.arr.forEach(function (item) {
                    ctx.save()
                    ctx.fillStyle="rgba("+item.red+","+item.green+","+item.blue+","+item.alp+")";
                    ctx.beginPath()
                    ctx.arc(item.x,item.y,item.r,0,2*Math.PI)
                    ctx.fill()
                    ctx.restore()
                })

            },10)


            //提供随机圆
            obj.timer2 = setInterval(function () {
                var r = Math.round(Math.random())*3+4;
                var x = Math.round(Math.random()*canvasNode.width);
                var y = canvasNode.height - r;
                var red =Math.round(Math.random()*255);
                var green =Math.round(Math.random()*255);
                var blue =Math.round(Math.random()*255);
                var alp =1;

                var deg = 0;
                var startX = x;
                var startY = y;
                var stepX = Math.round(Math.random()*20)+10;
                var stepY = Math.round(Math.random()*50)+10;

                obj.arr.push({
                    x:x,
                    y:y,
                    r:r,
                    red:red,
                    green:green,
                    blue:blue,
                    alp:alp,

                    deg:deg,
                    startX:startX,
                    startY:startY,
                    stepX:stepX,
                    stepY:stepY
                })
            },20)
        }
    }


    // exports.qipao =qipao
    module.exports={
        qipao:qipao,
        obj:obj
    }

})
//frame
define("./js/frame.js",["./outinAn.js"],function (require,exports,module) {
    var outinAn = require("./outinAn.js");


    var frame ={now:0};
    window.addEventListener("load",fn);
    function fn() {
        var dir=""; //定义鼠标滚轮的方向
        /* w.frame={};
         w.frame.now=0; //   没有w.frame={}   w.frame.now=0;*/



        var timer =0;//定时器开关标识
        var liNodes = document.querySelectorAll("#wrap .head .head-main .nav > li");
        var downs = document.querySelectorAll("#wrap .head .head-main .nav > li .down");
        var ups = document.querySelectorAll("#wrap .head .head-main .nav > li .up");
        var arrow = document.querySelector("#wrap .head .head-main .arrow");

        var items = document.querySelectorAll("#wrap .content .list > .item ")
        var content = document.querySelector("#wrap .content")
        var list = document.querySelector("#wrap .content .list")

        var points = document.querySelectorAll("#wrap .content .points > li")


        //content 尺寸
        for(var i=0;i<items.length;i++){
            items[i].style.height = content.offsetHeight  +"px";
        }

        //头部
        arrow.style.left = ups[0].parentNode.offsetLeft + ups[0].offsetWidth/2 - arrow.offsetWidth/2 + "px";
        for(var i=0;i<liNodes.length;i++){
            liNodes[i].index=i;
            liNodes[i].onclick=function () {
                outinAn.oldIndex = frame.now;
                move(this.index);
                // frame.now = this.index;
            }
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
                        outinAn.oldIndex =frame.now;//前一屏
                        frame.now--;
                    }
                    move(frame.now);//当前屏
                    break;
                case "down":
                    if(frame.now<(liNodes.length-1)){
                        outinAn.oldIndex =frame.now;//前一屏
                        frame.now++;
                    }
                    move(frame.now);//当前屏
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
                    outinAn.oldIndex = frame.now;
                    move(i);
                    //frame.now = i;
                }
            })(i)
        }

        //切屏时的核心函数
        //move(0);
        function move(index) {
            console.log(frame.now)
            // console.log(outinAn.arrAn[index])
            // console.log(outinAn.oldIndex,index)
            //前一屏出场
            outinAn.arrAn[outinAn.oldIndex].outAn();
            //当前屏入场
            outinAn.arrAn[index].inAn();


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


    module.exports=frame;
})
//home
define("./js/home.js",function (require,exports,module) {
    var timer=0;
    var autoIndex =0;
    var home = document.querySelector("#wrap .content .list .item .home");
    var points = document.querySelectorAll("#wrap .content .list .item .home .home-2 .item");
    var layers = document.querySelectorAll("#wrap .content .list .item .home .home-1 .item");
    var oldIndex = 0; // 抽象上次点击的是哪个小圆点
    for(var i=0;i<points.length;i++){
        points[i].index = i;
        points[i].onclick=function () {
            clearInterval(timer);
            //点当前小圆点
            if(this.index == oldIndex){
                return;
            }

            layers[0].classList.remove("active");
            //从左往右点
            if(this.index > oldIndex){
                // 左边隐藏   右边显示

                clear(layers[oldIndex]);
                clear(layers[this.index]);

                layers[oldIndex].classList.add("leftHide")
                layers[this.index].classList.add("rightShow")
            }

            //从右往左点
            if(this.index < oldIndex){
                //左边显示   右边隐藏
                clear(layers[oldIndex]);
                clear(layers[this.index]);

                layers[this.index].classList.add("leftShow")
                layers[oldIndex].classList.add("rightHide")
            }

            //小圆点
            points.forEach(function (item) {
                item.classList.remove("active");
            })
            this.classList.add("active");

            oldIndex = this.index;

            // 手动轮播结束时要重新开启自动轮播  手动轮播得自动轮播刚刚手动点到了哪一屏  你要从当前屏开始自动轮播
            autoIndex = this.index;
            //move(); // 点完立马自动轮播
        }
    }


    //move();
    // var timer=0;  //变量提升得坑！！！
    function move() {
        clearInterval(timer); // 开启多个逻辑相同得循环定时器没有任何意义  只会带来bug
        timer = setInterval(function () {
            autoIndex++;

            //无缝
            if (autoIndex === points.length){
                autoIndex =0;
            }
            clear(layers[oldIndex]);
            clear(layers[autoIndex]);

            layers[oldIndex].classList.add("leftHide")
            layers[autoIndex].classList.add("rightShow")

            //小圆点
            points.forEach(function (item) {
                item.classList.remove("active");
            })
            points[autoIndex].classList.add("active");

            //自动轮播的过程中如果突然手动轮播了  首先停下自动轮播 并且得告诉手动轮播自动轮播刚刚播到了哪一屏
            oldIndex = autoIndex;
        },2000)
    }

    home.onmouseenter=function () {
        clearInterval(timer)
    }
    home.onmouseleave=function () {
        move(); // 从区域内移开鼠标时再自动轮播
    }


    function clear(node) {
        node.classList.remove("rightShow");
        node.classList.remove("leftHide");
        node.classList.remove("rightHide");
        node.classList.remove("leftShow");
    }

    exports.move = move;
})
//open
define("./js/open.js",["./outinAn.js","./home.js"],function (require,exports,module) {
    var outinAn = require("./outinAn.js");
    var home =  require("./home.js");

    var mask = document.querySelector("#wrap .mask");
    var up = document.querySelector("#wrap .mask .up");
    var down = document.querySelector("#wrap .mask .down");
    var line = document.querySelector("#wrap .mask .line");
    var flag = 0;

    var arr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];
    arr.forEach(function (item) {
        item = "./img/"+item;
        var img = new Image();
        img.src=item;
        img.onload=function () {
            flag++;
            line.style.width = (flag/arr.length)*100+"%";
        }
    })

    line.addEventListener("transitionend",function () {
        up.style.height = "0px";
        down.style.height = "0px";
        this.remove();
    })

    up.addEventListener("transitionend",function () {
        mask.remove();
        outinAn.arrAn[0].inAn();
        home.move();
    })
})
//outinAn
define("./js/outinAn.js",function (require,exports,module) {
    var home1 = document.querySelector("#wrap .content .list .item .home .home-1");
    var home2 = document.querySelector("#wrap .content .list .item .home .home-2");
    home1.style.transition="1s transform, 1s opacity";
    home2.style.transition="1s transform, 1s opacity";

    var plane1 = document.querySelector("#wrap .content .list .item .course .plane1");
    var plane2 = document.querySelector("#wrap .content .list .item .course .plane2");
    var plane3 = document.querySelector("#wrap .content .list .item .course .plane3");
    plane1.style.transition="1s transform";
    plane2.style.transition="1s transform";
    plane3.style.transition="1s transform";

    var pencel1 = document.querySelector("#wrap .content .list .item .works .pencel1");
    var pencel2 = document.querySelector("#wrap .content .list .item .works .pencel2");
    var pencel3 = document.querySelector("#wrap .content .list .item .works .pencel3");
    pencel1.style.transition="1s transform";
    pencel2.style.transition="1s transform";
    pencel3.style.transition="1s transform";

    var items = document.querySelectorAll("#wrap .content .list .item .about .about-4 > div");
    items[0].style.transition="1s transform";
    items[1].style.transition="1s transform";

    var team1 = document.querySelector("#wrap .content .list .item .team .team-1");
    var team2 = document.querySelector("#wrap .content .list .item .team .team-2");
    team1.style.transition="1s transform";
    team2.style.transition="1s transform";


    var arrAn=[
        {
            outAn:function () {
                home1.style.transform = "translateY(-200px)";
                home2.style.transform = "translateY(200px)";

                home1.style.opacity = 0;
                home2.style.opacity = 0;
            },
            inAn:function () {
                home1.style.transform = "translateY(0px)";
                home2.style.transform = "translateY(0px)";

                home1.style.opacity = 1;
                home2.style.opacity = 1;
            }
        },
        {
            outAn:function () {
                plane1.style.transform="translate(-200px,-200px)";
                plane2.style.transform="translate(-200px,200px)";
                plane3.style.transform="translate(200px,-200px)";
            },
            inAn:function () {
                plane1.style.transform="translate(0px,0px)";
                plane2.style.transform="translate(0px,0px)";
                plane3.style.transform="translate(0px,0px)";
            }
        },
        {
            outAn:function () {
                pencel1.style.transform="translateY(-200px)";
                pencel2.style.transform="translateY(200px)";
                pencel3.style.transform="translateY(200px)";
            },
            inAn:function () {
                pencel1.style.transform="translateY(0px)";
                pencel2.style.transform="translateY(0px)";
                pencel3.style.transform="translateY(0px)";
            }
        },
        {
            outAn:function () {
                items[0].style.transform="rotate(45deg)";
                items[1].style.transform="rotate(-45deg)";
            },
            inAn:function () {
                items[0].style.transform="rotate(0deg)";
                items[1].style.transform="rotate(0deg)";
            }
        },
        {
            outAn:function () {
                team1.style.transform="translateX(-200px)";
                team2.style.transform="translateX(200px)";
            },
            inAn:function () {
                team1.style.transform="translateX(0px)";
                team2.style.transform="translateX(0px)";
            }
        }
    ];

    arrAn.forEach(function (item) {
        item.outAn();
    })

    module.exports={
        oldIndex:0,
        arrAn:arrAn
    }
})
//resize
define("./js/resize.js",["./frame.js"],function (require,exports,module) {
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
//team
define("./js/team.js",["./biubiubiu.js"],function (require,exports,module) {
    var biubiubiu = require("./biubiubiu.js");

    var flag = true;
    var liNodes = document.querySelectorAll("#wrap .content .list .item .team .team-3 li");
    var team3 = document.querySelector("#wrap .content .list .item .team .team-3");
    var canvas = document.querySelector("#wrap .content .list .item .team .team-3 .qipao");
    liNodes.forEach(function (item) {
        item.onmouseenter=function () {
            liNodes.forEach(function (item) {
                item.style.opacity=.5;
            })
            this.style.opacity=1;
            canvas.style.display="block";
            canvas.style.left = this.offsetLeft+"px";
            canvas.style.top = this.offsetTop+"px";
            canvas.width = this.offsetWidth;
            canvas.height = this.offsetHeight*2/3;
            if(flag){
                flag = false;
                biubiubiu.qipao(canvas);
            }
        }

        /*  item.onmouseleave=function () {
              canvas.style.display="none";
              clearInterval(biubiubiu.timer1)
              clearInterval(biubiubiu.timer2)
              biubiubiu.arr.length=0;

              liNodes.forEach(function (item) {
                  item.style.opacity=1;
              })
          }*/
    })

    team3.onmouseleave=function () {
        flag = true;
        canvas.style.display="none";
        clearInterval(biubiubiu.obj.timer1)
        clearInterval(biubiubiu.obj.timer2)
        biubiubiu.obj.arr.length=0;

        liNodes.forEach(function (item) {
            item.style.opacity=1;
        })
    }
})


















