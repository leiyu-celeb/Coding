/* 67. 二进制求和        春招实习，字节跳动二面面试题，当时做出来了

给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

 
示例 1:

输入: a = "11", b = "1"
输出: "100"

示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。 */


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, 0);
    b = b.padStart(maxLen, 0);
 
    let carry = 0; //进位
    let t = 0;
    let sum = "";

    for(let i = maxLen - 1; i >= 0; i--) {
        t = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(t / 2);
        sum = t % 2 + sum;
    }
    if(carry > 0) {
        sum = carry + sum;
    }
    return sum;
};


let a = "1010", b = "1011";

console.log(addBinary(a, b));