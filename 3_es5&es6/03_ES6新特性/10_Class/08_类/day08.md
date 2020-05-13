### class
    1. 构造器在哪定义
        class Person{
            constructor(name,age){
                this.name = name;
                this.age = age;
            }
        }
        new Person(name,age) 
        
    2. 怎么定义静态方法
         class Person{
            static fn(){}  
        }
        Person.fn()
    3. 怎么定义实例方法
        class Person{
            fn(){}  
        }
        new Person().fn()
    4. 怎么定义实例属性(公用的)
         class Person{
            constructor(name,age){
                this.name = name;  // 实例属性(私有)
                this.age = age;
            }
            get prop(){}
            set prop(val){}  // 实例属性(公有)
        }
    5. 继承
        class Teacher extends Person{
            constructor(name,age,money){
               super(name,age) // 顶行调用
               this.money =money
            }
        }
    
### css模块化
     原生css
        @import  发送的请求个数太多   
     less
         变量
         嵌套(和html的结构一模一样)    
         混合
         继承  
         @import
            真正的模块化合并  只会发送一个请求
### js模块化
    服务端
        commonjs
        ES6
    浏览器端
        AMD      require.js
        CMD      seajs
        commonjs browserify
        ES6      webpack
    1. 一个js文件一个模块 模块与模块之间不会出现命名冲突
    2. 模块和模块之间要设计符合业务逻辑的依赖关系
    3. 实现模块合并    
  
### seajs
    https://github.com/seajs/seajs/issues/426
    如何定义一个模块?
        defined((require,exports,module)=>{
            // 模块的代码
            module.exports={}
        })
    如何使用一个模块?    
        seajs.use(模块外的路径,(暴露出来模块的内容)=>{})
    模块也可以作为依赖使用
        var 暴露出来模块的内容 =  require(模块内的路径)    
    exports&module.exports 区别
        exports 只能通过对象.的形式 往外暴露内容
        module.exports 随便怎么暴露都可以  
    seajs的模块化合并
        了解即可    
    移动端项目
         index.js         业务的入口文件
         swiper.js        无缝滑屏
         touchscroll.js   竖向滑屏 
         transformcss.js  公共的工具类  对transform的一次封装
    seajs改造
        buss
            transform
                transformcss.js  :  公共的工具类  对transform的一次封装
            index.js  : 业务的入口模块
            head.js  :  头部模块
            nav.js   :   导航模块
            swiper.js :  轮播图模块
            tab.js    :  选项卡模块
            touchscroll.js : 竖向滑屏模块
        common  
            clear.js  :  清除全局事件默认行为的方法
            fit.js    :  适配
        index.js : 项目的入口          
### commonjs
    require(模块路径)
    exports.a=a
    module.exports ={}   
    module.exports =fn
    module.exports.a = a
    
    npm install -g browserify
    browserify 项目的入口js文件 -o 打包后的地址
       