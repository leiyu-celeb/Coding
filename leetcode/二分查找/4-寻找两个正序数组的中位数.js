/* 4. 寻找两个正序数组的中位数
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

示例 1：
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2

示例 2：
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5 
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    arr = [...nums1, ...nums2];
    arr.sort((a, b) => a - b);
    if(arr.length % 2 == 1){
        return arr[(arr.length - 1) / 2].toFixed(5);
    }else{
        return ((arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2).toFixed(5);
    }
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    // 归并排序
    const merged = []
    let i = 0
    let j = 0
    while(i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        merged.push(nums1[i++])
      } else {
        merged.push(nums2[j++])
      }
    }
    while(i < nums1.length) {
      merged.push(nums1[i++])
    }
    while(j < nums2.length) {
      merged.push(nums2[j++])
    }
  
    const { length } = merged
    return length % 2 === 1
      ? merged[Math.floor(length / 2)]
      : (merged[length / 2] + merged[length / 2 - 1]) / 2
  };
  