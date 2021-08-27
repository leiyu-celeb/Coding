/* 219. 存在重复元素 II
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

 

示例 1:

输入: nums = [1,2,3,1], k = 3
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1
输出: true
示例 3:

输入: nums = [1,2,3,1,2,3], k = 2
输出: false */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();    
    for(let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], i);       //map中没有元素nums[i]
        }else{
            if(Math.abs(map.get(nums[i]) - i) <= k){        
                            //每次遇到哈希map中有的元素，那么判断索引差距是否小于等于k
                return true;
            }
            map.set(nums[i], i);      //如果相距超过k，那么更新当前的nums[i]的位置
        }
    }
    return false;
};

let nums = [1,2,3,1], k = 3
console.log(containsNearbyDuplicate(nums, k));

