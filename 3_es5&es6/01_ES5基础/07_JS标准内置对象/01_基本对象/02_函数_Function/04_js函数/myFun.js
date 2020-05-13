/**
 * 返回两个数字的和
 * @param {一个加数} x
 * @param {两一个加数} y
 */
function getSumByTwo(x, y) {
	//var x =4;
	//var y=5;
	//				var c = x+y;
	return x + y;
}

//求两个数字的最大值

/**
 * 返回两个数的最大值
 * @param {第一个数} x
 * @param {第二个数} y
 */
function getMaxByTwo(x, y) {
	//第一种
	//	if(x>y){
	//		return x;
	//	}else{
	//		return y;
	//	}
	//第二种
	return x > y ? x : y;
}

//求三个数字的最大值
/**
 * 
 * @param {Object} x
 * @param {Object} y
 * @param {Object} z
 */
function getMaxByThree(x, y, z) {
	// 第一种
	// x y z
	//	if(x>y){
	//		//x大,y小
	//		if(x > z){
	//			return x;
	//		}else{
	//			return z;
	//		}
	//	}else{
	//		//x小,y大
	//		if(y>z){
	//			return y;
	//		}else{
	//			return z;
	//		}
	//	}
	//第二种
	//  8,7,6
	return x > y ? (x > z ? x : z) : (y > z ? y : z);

}
//求n-m之间所有数的和
/**
 * 返回n到m之间的和
 * @param {起始数} n
 * @param {结束数} m
 */
function getSumByNToM(n, m) {
	var sum = 0;
	for(var i = n; i <= m; i++) {
		sum += i;
	}
	return sum;
}

//求圆的面积
/**
 * 返回圆的面积
 * @param {半径} r
 */
function getAreaByCircle(r) {
	return Math.PI * r * r;
}

//判断一个数是否是素数
//素数也叫质数,只能被1或者自己整除的数叫质数
// 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47  53...................

function getIsPrime(num) {
	//依次从2,取余到自己的前一位
	for(var i = 2; i < num; i++) {
			if(num % i ==0){
				//不是质数
				return false;
			}
	}
	// 当循环结束之后,还没有进入if判断的,一定是质素,返回true
	return true;
}
//求一个数组中的最大值和最小值还有和

/**
 * 
 * @param {一个数组} arr
 * @return {第一个是和}
 * @return {第二个是最大值}
 * @return {第三个是最小值}
 */
function getSumAndMaxAndMinByArray(arr){
	// var arr = [1,2,3,4,5];
//	console.log(arr);
	var sum  = 0;
	var max = arr[0];
	var min = arr[0];
	for (var i = 0; i < arr.length; i++) {
		sum+=arr[i];
		if(max < arr[i]){
			max = arr[i];
		}
		if(min > arr[i]){
			min = arr[i];
		}
	}
	//var k = ['老刘','haha',5];
	//数组也是一种数据类型,返回值也可以是一个数组类型的数据
	return [sum,max,min];
//	return max;
//	return min;
}

//通过函数实现数组反转
function getReverseByArray(arr){
	var num = parseInt(arr.length/2);
	for(var i = 0;i<num;i++){
		var temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr;
}
