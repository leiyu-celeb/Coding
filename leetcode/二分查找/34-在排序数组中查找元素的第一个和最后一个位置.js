/* 34. 在排序数组中查找元素的第一个和最后一个位置

给定一个按照升序排列的整数数组 nums，和一个目标值 target。
找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：
你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？   -> 表明要用二分查找
 
示例 1：
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]

示例 2：
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]

示例 3：
输入：nums = [], target = 0
输出：[-1,-1]
 

提示：
0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
nums 是一个非递减数组
-10^9 <= target <= 10^9 
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//方法一： indexOf 和 lastIndexOf
// var searchRange = function(nums, target) {
//     return [nums.indexOf(target), nums.lastIndexOf(target)];
// };



//方法二： 两次遍历
// var searchRange = function(nums, target) {
//     let index1, index2;
//     for(let i = 0; i < nums.length; i ++){
//         if(nums[i] == target){
//             index1 = i;
//             break;
//         }
//     }
//     for(let j = nums.length - 1; j >= 0; j--){
//         if(nums[j] == target){
//             index2 = j;
//             return [index1, index2];
//         }
//     }
//     return [-1, -1];
// };


// var searchRange = function(nums, target) {
//     let index1 = -1;
//     let index2 = -1;

//     //求target在nums数组的左侧边界，若不存在target，则返回-1
//     const getLeft = (nums, target) => {
//         if (nums.length == 0) return -1;
//         let left = 0;
//         let right = nums.length;
//         let mid;
//         while(left < right){
//             mid = Math.floor((left + right) / 2); 
//             if(nums[mid] == target){
//                 right = mid;
//             }else if(nums[mid] > target){
//                 right = mid;
//             }else if(nums[mid] < target){
//                 left = mid + 1;
//             }
//         }
//         if(nums[left] == target){  //确保左侧边界等于target
//             return left;
//         }
//         return -1;
//     }
//      //求target在nums数组的右侧边界，若不存在target，则返回-1
//     const getRight = (nums, target) => {
//         if (nums.length == 0) return -1;
//         let left = 0;
//         let right = nums.length;
//         let mid;
//         while(left < right){
//             mid = Math.floor((left + right) / 2);
//             if(nums[mid] == target){
//                 left = mid + 1;
//             }else if(nums[mid] > target){
//                 right = mid;
//             }else if(nums[mid] < target){
//                 left = mid + 1;
//             }
//         }
//         if(nums[left - 1] == target){  //确保右侧边界等于target
//             return left - 1;
//         }
//         return -1;
//     }

//     index1 = getLeft(nums, target);
//     index2 = getRight(nums, target);

//     return [index1, index2];
// }



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let leftIndex = -1, rightIndex = -1;

    const getLeft = function(nums, target) {
        let left = 0, right = nums.length;
        while(left < right) {
            let mid = Math.floor((right - left) / 2) + left;
            if(nums[mid] >= target) {
                right = mid;
            }else{
                left = mid + 1;
            }
        }
        if(nums[left] === target) {    //存在这个数
            return left;
        }else{
            return -1;
        }
    }

    const getRight = function(nums, target) {
        let left = 0, right = nums.length;
        while(left < right) {
            let mid = Math.floor((right - left) / 2) + left;
            if(nums[mid] <= target) {
                left = mid + 1;
            }else{
                right = mid;
            }
        }
        if(nums[left - 1] === target) {
            return left - 1;
        }else{
            return -1;
        }
    }

    leftIndex = getLeft(nums, target);
    rightIndex = getRight(nums, target);
    return [leftIndex, rightIndex];
};



let nums = [5,7,7,8,8,10], target = 8;

console.log(searchRange(nums, target));











