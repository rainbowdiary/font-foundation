define(function (require,exports,module) {
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



