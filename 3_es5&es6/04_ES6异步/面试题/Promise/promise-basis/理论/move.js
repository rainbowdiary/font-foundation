HTMLDivElement.prototype.move = function (targetPoint) {
  var that = this;
  return new Promise(function (resolve, reject) {
    var timer = setInterval(function () {
      var nowPoint = that.offsetLeft;
      if (nowPoint < targetPoint) {
        nowPoint++
      } else if (nowPoint > targetPoint) {
        nowPoint--
      } else {
        clearInterval(timer);
        resolve()
      }
      that.style.left = nowPoint + "px";
    }, 3)
  })
}



/*HTMLDivElement.prototype.move =  function (targetPoint) {
  var that = this;
  return new Promise(function (resolve,reject) {
      var timer = setInterval(function () {
          var nowPoint = that.offsetLeft;
          if(nowPoint<targetPoint){
              nowPoint++
          }else if (nowPoint>targetPoint){
              nowPoint--
          } else{
              clearInterval(timer);
              resolve()
          }
          that.style.left = nowPoint +"px";
      },3)
  })
}*/



// function move(targetPoint) {
//     return new Promise(function (resolve,reject) {
//         var timer = setInterval(function () {
//             var nowPoint = this.offsetLeft;
//             if(nowPoint<targetPoint){
//                 nowPoint++
//             }else if (nowPoint>targetPoint){
//                 nowPoint--
//             } else{
//                 clearInterval(timer);
//                 resolve()
//             }
//             this.style.left = nowPoint +"px";
//         },3)
//     })
// }