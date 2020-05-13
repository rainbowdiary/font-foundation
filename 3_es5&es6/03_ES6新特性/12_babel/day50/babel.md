###Babel的作用
    ES6 --> ES5
        语法
        API

###1. 基本使用
    npm i @babel/core @babel/cli  --save-dev 
        可插拔:
            每一次在语法的转换都要找对应的插件
                "@babel/plugin-transform-arrow-functions"
                "@babel/plugin-transform-block-scoping",
                "@babel/plugin-transform-classes"
                
                babel 对应的js文件 -o  输出位置 
            
            .babelrc
                {
                    "plugins": ["@babel/plugin-transform-arrow-functions"]
                }    
                
###2.预设(语法层面)
            .babelrc
                {
                  "presets": ["@babel/preset-env"]
                  "plugins": ["@babel/plugin-transform-arrow-functions"]
                } 
            
            borwserlist:  浏览器支持层面的规范   
            ---> package.json 
                "browserslist": [
                    "last 2 Chrome versions"
                 ]  
                 
###3.衬垫(API层面)
            npm i --save @bable/pollify
            require("@bable/pollify")  --> 衬垫代码太大

###4.runtime(API层面)
        npm i --save-dev @babel/plugin-transform-object-assign
             ---->  为Object.assign  单独创建一个衬垫函数
                                    每次调用Object.assign() 都会生成那个衬垫函数
                                    
        npm i --save-dev @babel/plugin-transform-runtime                            
        npm i @babel/runtime --save  
            --->   从@babel/runtime 中引入对应的衬垫
            
       
    
                           
                
    