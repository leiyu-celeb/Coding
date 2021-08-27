/* leetcode 69. x 的平方根
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2

示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
由于返回类型是整数，小数部分将被舍去。 
*/

/**
 * @param {number} x
 * @return {number}
 */
//方法一：内置对象Math库函数
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};


//方法二：二分查找  重点掌握两种二分查找的用法：1.有序数组的二分查找；2.二分查找逼近左右边界；
const mySqrt2 = function(x) {
    if(x < 2) return x;
    let left = 1, right = Math.floor(x / 2);
    while(left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        if(mid * mid === x){
            return mid;
        }else if(mid * mid < x){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return right;
}



//方法三：牛顿-拉弗森迭代法
function sqrt(x) {
    let origin = x;
    return function inner(x) {
        // xn+1 = xn -   f(xn)     /  f'(xn)
        let xn1 = x - (x*x-origin) / (2*x)
        if(x - xn1 <= 0.1) { // 精度问题
            return xn1
        }
        return inner(xn1)
    }
}