(function () {
    // 获取所有的footer-items
    var footerItems = document.querySelectorAll('#footer .footer-item');
    var pages = document.querySelectorAll('#content .page');

    // 监听单击事件
    footerItems.forEach(function (footerItem, index) {
        footerItem.addEventListener('click', function () {
            //排他
            footerItems.forEach(function (item, index) {
                item.classList.remove('active');
                pages[index].classList.remove('active');
            });
            // 显示当前的
            this.classList.add('active');
            pages[index].classList.add('active');
        })
    })
})();

// 轮播图
(function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        }
    })
})();

// 评分 星星
(function () {
    var starItems = document.querySelectorAll('.starts-rating .starts span');
    var rating = 4.1;

    var on_num = Math.floor(rating); //全黄的星星的数量
    var half = rating - on_num;  //小数部分

    // 遍历
    starItems.forEach(function (startItem, index) {
        if (index < on_num) {
            startItem.classList.add('on');
        } else if (index < on_num + half) {
            startItem.classList.add('half');
        }
    });


})();