# 正则表达式
## 1 正则表达式语法
### 先行断言
* 正向先行断言    (?=pattern)  修饰前面的原子，
* 负向先行断言    (?!pattern)  修饰前面的原子
* 正向后行断言    (?<=pattern)  修饰后面的原子
* 负向后行断言    (?<!pattern)  修饰后面的原子

### 模式修饰符（修饰的整个正则表达式）
* \i   大小写不敏感
* \m   多行模式 多行模式下，换行符可以当做字符串边界
* \g   全局匹配  


## 2. 字符串对象的正则方法
* search()    str.search(reg)  匹配成功返回位置，不成功返回 -1
* match()     str.match(reg)   匹配成功返回数组， 不成功返回 null； 如果要全局匹配获取数据，只能用match
* split()     str.split(reg)   把字符串分割成数组，用正则指定分隔符
* replace()   str.replace(reg, news)  执行字符串替换



# jQuery
http://learn.fuming.site/
https://www.w3cschool.cn/jsref/



push()  unshift()  shift()  pop()





