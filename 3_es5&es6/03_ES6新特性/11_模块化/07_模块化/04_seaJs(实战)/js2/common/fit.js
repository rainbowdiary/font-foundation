
define((require,exports,module)=>{
    module.exports=function () {
        //定义设计稿宽度
        var designW = 1080;
        // 定义设计稿等宽 根元素字体大小
        var rootFontSize = designW/12;
        // 计算 设备宽度和设计稿宽度的比例
        var scale = document.documentElement.clientWidth / designW;
        // 设置设备宽度下， 根元素的字体大小
        document.documentElement.style.fontSize = rootFontSize * scale + 'px';
    }
})