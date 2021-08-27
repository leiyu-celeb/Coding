/* 15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。
 
示例 1：
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2], [-1,0,1]]

示例 2：
输入：nums = []
输出：[]

示例 3：
输入：nums = [0]
输出：[] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for(let i = 0; i < nums.length - 2; i++) {
        let n1 = nums[i];
        if(n1 > 0) break;
        if(i - 1 >= 0 && nums[i - 1] === n1) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            let n2 = nums[left];
            let n3 = nums[right];
            if(n1 + n2 + n3 === 0){
                result.push([n1, n2, n3]);
                while(left < right && nums[left] === n2) left++;
                while(left < right && nums[right] === n3) right--;
            }else if(n1 + n2 + n3 < 0){
                left++;
            }else{
                right--;
            }
        }
    }
    return result;
};

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for(let i = 0; i < nums.length - 2; i++) {
        let n1 = nums[i];
        if(n1 > 0) break;
        if(i >= 1 && n1 === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            let n2 = nums[left];
            let n3 = nums[right];

            if(n1 + n2 + n3 === 0) {
                res.push([n1, n2, n3]);
                
                while(left < right && nums[left] === n2) left++;
                while(left < right && nums[right] === n3) right--;
            }else if(n1 + n2 + n3 < 0) {
                left++;
            }else{
                right--;
            }
        }
    }
    return res;
}
