/* 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。


示例：
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
 
提示：
0 <= nums.length <= 50000
1 <= nums[i] <= 10000 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    return nums.sort((a, b) => b % 2 - a % 2);
};

var exchange = function(nums) {
    let numsLength = nums.length
    // 左指针
    let left = 0
    // 右指针
    let right = numsLength - 1
    let temp
    // 循环遍历
    while(left <= right){
        // 左指针寻找偶数，如果是奇数，指针进 1
        if(nums[left] % 2 === 1){
            left ++
            continue
        }
        // 右指针寻找奇数，如果是偶数，指针退 1
        if(nums[right] % 2 === 0){
            right --
            continue
        }
        // 如果左指针指着偶数，右指针指着奇数，对应的值互换
        temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        // 值互换后，同时移动左右指针
        right --
        left ++
    }
    return nums
};

let nums = [1,2,3,4];
console.log(exchange(nums));