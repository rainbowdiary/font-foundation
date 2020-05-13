概念
### 容器 & 项目
    具有display:flex -webkit-box属性为容器
    容器的子元素自动成为项目
### 主轴 & 侧轴
    主轴是哪一根 主轴的方向 
    侧轴是哪一根 侧轴的方向
### 富余空间
    容器富裕空间管理
    弹性空间管理: 给项目分配富裕空间
### 项目永远排列在主轴的正方向上

### 优先级
  /*align-items ---> align-self ---> align-content*/

### flex体系
    1. 主轴是哪一根 主轴的方向 侧轴是哪一根 侧轴的方向
        flex-direction
        flex-wrap
        flex-flow
    2. 主轴的富裕空间管理
        justify-content
    3. 侧轴的富裕空间管理
        align-items:侧轴富裕空间 
        align-self:决定项目自己的侧轴;优先级高于 align-content
        align-content: 把换行的和没换行的合成整体进行侧轴方向富裕空间分配
    4. 项目排列的顺序
        order /*设置了order 相当于回到了设置align-items/align-content之前的原始位置 */
    5. 主轴弹性空间管理
    flex:1 ;按比例给    
    flex-shrink:默认值为1;如果内容多,默认压缩在一行显示  
    flex-basis: 将整个父元素都设置为富裕空间       

* 放弃baseline
#### 游戏: flexbox groggy
http://flexboxfroggy.com/#zh-cn