// 适配
(function () {
    //定义设计稿宽度
    var designW = 1080;
    // 定义设计稿等宽 根元素字体大小
    var rootFontSize = designW/12;
    // 计算 设备宽度和设计稿宽度的比例
    var scale = document.documentElement.clientWidth / designW;
    // 设置设备宽度下， 根元素的字体大小
    document.documentElement.style.fontSize = rootFontSize * scale + 'px';
})();

// 取消所有元素的默认动作
(function () {
    //获取包裹元素
    var app = document.querySelector('#app');
    // 阻止全局默认动作
    app.addEventListener('touchstart', function (event) {
        //event.preventDefault();
    });

    // 使所有的超链接可以触摸跳转
    var links = document.querySelectorAll('a[href]');
    // 监听触摸结束事件
    links.forEach(function (linkNode) {
        linkNode.addEventListener('touchend', function () {
            location.href = this.href;
        });
    })
})();

// 头部交互
(function () {
    //获取输入框元素
    var searchInput = document.querySelector('#header .search-input');
    // 监听开始触摸
    searchInput.addEventListener('touchstart', function () {
        this.focus(); //获取焦点
    });
    // 获取包裹元素
    var app = document.querySelector('#app');
    // 触摸页面中其他位置，输入框失去焦点
    app.addEventListener('touchstart', function (event) {
        // 排除掉输入框
        if (event.target !== searchInput) {
            searchInput.blur();  //失去焦点
        }

    });

    // 菜单点击展开
    var menuBtn = document.querySelector('#header .menu-btn');
    var menuList = document.querySelector('#header .menu-list');
    //监听事件
    menuBtn.addEventListener('touchstart', function () {
        menuBtn.classList.toggle('open');
        menuList.classList.toggle('open');
    });
})();

// 导航
(function () {
    //获取元素
    var nav = document.querySelector('#nav');
    var ul = nav.querySelector('ul');
    var navItems = nav.querySelectorAll('li');
    var isTouchMove = false;  // 表示是否在触摸移动

    // 触摸开始
    nav.addEventListener('touchstart', function (event) {
        // 关闭过渡
        ul.style.transition = 'none';
        //获取touch对象
        var touch = event.changedTouches[0];
        // 获取触点的初始位置
        this.startX = touch.clientX;
        // 获取元素的初始位置
        this.eleX = transformCss(ul, 'translateX');
        // 定义手指滑动距离
        this.dstX = 0;
        //定义触摸起始时间
        this.startTime = (new Date).getTime();
        //标记还没有进行触摸移动
        isTouchMove = false;
    });
    // 触摸移动
    nav.addEventListener('touchmove', function (event) {
        // 获取touch对象
        var touch = event.changedTouches[0];
        // 获取触点的结束位置
        var endX = touch.clientX;
        // 获取触点移动的距离
        this.dstX = endX - this.startX;
        // 计算ul新的位置
        var translateX = this.eleX + this.dstX;
        // 进行位置的限定
        if (translateX > 0) {
            // 计算比例，要随着translateX增大而变小， 比例小于1的
            var scale =  1 - translateX / (nav.clientWidth * 2);
            // 根据比例重新计算translateX的值，  translateX也在增大，但增大会放缓，知道无法增大，超过临界值translateX会比前面的值小
            translateX *= scale;

        } else if (translateX < nav.clientWidth - ul.offsetWidth) {
            // 计算ul右边和视口右边的间距 (translateX是负值)
            var rightX = nav.clientWidth - (ul.offsetWidth + translateX);
            // 计算比例
            var scale = 1 - rightX / (nav.clientWidth * 2);
            // 让间距乘上比例，实现间距的增大放缓
            rightX *= scale;
            // 重新计算translateX
            translateX = (nav.clientWidth - rightX) - ul.offsetWidth;
        }
        // 设置ul的位置
        transformCss(ul, 'translateX', translateX);

        //标记正在触摸移动
        isTouchMove = true;
    });
    // 触摸结束 手指离开
    nav.addEventListener('touchend', function () {


        // 计算结束事件和事件间隔
        var endTime = (new Date).getTime();
        var dstTime = endTime - this.startTime;
        // 定义加速距离，加速距离与滑动距离成正比， 跟时间间隔成反比
        var speed = this.dstX / dstTime * 200;  //加速距离


        // 获取当前的位置
        var translateX = transformCss(ul, 'translateX');
        // 给位置添加加速距离
        translateX += speed;

        // 设置贝塞尔函数
        var bezier = '';

        // 判断临界点，实现
        if (translateX > 0) { //左边临界点
            translateX  = 0;
            bezier = ' cubic-bezier(0.08, 1.44, 0.6, 1.46)';
        } else if (translateX < nav.clientWidth - ul.offsetWidth) {
            translateX = nav.clientWidth - ul.offsetWidth;
            bezier = ' cubic-bezier(0.08, 1.44, 0.6, 1.46)';
        }




        // 开启过渡
        ul.style.transition = 'transform .5s'+bezier;
        // 设置元素位置
        transformCss(ul, 'translateX', translateX);


    });

    // 导航可以点击
    navItems.forEach(function (navItem) {
        navItem.addEventListener('touchend', function () {
            // 如果正在触摸移动
            if (isTouchMove) {
                return;
            }

            //其他所有的li取消高亮
            navItems.forEach(function (navItem) {
                navItem.classList.remove('active');
            });
            //当前被点击的li高亮
            this.classList.add('active');
        });
    });
})();

// 轮播图
(function () {
    swiper({
        el: document.querySelector('#swiper'),
        pagation: document.querySelector('#swiper .paganation'),
        isAutoPlay: true,
        duration: 3000
    });
})();