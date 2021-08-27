/* 剑指 Offer 14- I. 剪绳子
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
提示：

2 <= n <= 58
注意：本题与主站 343 题相同：https://leetcode-cn.com/problems/integer-break/ */


/**
 * @param {number} n
 * @return {number}
 */
//方法一：贪心法
//两个推论：1.当所有绳段长度相等时，乘积最大; 2.最优的绳段长度为3
var cuttingRope = function(n) {
    if(n === 2 || n === 3) {
        return n - 1;
    }
    let count = Math.floor(n / 3);        //求能分多少段长度为3的绳子  
    let rest = n % 3;                //分完后的余数
    if(rest === 1) {
        return Math.pow(3, count - 1) * 4;         //余1，可以分为count - 1段长度为3的绳子， 一段长度为4的绳子
    }else if(rest === 0) {
        return Math.pow(3, count);         //除尽
    }else if(rest === 2) {
        return Math.pow(3, count) * 2;     //余2
    }
};


//方法二：动态规划
var cuttingRope = function(n) {
    const dp = new Array(n + 1).fill(1);

    for (let i = 3; i <= n; ++i) {
        for (let j = 1; j < i; ++j) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }

    return dp[n];
};
