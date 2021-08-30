/* 2020/12/25
442. 数组中重复的数据

给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。

找到所有出现两次的元素。

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

示例：

输入:
[4,3,2,7,8,2,3,1]

输出:
[2,3] 

*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const s = new Set();
    let arr = [];
    for(let item of nums){
        if(s.has(item)){
            arr.push(item);
        }
        s.add(item);
    }
    return arr;
};

//不用额外的空间，并以O(n)时间复杂度解决
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    return nums.sort((a, b) => a - b).filter((item, i) => item == nums[i + 1]);
};

let nums = [4,3,2,7,8,2,3,1];

console.log(findDuplicates(nums));
