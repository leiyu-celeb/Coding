/* 剑指 Offer 39. 数组中出现次数超过一半的数字

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 
示例 1:

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
 

限制：

1 <= 数组长度 <= 50000

 
注意：本题与主站 169 题相同：https://leetcode-cn.com/problems/majority-element/

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//方法一：哈希法
// var majorityElement = function(nums) {
//     let half = nums.length / 2;
//     let obj = {};
//     for(let num of nums){
//         if(!obj[num]){
//             obj[num] = 1;
//         }else{
//             obj[num]++;
//         }
//         if(obj[num] > half){
//             return num;
//         }
//     }
// };

//方法二：排序，时间复杂度 O(nlogn) 使用了快速排序
// var majorityElement = function(nums) {
//   nums.sort((a,b) => a - b)
//   return nums[Math.floor(nums.length / 2)]
// };


//方法三：栈方法，当 元素和栈顶元素相等 或 空栈 时入栈，否则出栈，最后栈中剩下的必然都是是大于一半的那个元素
var majorityElement = function(nums) {
    let stack = [];
    for(let item of nums){
      let len = stack.length;
      if(stack[len - 1] === item || !len){
        stack.push(item);
      } else {
        stack.pop();
      }
    }
    return stack[0];
  };
  
  