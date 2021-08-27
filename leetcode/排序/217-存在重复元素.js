/* 217. 存在重复元素

给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
//方法一：哈希表
var containsDuplicate = function(nums) {
    let temp = {};
    for(let num of nums){
        if(!temp[num]){
            temp[num] = 1;
        }else{
            return true;
        }
    }
    return false;
};



//方法二：排序
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);     //升序
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]){
            return true;
        }
    }
    return false;
}



//方法三： ES6 Set 和 Map 
var containsDuplicate = function(nums) {
    let preLen = nums.length;
    let curLen = [...new Set(nums)].length;
    return preLen !== curLen;
}


