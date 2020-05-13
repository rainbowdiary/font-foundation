浅克隆两个对象的地址值是同一个，深克隆得到一个新的对象吗

# 方法
浅克隆方法:
  1. 使用forin循环克隆一个新对象
  2. 使用Object.assign({},oldObj)克隆一个新对象

深克隆:
    1. 序列化
       1. 使用JSON.parse(JSON.stringify(oldObj))克隆新对象
      缺点: json不支持函数类型的克隆
    2. lodash _cloneDeepWith(oldObj)方法

# 手写代码面试话术： 
  会先使用lodash实现功能，
  项目空余时间改造函数，自己实现一下