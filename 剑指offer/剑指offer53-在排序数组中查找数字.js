/* 剑指 Offer 53 - I. 在排序数组中查找数字 I
统计一个数字在排序数组中出现的次数。

 

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
 

限制：

0 <= 数组长度 <= 50000 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = 0;
    let len = nums.length;
    for(let i = 0; i < len; i++){
        if(nums[i] === target){
            result++;
            if(nums[i + 1] !== target){
                break;
            }
        }
    }
    return result;
};

//方法二：hash法，对象键值法
var search = function(nums, target){
    const hash = Object.create(null);  //定义一个对象作为hash表
    for(let num of nums){         //将数组元素作为键名存入hash中
        hash[num] ? hash[num]++ : hash[num] = 1;
    }
    return hash[target] || 0;
}

//方法三：双指针
var search = function(nums, target){
    let left = 0, right = nums.length - 1;
    while(nums[left] < target) left++;
    while(nums[right] > target) right--;

    return right - left >= 0 ? right - left + 1 : 0;  
}
