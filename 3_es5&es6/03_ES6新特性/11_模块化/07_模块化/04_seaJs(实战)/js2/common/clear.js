define((require,exports,module)=>{
    module.exports=function () {
        //获取包裹元素
        var app = document.querySelector('#app');
        // 阻止全局默认动作
        app.addEventListener('touchstart', function (event) {
            event.preventDefault();
        });

        // 使所有的超链接可以触摸跳转
        var links = document.querySelectorAll('a[href]');
        // 监听触摸结束事件
        links.forEach(function (linkNode) {
            linkNode.addEventListener('touchend', function () {
                location.href = this.href;
            });
        })
    }
})