/* 剑指 Offer 56 - I. 数组中数字出现的次数

一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

 

示例 1：

输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]

示例 2：

输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
 

限制：

2 <= nums.length <= 10000 */

/* 

算法：

1.先对所有数字进行一次异或，得到两个出现一次的数字的异或值。

2.在异或结果中找到任意为 1 的位。

3.根据这一位对所有的数字进行分组。

4.在每个组内进行异或操作，得到两个数字。

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//思路：位运算
var singleNumbers = function(nums) {
    let res = 0;
    for(let num of nums) {    //求数组所有元素的异或值，等价于得到只出现一次的两个数的异或值
        res = res ^ num;
    }
    let division = 1;
    while((division & res) === 0) {
        division = division << 1;       //找到第一位不是0
    }
    let a = 0, b = 0;
    for(let num of nums) {               //通过division将数组分为两组，每组分别有一个出现一次的数
        if( (num & division) !== 0) {
            a = a ^ num;             
        }else{
            b = b ^ num;
        }
    }
    return [a, b];
};

