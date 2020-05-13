export default function(node, prop, value) {
    // 第一次调用函数的 初始化
    if (node.transformData === undefined) {
        node.transformData = {};
    }

    if (arguments.length === 2) {
        // 获取某个变换函数的值
        var param = node.transformData[prop];
        // 判断
        if (param === undefined) {
            if (prop === 'scale' || prop === 'scaleX' || prop === 'scaleY') {
                param = 1;
            } else {
                param = 0;
            }
        }
        return param;

    } else if (arguments.length === 3) {
        // 设置某个变换函数的值
        node.transformData[prop] = value;

        //设置元素的transform 遍历对象
        var transformStr = '';
        for (var i in node.transformData) {
            switch (i) {
                case 'translate':
                case 'translateX':
                case 'translateY':
                case 'translateZ':
                    transformStr += i+'('+node.transformData[i]+'px) ';
                    break;
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                    transformStr += i+'('+node.transformData[i]+') ';
                    break;
                case 'rotate':
                case 'skew':
                case 'skewX':
                case 'skewY':
                    transformStr += i+'('+node.transformData[i]+'deg) ';
                    break;
            }
        }
        node.style.transform = transformStr;
    }
}
