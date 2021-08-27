/*  2020/12/27
1304. 和为零的N个唯一整数
给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。

示例 1：
输入：n = 5
输出：[-7,-1,1,3,4]
解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。

示例 2：
输入：n = 3
输出：[-1,0,1]

示例 3：
输入：n = 1
输出：[0] 
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const arr = new Array(n).fill(0);
    for (let i = 1; i <= Math.floor(n / 2); ++i) {
        arr[i - 1] = i;
        arr[n - i] = -i;
    }
    return arr;
};

console.log(sumZero(10));
