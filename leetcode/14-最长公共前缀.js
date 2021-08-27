/* 14. 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：
0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成 */

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++){
        prefix = getCommonPrefix(prefix, strs[i]);
        if(prefix.length === 0){
            break;
        }
    }
    return prefix;
};


var getCommonPrefix = function(str1, str2) {
    let index = 0;
    let minLen = Math.min(str1.length, str2.length);
    while(index < minLen && str1[index] === str2[index]){
        index++;
    }
    return str1.substring(0, index);
}