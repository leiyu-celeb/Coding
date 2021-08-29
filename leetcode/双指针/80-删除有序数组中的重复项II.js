/* 80. 删除有序数组中的重复项 II

给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//方法：双指针， 时间复杂度O(n)，空间复杂度O(1)
var removeDuplicates = function(nums) {
    const len = nums.length;
    if(len <= 2) return len;
    let slow = 2, fast = 2;
    while(fast < len) {
        if(nums[slow - 2] != nums[fast]){
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};

