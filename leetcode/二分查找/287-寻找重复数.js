/* 2020/12/25
287. 寻找重复数
给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），
可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

示例 1:
输入: [1,3,4,2,2]
输出: 2

示例 2:
输入: [3,1,3,4,2]
输出: 3

说明：
1.不能更改原数组（假设数组是只读的）。
2.只能使用额外的 O(1) 的空间。
3.时间复杂度小于 O(n2) 。
4.数组中只有一个重复的数字，但它可能不止重复出现一次。 
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
// 数组API：indexOf / lastIndexOf
var findDuplicate = function(nums) {
    for(let item of nums){
        if(nums.indexOf(item) !== nums.lastIndexOf(item)){
            return item;
        }
    }
};

// let nums = [1,3,4,2,2];
let nums = [3,1,3,4,2];
console.log(findDuplicate(nums));


// 二分查找
var findDuplicate = function(nums) {
    const n = nums.length;
    let left = 1, right = n - 1, ans = -1;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        let cnt = 0;
        for (let i = 0; i < n; ++i) {
            cnt += nums[i] <= mid;
        }
        if (cnt <= mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
            ans = mid;
        }
    }
    return ans;
};
