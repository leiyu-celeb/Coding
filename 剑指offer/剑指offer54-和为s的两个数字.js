/* 剑指 Offer 57. 和为s的两个数字

输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。

如果有多对数字的和等于s，则输出任意一对即可。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]

示例 2：

输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
 

限制：

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^6 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//方法一：哈希法
var twoSum = function(nums, target) {
    let m = new Map();
    for(let i = 0; i < nums.length; i++) {
        m.set(nums[i], i);
    }
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        let another = target - nums[i];
        if(m.has(another) && m.get(another) !== i) {
            res.push(another);
            res.push(nums[i]);
            break;
        }
    }
    return res;
};

/* 方法二：双指针法
既然是递增数组，那么我们可以利用双指针来做这道题。
指针 i 指向数组首位数字，指针 j 指向数组末位数字。
若两数字之和大于了 target，则指针 j 往左移一位。
若两数字之和小于了 target，则指针 i 往右移一位。
若两数字之和等于了 target，返回结果 [i, j] 即可。 
*/
var twoSum = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while(l < r){
        if(nums[l] + nums[r] === target) return [nums[l], nums[r]];
        else if (nums[l] + nums[r] > target) r--;
        else l++;
    }
    return null;
};
