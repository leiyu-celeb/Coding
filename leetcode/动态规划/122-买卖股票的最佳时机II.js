/**
 * @param {number[]} prices
 * @return {number}
 */
//方法一：贪心算法，收集所有的上坡
var maxProfit = function(prices) {
    let len = prices.length;
    if(len <= 1) return 0;
    let max = 0;
    for(let i = 1; i < len; i++){
        if(prices[i] > prices[i - 1]){       //卖出有利可图
            max += prices[i] - prices[i - 1];
        }
    }
    return max;
};


var maxProfit = function(prices) {
    let ans = 0;
    let n = prices.length;
    for (let i = 1; i < n; ++i) {
        ans += Math.max(0, prices[i] - prices[i - 1]);
    }
    return ans;
};