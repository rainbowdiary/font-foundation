;(function () {
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
})()