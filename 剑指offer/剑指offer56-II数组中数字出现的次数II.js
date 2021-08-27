/* 剑指 Offer 56 - II. 数组中数字出现的次数 II

在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。


示例 1：

输入：nums = [3,4,3,3]
输出：4

示例 2：

输入：nums = [9,1,7,9,7,9,7]
输出：1
 

限制：

1 <= nums.length <= 10000
1 <= nums[i] < 2^31 */

/**
 * @param {number[]} nums
 * @return {number}
 */
//方法一：哈希法，两次遍历
var singleNumber = function(nums) {
    let temp = {};
    for(let num of nums) {
        if(!temp[num]) {
            temp[num] = 1;
        }else {
            temp[num]++;
        }
    }
    for(let num of nums) {
        if(temp[num] === 1) {
            return num;
        }
    }
};

//方法二：位运算
var singleNumber = function(nums) {
    let a = 0, b = 0;

    for (const num of nums) {
        a = a ^ num & ~b;
        b = b ^ num & ~a;
    }

    return a;
}


//方法三：哈希表
var singleNumber = function(nums) {
    const map = new Map();
    for (let num of nums) {
        if (map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    }

    for (let [num, times] of map.entries()) {
        if (times === 1) return num;
    }
};


