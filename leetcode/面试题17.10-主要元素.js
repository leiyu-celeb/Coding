/* 面试题 17.10. 主要元素
数组中占比超过一半的元素称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。

示例 1：

输入：[1,2,5,9,5,9,5,5,5]
输出：5
 
示例 2：

输入：[3,2]
输出：-1
 
示例 3：

输入：[2,2,1,1,1,2,2]
输出：2
 
说明：
你有办法在时间复杂度为 O(N)，空间复杂度为 O(1) 内完成吗？ */

/**
 * @param {number[]} nums
 * @return {number}
 */
//方法：摩尔投票法，摩尔投票法的核心就是比拼消耗。
//任意删除数组中两个不同的数，直至数组中不存在相同的数，那么剩下的数就是主要元素。
var majorityElement = function(nums) {
    let major = 0;
    let num = 0;

    for (let i = 0; i < nums.length; i++) {
        if (num === 0) {
            major = nums[i];
        }

        if (major === nums[i]) {
            num++;
        } else {
            num--;
        }
    }
    
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === major) {
            count++;
        }
    }
    if (count <= Math.floor(nums.length / 2)) {
        major = -1;
    }
    return major;
};