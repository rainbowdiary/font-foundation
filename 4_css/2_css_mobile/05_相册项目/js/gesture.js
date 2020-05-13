(function (w) {

    /**
     * 封装手势事件
     * @param node  要监听的元素
     * @param callback  指定回调函数，对应不同的事件：  start\change\end
     */
    w.gesture = function(node, callback){
        //手势开始
        node.addEventListener('touchstart', function (event) {
            //判断屏幕上手指个数>=2
            if (event.touches.length >= 2) {
                //标记已经发生了start事件
                node.isStarted = true;
                //计算两个触点的初始距离（直线距离）
                node.startDst = getDst(event.touches[0], event.touches[1]);
                // 计算两个触点的初始角度
                node.startDeg = getDeg(event.touches[0], event.touches[1]);
                // 调用回调函数
                if (callback && typeof(callback['start']) === 'function') {
                    callback['start']();
                }
            }
        });
        //手势变化
        node.addEventListener('touchmove', function (event) {
            //判断屏幕上手指个数>=2
            if (event.touches.length >= 2) {
                // 再次计算此时两个触点的距离
                var endDst = getDst(event.touches[0], event.touches[1]);
                // 再次计算此时两个触点的角度
                var endDeg = getDeg(event.touches[0], event.touches[1]);
                // 计算比例 此时触点距离/起始触点距离  添加给event对象
                event.scale = endDst / node.startDst;
                // 计算两次的角度差
                event.rotation = endDeg - node.startDeg;
                // 回调函数
                if (callback && typeof(callback['change']) === 'function') {
                    callback['change'](event);
                }
            }
        });
        // 手势结束
        node.addEventListener('touchend', function (event) {
            // 发生过start事件且元素上手指个数<2
            if (node.isStarted && event.targetTouches.length < 2) {
                node.isStarted = false; //设置标记
                if (callback && typeof(callback['end']) === 'function') {
                    callback['end']();
                }
            }
        });
    }

    /**
     * 计算两个触点的间距
     * @param touch1
     * @param touch2
     */
    function getDst(touch1, touch2) {
        // 计算两个触点的水平距离
        var a = touch2.clientX - touch1.clientX;
        // 计算两个触点的垂直距离
        var b = touch2.clientY - touch1.clientY;
        // 计算两个触点直线距离
        var c = Math.sqrt(a * a + b * b);
        // 返回结果
        return c;
    }

    /**
     * 计算两个触点之间的角度（与水平线共同组成直角三角形）
     * @param touch1
     * @param touch2
     */
    function getDeg(touch1, touch2) {
        // 计算两个触点的水平距离
        var x = touch2.clientX - touch1.clientX;
        // 计算两个触点的垂直距离
        var y = touch2.clientY - touch1.clientY;
        // 计算弧度
        var arc = Math.atan2(y, x);
        // 计算角度
        var deg = arc / Math.PI * 180;
        //返回角度
        return deg;
    }

})(window);