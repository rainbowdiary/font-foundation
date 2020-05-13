/*
    1. 不能使用事件委托  因为onmouseenter 和 onmouseleave 不会冒泡  所以就没有事件委托
    2. 事件给谁?   不要使用onmouseover 和 onmouseout
        onmouseenter  给每一个li
        onmouseleave  给team3
    3.从team3身上出去  前一次动画的所有逻辑都会被清除
            从一个li到另外一个li  前一次动画有没有停掉?
                整个气泡方法被掉几次?
                    跟li之间的移动次数有关  肯定会被掉多次!!!
    4.从一个li到另外一个li  前一次动画也要停掉
        每次进li都掉qipao方法
        在qipao方法一开始就停掉前一次动画!!!!
*/



(function () {
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
            biubiubiu.qipao(canvas);
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
        canvas.style.display="none";
        clearInterval(biubiubiu.timer1)
        clearInterval(biubiubiu.timer2)
        biubiubiu.arr.length=0;

        liNodes.forEach(function (item) {
            item.style.opacity=1;
        })
    }
})()


