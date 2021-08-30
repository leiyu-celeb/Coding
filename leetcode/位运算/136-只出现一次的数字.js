/**
 * @param {number[]} nums
 * @return {number}
 */

//方法一：哈希法， 时间复杂度O(n)，空间复杂度O(n)
 var singleNumber = function(nums) {
    const map = new Map();
    const len = nums.length;
    for(let i = 0; i < len; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1);
        }else{
            let count = map.get(nums[i]);
            map.set(nums[i], ++count);
        }
    }
    for(let i = 0; i < len; i++){
        if(map.get(nums[i]) === 1){
            return nums[i];
        }
    }
};

//方法二：位运算，时间复杂度O(n)，空间复杂度O(1)
//思路：数组中的全部元素的异或运算结果即为 数组中只出现一次的数字
var singleNumber = function(nums) {
    let single = 0;
    for(let num of nums){
        single ^= num;
    }
    return single;
}


let nums =  [4,1,2,1,2];

console.log(singleNumber(nums));
