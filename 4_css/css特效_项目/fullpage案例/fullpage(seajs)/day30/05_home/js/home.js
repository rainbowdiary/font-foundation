/*
    1.手动轮播  （不需要无缝）
    2.自动轮播  （都需要无缝）
    3.自动轮播与手动轮播的冲突
            自动轮播的过程中如果突然手动轮播了  首先停下自动轮播 并且得告诉手动轮播自动轮播刚刚播到了哪一屏
            手动轮播结束时要重新开启自动轮播  手动轮播得自动轮播刚刚手动点到了哪一屏  你要从当前屏开始自动轮播


     编码习惯：
        变量在作用域得最顶层定义 初始化
        开启循环定时器时 最好拿一个函数包裹一下  方便重新开启
        循环定时器的包裹函数得第一行最好上来清除一下循环定时器  避免相同逻辑的循环定时器开启多份

        在函数内部有循环定时器要格外注意：
            ！！！函数定义为尽量在函数的上一行立马调用  如果没有办法立马调用 一定仔细使用函数内的变量（timer）
*/



(function () {
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


    move();
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
})()