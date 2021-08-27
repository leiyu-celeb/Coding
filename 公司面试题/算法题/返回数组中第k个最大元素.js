/* LeetCode 215. 数组中的第K个最大元素  考察重点是 排序算法！！！

在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

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
//方法一：库函数，先降序排序，再取第k个元素
// var findKthLargest = function(nums, k) {
//    nums.sort((a, b) => {
//        return b - a;
//    });
//    return nums[k - 1];  
// };


//快速排序 
var findKthLargest = function(nums, k) {
    quickSort(nums);
    return nums[nums.length - k];
}



let arr = [3,2,1,5,6,4]
let k = 2

console.log(findKthLargest(arr, k));


//堆排序


//归并排序


//冒泡排序




