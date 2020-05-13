import transformCss from "./transform/transformcss.js"
export default function () {
    //获取元素
    var nav = document.querySelector('#nav');
    var ul = nav.querySelector('ul');
    var navItems = nav.querySelectorAll('li');
    var isTouchMove = false;  // 表示是否在触摸移动

    // 开启3d加速
    transformCss(ul, 'translateZ', 0);

    // 触摸开始
    nav.addEventListener('touchstart', function (event) {
        // 关闭过渡
        ul.style.transition = 'none';
        //获取touch对象
        var touch = event.changedTouches[0];
        // 获取触点的初始位置
        this.startX = touch.clientX;
        //获取触点的初始位置  y方向
        this.startY = touch.clientY;
        // 获取元素的初始位置
        this.eleX = transformCss(ul, 'translateX');
        // 定义手指滑动距离
        this.dstX = 0;
        //定义触摸起始时间
        this.startTime = (new Date).getTime();
        //标记还没有进行触摸移动
        isTouchMove = false;
        // 标记是否是第一次touchmove
        this.isFirstMove = true;
        /// 标记是否是水平滑动
        this.isHorizontal = true;
    });
    // 触摸移动
    nav.addEventListener('touchmove', function (event) {
        //判断是否是水平滑动
        if (!this.isHorizontal) {
            return;
        }

        // 获取touch对象
        var touch = event.changedTouches[0];
        // 获取触点的结束位置
        var endX = touch.clientX, endY = touch.clientY;
        // 获取触点移动的距离
        this.dstX = endX - this.startX;
        var dstY = endY - this.startY;

        // 判断是否是第一次touchmove
        if (this.isFirstMove) {
            this.isFirstMove = false; //已经不是第一次了
            if (dstY > this.dstX) { //如果垂直方向滑动的更多，判定垂直方向滑动
                this.isHorizontal = false;
                return;
            }
        }

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

        // 阻止冒泡
        event.preventDefault();
        event.stopPropagation();
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

}
