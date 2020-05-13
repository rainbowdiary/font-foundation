export default  function () {
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
}
