/* 213. 打家劫舍 II
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，
这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，
如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。

示例 1：
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。

示例 2：
输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 3：
输入：nums = [0]
输出：0
 
提示：
1 <= nums.length <= 100
0 <= nums[i] <= 1000 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/*  
    所有解法跟198题解法几乎完全一样
    区别就是本题第一个房子和最后一个房子连在一起，而且同样保留198题的相邻房子不能同时偷的原则
    所以此题可以分为两种情况
    偷第一家，不能偷最后一家
    不偷第一家，能偷最后一家 
*/
var rob = function(nums) {
    let n = nums.length;
    if(n === 1){       
        return nums[0];
    }
    function robI(nums){        //打家劫舍I
        let dp = new Array(n);
        dp[0] = 0;
        dp[1] = nums[0];
        for(let i = 2; i < n; i++){
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
        }
        return dp[n - 1];
    }
    var need1 = robI(nums.slice(1));
    var need2 = robI(nums.slice(0, nums.length - 1));
    return Math.max(need1, need2);
};