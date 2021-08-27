/* 剑指 Offer 05. 替换空格
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."
 

限制：

0 <= s 的长度 <= 10000 */

/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    var reg = /\s/g;
    return s.replace(reg, "%20");
};



let s = "We are happy."
console.log(replaceSpace(s));