/**
 * @param {number[]} nums
 * @return {number}
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



let nums = [1,2,3,1];

console.log(rob(nums));