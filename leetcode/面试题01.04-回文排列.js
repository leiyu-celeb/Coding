/* 面试题 01.04. 回文排列
给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

回文串不一定是字典当中的单词。

 

示例1：

输入："tactcoa"
输出：true（排列有"tacocat"、"atcocta"，等等） */


/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let temp = {};
    for(let i = 0; i < s.length; i++) {
        if(!temp[s[i]]) {
            temp[s[i]] = 1;
        }else{
            delete temp[s[i]];
        }
    }
    return Object.keys(temp).length <= 1;
};