/* 53. 最大子序和

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。


示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = 0, max = nums[0];
    nums.forEach((item) => {
        pre = Math.max(pre + item, item);
        max = Math.max(pre, max);
    });
    return max;
};


var maxSubArray = function(nums) {
    let pre = 0, max = nums[0];
    nums.forEach((item) => {
        pre = Math.max(pre + item, item);
        max = Math.max(pre, max);
    })
    return max;
}


var maxSubArray = function(nums) {
    let pre = 0, max = nums[0];
    nums.forEach((item) => {
        pre = Math.max(pre, pre + item);
        max = Math.max(pre, max);
    })
    return max;
}
