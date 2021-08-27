/* 2020/12/25
剑指 Offer 03. 数组中重复的数字
找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：
输入：
[2, 3, 1, 0, 2, 5, 3]

输出：2 或 3  
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
//方法一：数组元素作为对象的键名
var findRepeatNumber = function(nums) {
    
    let temp = {};
    for(let item of nums){
        if(!temp[item]){
            temp[item] = 1;
        }else{
            temp[item]++;
        }
    }
    console.log(temp);
    for(let i in temp){
        if(temp[i] != 1){
            return i;
        }
    }
};

//方法二：set
var findRepeatNumber = function(nums) {
    let s = new Set();
    for(let item of nums){
        let preSize = s.size;
        s.add(item);
        if(s.size == preSize){
            return item;
        }
    }
};



let nums = [0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(findRepeatNumber(nums));

