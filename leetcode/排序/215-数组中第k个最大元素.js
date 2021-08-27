/* 215. 数组中的第K个最大元素
在未排序的数组中找到第 k 个最大的元素。
请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = quickSort(nums);
    return nums[nums.length - k];
}

var quickSort = function(nums){
    if(nums.length <= 1) return nums;
    let left = [], right = [];
    let midIndex = Math.floor(nums.length / 2);
    let midVal = nums.splice(midIndex, 1)[0];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < midVal){
            left.push(nums[i]);
        }else{
            right.push(nums[i]);
        }
    }
    return quickSort(left).concat(midVal, quickSort(right));
}

let nums =  [3,2,1,5,6,4] , k = 2;

console.log(findKthLargest(nums, k));



var findKthLargest = function(nums, k) {
    nums = quickSort(nums);
    return nums[nums.length - k];
}

var quickSort = function(nums) {
    if(nums.length <= 1) return nums;
    let left = [], right = [];
    let midIndex = Math.floor(nums.length / 2);
    let midVal = nums.splice(midIndex, 1)[0];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < midVal) {
            left.push(nums[i]);
        }else{
            right.push(nums[i]);
        }
    }
    return quickSort(left).concat(midVal, quickSort(right));
}



