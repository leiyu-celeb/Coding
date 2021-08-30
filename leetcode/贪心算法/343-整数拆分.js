/* 343. 整数拆分
给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

示例 1:

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
说明: 你可以假设 n 不小于 2 且不大于 58。 */


/**
 * @param {number} n
 * @return {number}
 */
//方法一：贪心法、数学法
var integerBreak = function(n) {
    if(n <= 3) {
        return n - 1;
    }
    let count = Math.floor(n / 3);
    let rest = n % 3;
    if(rest === 0) {
        return Math.pow(3, count);
    }else if(rest === 1) {
        return Math.pow(3, count - 1) * 4;
    }else if(rest === 2) {
        return Math.pow(3, count) * 2;
    }
};

//方法二：动态规划
var integerBreak = function(n) {

    const dp = new Array(n + 1).fill(1);

    for (let i = 3; i <= n; ++i) {
        for (let j = 1; j < i; ++j) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
}