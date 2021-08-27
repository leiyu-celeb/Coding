/* 面试题 08.05. 递归乘法
递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。

示例1:

输入：A = 1, B = 10
输出：10

示例2:

输入：A = 3, B = 4
输出：12

提示:

保证乘法范围不会溢出 */


/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
//方法一：非递归
var multiply = function (A, B) {
    let res = 0;
    for(let i = 0; i < B; i++) {
        res += A;
    }
    return res;
};


//方法二：递归
var multiply = function(A, B) {
    if(B === 0){
        return 0;
    }
    return B & 1 == 1 ? A + (multiply(A, B >> 1) << 1) : multiply(A, B >> 1) << 1;
};