/*
    1. arrAn 放每一屏的出入场动画
    2. 每一屏的出入场动画在 点击头部导航 点击侧边栏的小圆点 以及鼠标滚轮滑动时触发
            当前屏入场
                每次move函数的index参数都代表当前屏   index --> frame.now
            前一屏出场
                当下一次调用move函数时  只要frame.now没有被更新  它都代表前一屏
                在每次move函数调用之前 我们应该将frame.now给outinAn.oldIndex
*/




(function (w) {
    w.outinAn={};

    var home1 = document.querySelector("#wrap .content .list .item .home .home-1");
    var home2 = document.querySelector("#wrap .content .list .item .home .home-2");
    home1.style.transition="1s transform";
    home2.style.transition="1s transform";

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
            },
            inAn:function () {
                home1.style.transform = "translateY(0px)";
                home2.style.transform = "translateY(0px)";
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
    //模拟第一屏的入场动画!!!
    setTimeout(function () {
        arrAn[0].inAn();
    },2000)

    w.outinAn.oldIndex = 0;
    w.outinAn.arrAn = arrAn;
})(window)