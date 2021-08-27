/* 2021/1/6
238. 除自身以外数组的乘积
给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
 
提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。） */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     const output = new Array(nums.length).fill(0);
//     for(let i = 0; i < nums.length; i++){
//         output[i] = nums.filter((item, index) => index != i).reduce((accumulator, currentValue) => accumulator * currentValue);
//     }
//     return output;
// };

//方法二：
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const ret = [];
  for (let i = 0, temp = 1; i < nums.length; i++) {
    ret[i] = temp;
    temp *= nums[i];
  }
  // 此时ret[i]存放的是前i个元素相乘的结果(不包含第i个)
  // 如果没有上面的循环的话，
  // ret经过下面的循环会变成ret[i]存放的是后i个元素相乘的结果(不包含第i个)
  // 我们的目标是ret[i]存放的所有数字相乘的结果(不包含第i个)
  // 因此我们只需要对于上述的循环产生的ret[i]基础上运算即可
  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
    ret[i] *= temp;
    temp *= nums[i];
  }
  return ret;
};


let nums = [1,2,3,4];

console.log(productExceptSelf(nums));