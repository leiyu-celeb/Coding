/* 剑指 Offer 50. 第一个只出现一次的字符
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例:

s = "abaccdeff"
返回 "b"

s = "" 
返回 " "
 

限制：

0 <= s 的长度 <= 50000 */

/**
 * @param {string} s
 * @return {character}
 */
//方法一：哈希法
var firstUniqChar = function(s) {
    let temp = {};
    for(let item of s) {
        if(!temp[item]){
            temp[item] = 1;
        }else{
            temp[item]++;
        }
    }
    for(let item of s) {
        if(temp[item] === 1) {
            return item;
        }
    }
    return " ";
};

//方法二：库函数 使用哈希表存储频数
var firstUniqChar = function(s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        if (frequency[ch] === 1) {
            return ch;
        }
    }
    return ' ';
};


