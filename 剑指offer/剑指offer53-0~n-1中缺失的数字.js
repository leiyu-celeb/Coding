/* 剑指 Offer 53 - II. 0～n-1中缺失的数字
一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

 

示例 1:

输入: [0,1,3]
输出: 2
示例 2:

输入: [0,1,2,3,4,5,6,7,9]
输出: 8
 

限制：

1 <= 数组长度 <= 10000 */


/**
 * @param {number[]} nums
 * @return {number}
 */
//遍历数组，时间复杂度O(n)
var missingNumber = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== i)
        return i;
    }
    return nums.length;          //缺失的是最后一个
};


//二分查找 时间复杂度O(logn)
var missingNumber = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid === nums[mid]) {
            left = mid + 1;
        } else if (mid < nums[mid]) {
            right = mid - 1;
        }
    }

    return left;
};