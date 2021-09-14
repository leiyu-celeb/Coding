/* 633. 平方数之和
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

示例 1：
输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5

示例 2：
输入：c = 3
输出：false

示例 3：
输入：c = 4
输出：true

示例 4：
输入：c = 2
输出：true

示例 5：
输入：c = 1
输出：true

提示：
0 <= c <= 2^31 - 1

*/

/**
 * @param {number} c
 * @return {boolean}
 */
//超时
// var judgeSquareSum = function(c) {
//     if(c === 0) return true;
//     let left = 0, right = c;
//     while(left <= right){
//         if(left * left + right * right === c) {
//             return true;
//         }else if(left * left + right * right < c){
//             left++;
//         }else if(left * left + right * right > c) {
//             right--;
//         }
//     }
//     return false;
// };


//通过：因为c的范围很大，只要在Math.sqrt(c)内找就行
var judgeSquareSum = function(c) {
    if(c === 0) return true;
    for(let i = 0; i * i <= c; i++) {          
        let j = Math.sqrt(c - i * i);
        if(j === Math.floor(j)) {
            return true;
        }
    }
    return false;
};

let c = 1;

console.log(judgeSquareSum(c));



