/* 231. 2的幂
给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

示例 1:

输入: 1
输出: true
解释: 20 = 1
示例 2:

输入: 16
输出: true
解释: 24 = 16
示例 3:

输入: 218
输出: false */

/**
 * @param {number} n
 * @return {boolean}
 */
//思路：位运算，因为2的幂一定大于0，且 n & (n - 1) === 0，同时成立成返回true，否则返回false;
var isPowerOfTwo = function(n) {
    if(n > 0 && (n & (n - 1)) === 0){
        return true;
    }
    return false;
};