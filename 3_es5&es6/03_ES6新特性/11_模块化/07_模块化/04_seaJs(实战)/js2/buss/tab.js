define((require,exports,module)=>{
    var transformCss = require("./transform/transformcss")
    module.exports=function () {
        // 获取所有的选项卡元素
        var tabs = document.querySelectorAll('.tab');
        // 遍历，对每一个tab设置相关的事件
        tabs.forEach(function (tab) {
            setTap(tab);
        });


        /**
         * 设置选项卡的函数
         * @param tab 选项卡的包裹元素
         * */
        function setTap(tab) {
            // 获取元素
            var tabContent = tab.querySelector('.tab-content');
            var contentList = tab.querySelector('.content-list');
            var tabLoadings = tabContent.querySelectorAll('.tab-loading');
            var tabNavItems = tab.querySelectorAll('.tab-nav a');
            var borderBottom = tab.querySelector('.tab-nav .border-bottom');
            var index = 0; // 选项卡导航的索引

            // 获取tab-loading和content-list的宽度
            var itemWidth = contentList.offsetWidth;
            // 设置一下tabContent的初始位置
            transformCss(tabContent, 'translateX', -itemWidth);

            // 开启3d加速
            transformCss(tabContent, 'translateZ', 0);



            // 触摸开始
            contentList.addEventListener('touchstart', function (event) {
                //获取触点对象
                var touch = event.changedTouches[0];
                // 获取触点的初始位置
                this.startX = touch.clientX;
                this.startY = touch.clientY;
                //获取元素的初始位置
                this.eleX = transformCss(tabContent, 'translateX');
                // 手指一动距离 初始化
                this.dstX = 0;
                // 关闭过渡
                tabContent.style.transition = 'none';
                // 设置loading图不显示
                tabLoadings.forEach(function (tabLoading) {
                    tabLoading.style.opacity = 0;
                });
                //标记是否是第一次touchmove
                this.isFirstMove = true;
                //标记是否是水平逻辑
                this.isHorizontal = true;
            });
            // 触摸移动
            contentList.addEventListener('touchmove', function (event) {
                if (!this.isHorizontal) {
                    return;
                }
                //获取触点对象
                var touch = event.changedTouches[0];
                // 获取结束位置
                var endX = touch.clientX, endY = touch.clientY;
                // 计算手指滑动的距离
                this.dstX = endX - this.startX;
                var dstY = endY - this.startY;

                //判断滑动方向
                if (this.isFirstMove) {
                    this.isFirstMove = false;
                    if (dstY > this.dstX) {
                        this.isHorizontal = false;
                        return;
                    }
                }

                // 计算新的位置
                var translateX = this.eleX + this.dstX;
                // 如果滑动距离超过tab宽度一半，执行切换
                if (Math.abs(this.dstX) > tab.clientWidth/2) {
                    // 如果从左向右 上一个 显示左边的loading
                    if (this.dstX > 0) {
                        translateX = 0;
                    } else if (this.dstX < 0) { //从右向左， 下一个  显示右边的loading
                        translateX = -2*itemWidth;
                    }

                    // 添加过渡
                    tabContent.style.transition = 'transform .5s';
                }


                // 设置位置
                transformCss(tabContent, 'translateX', translateX);

                event.preventDefault();
                event.stopPropagation();
            });
            // 触摸结束
            contentList.addEventListener('touchend', function (event) {
                // 判断滑动距离没有超过一半
                if (Math.abs(this.dstX) <= tab.clientWidth/2) {
                    //添加过渡
                    tabContent.style.transition = 'transform .5s';
                    // 回到内容区域
                    transformCss(tabContent, 'translateX', -itemWidth);
                }
            });
            //阻止tab-loading 的过渡事件冒泡
            tabLoadings.forEach(function (tabLoading) {
                tabLoading.addEventListener('transitionend', function (event) {
                    event.stopPropagation(); //阻止冒泡
                })
            });
            // 过渡结束 开始加载数据
            tabContent.addEventListener('transitionend', function () {
                // 获取tabContent的位置
                var translateX = transformCss(tabContent, 'translateX');
                // 如果translateX位置是 中间内容区域的位置。不加载新的数据
                if (translateX === -itemWidth) {
                    return;
                }

                // 显示loading图
                tabLoadings.forEach(function (tabLoading) {
                    tabLoading.style.opacity = '1';
                });

                // 导航索引变化 根据滑动方向
                if (contentList.dstX > 0) {  //从左向右， 上一个
                    index --;
                } else if (contentList.dstX < 0) { //下一个
                    index ++;
                }
                //限定导航索引位置
                if (index < 0) {
                    index = tabNavItems.length - 1;
                } else if (index > tabNavItems.length - 1) {
                    index = 0;
                }
                //设置导航高亮
                transformCss(borderBottom, 'translateX', index * borderBottom.offsetWidth);


                // 加载新的数据 //实际中应该从后端获取数据
                setTimeout(function () {
                    // 取消过渡
                    tabContent.style.transition = 'none';
                    // 快速变换位置
                    transformCss(tabContent, 'translateX', -itemWidth);
                }, 2000);

            });
        }
    }
})