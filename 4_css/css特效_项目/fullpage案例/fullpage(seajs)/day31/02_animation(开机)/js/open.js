;(function () {
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

})()