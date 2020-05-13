import damu from "../js/damu.js";
import tools from "../js/tools.js";

function swiper(){
	var arr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"]
	damu.carousel(arr);
};
function drag(){
	damu.dragNav();
};
function changeFocus(){
	var inputText = document.querySelector("#wrap .head .head-bottom form input[type='text']");
inputText.addEventListener("touchstart",function(ev){
	ev=ev||event;
	this.focus();
	ev.stopPropagation();
	ev.preventDefault();
})
document.addEventListener("touchstart",function(){
		inputText.blur();
	})
};
function CMCFMenuBtn(){
		var menuBtn = document.querySelector("#wrap .head .head-top .menuBtn");
	var mask = document.querySelector("#wrap .head .mask");
	//isXX:false  频道按钮
	//isXX:ture	  XX按钮
	var isXX=false;
	menuBtn.addEventListener("touchstart",function(ev){
		ev = ev||event;
		var touchC = ev.changedTouches[0];
		if(!isXX){
			tools.addClass(menuBtn,"active");
			mask.style.display="block";
		}else{
			tools.removeClass(menuBtn,"active");
			mask.style.display="none";
		}
		isXX=!isXX;
		ev.stopPropagation();
		ev.preventDefault();
	})
	
	document.addEventListener("touchstart",function(){
		if(isXX){
			tools.removeClass(menuBtn,"active");
			mask.style.display="none";
			isXX=!isXX;
		}
	})
	
	mask.addEventListener("touchstart",function(ev){
		ev = ev||event;
		ev.stopPropagation();
		ev.preventDefault();
	})
}

export default {
    swiper,
    drag,
    changeFocus,
    CMCFMenuBtn
}