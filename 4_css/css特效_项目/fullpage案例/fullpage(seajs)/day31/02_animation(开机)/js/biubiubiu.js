;(function (w) {
    w.biubiubiu={};
    w.biubiubiu.qipao=function (canvasNode) {


       //考虑变量提升的问题
        Array.isArray(biubiubiu.arr)?biubiubiu.arr.length=0:"";
        clearInterval(biubiubiu.timer1)
        clearInterval(biubiubiu.timer2)


        if (canvasNode.getContext){
            var ctx =canvasNode.getContext("2d");
            //放随机圆的信息  圆心 半径
            var arr =[];
            var timer1 = setInterval(function () {
                ctx.clearRect(0,0,canvasNode.width,canvasNode.height)
                //动画！！！！
                arr.forEach(function (item,index) {
                    item.deg+=5;
                    item.x = item.startX + Math.sin((item.deg*Math.PI/180)) * item.stepY ;
                    item.y = item.startY - (item.deg*Math.PI/180)* item.stepX;

                    if(item.y <=-item.r){
                        arr.splice(1,index)
                    }
                })


                //画圆
                arr.forEach(function (item) {
                    ctx.save()
                    ctx.fillStyle="rgba("+item.red+","+item.green+","+item.blue+","+item.alp+")";
                    ctx.beginPath()
                    ctx.arc(item.x,item.y,item.r,0,2*Math.PI)
                    ctx.fill()
                    ctx.restore()
                })

            },10)


            //提供随机圆
            var timer2 = setInterval(function () {
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

                arr.push({
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

            w.biubiubiu.arr = arr;
            w.biubiubiu.timer1 = timer1;
            w.biubiubiu.timer2 = timer2;
        }
    }
})(window)