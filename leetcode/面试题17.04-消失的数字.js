/* 面试题 17.04. 消失的数字
数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？

注意：本题相对书上原题稍作改动

示例 1：

输入：[3,0,1]
输出：2
 
示例 2：

输入：[9,6,4,2,3,5,7,0,1]
输出：8 
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
//方法一：数学法
var missingNumber = function(nums) {
    let sum = 0;     //保存数组内所有元素之和
    let n = nums.length;
    let all = (0 + n) * (n + 1) / 2;     //求0到n所有元素之和
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];       
    }
    return all - sum;
};



//方法二：位运算，异或求解
var missingNumber = function(nums) {
    var a = 0 ;         //因为数组少了一项，所以将结果初始值设为0，i从1开始遍历到n
    for(var i = 1;i <= nums.length; i++){ //
        a = a ^ nums[i - 1] ^ i
    }
    return a;
};




