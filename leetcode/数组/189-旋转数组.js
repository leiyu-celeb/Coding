/* 2021/1/8
189. 旋转数组
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]

示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]

说明:
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//方法一：借助额外的数组
var rotate = function(nums, k) {
    const len = nums.length;
    const arr = new Array(len);
    for(let i = 0; i < len; i++){
        arr[(i + k) % len] = nums[i];
    }
    for(let i = 0; i < len; i++){
        nums[i] = arr[i];
    }
};

let nums = [1,2,3,4,5,6,7], k = 3;

console.log(rotate(nums, k));

//方法二： pop + unshift 循环k次

//方法三： nums.splice(0, 0, ...nums.splice(nums.length - k))

//方法四：splice + unshift   剪切 + 粘贴

//方法五：数组翻转
const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);   // 翻转整个数组
    reverse(nums, 0, k - 1);            // 翻转 [0, k-1]
    reverse(nums, k, nums.length - 1);  // 翻转 [k, nums.length-1]
};


