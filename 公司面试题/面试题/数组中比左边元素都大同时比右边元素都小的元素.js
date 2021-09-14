/* 字节国际化电商 三面面试题

求数组中比左边元素都大同时比右边元素都小的元素，返回这些元素的索引

要求时间复杂度 O(N)

示例1:
输入：[2, 3, 1, 8, 9, 20, 12]
输出：3, 4
解释：数组中 8, 9 满足题目要求，他们的索引分别是 3、4 

*/


function find(nums) {
    const len = nums.length;
    const leftMax = new Array(len).fill(-Infinity), rightMin = new Array(len).fill(Infinity);
    const res = [];
    for(let i = 1; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], nums[i - 1]);
    }
    console.log(leftMax);
    for(let i = len - 2; i >= 0; i--) {
        rightMin[i] = Math.min(rightMin[i + 1], nums[i + 1]);
    }
    console.log(rightMin);
    for(let i = 0; i < len; i++) {
        if(leftMax[i] < nums[i] && nums[i] < rightMin[i]){
            res.push(i);
        }
    }
    return res;
}

let nums = [2, 3, 1, 8, 9, 20, 12];
console.log(find(nums));
