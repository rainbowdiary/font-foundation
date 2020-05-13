seajs.use(["./js2/common/fit.js", "./js2/common/clear.js", "./js2/buss/index.js"],(fit,clear,bussObj)=>{
    var app = document.querySelector('#app');
    var main = document.querySelector('#main');
    var scrollBar = document.querySelector('#scrollBar');
    fit();
    clear();
    bussObj.headFn()
    bussObj.navFn()
    bussObj.swiper({
        el: document.querySelector('#swiper'),
        pagation: document.querySelector('#swiper .paganation'),
        isAutoPlay: true,
        duration: 3000
    })
    bussObj.tab()
    bussObj.touchscroll(app, main, scrollBar)
})