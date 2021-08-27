/* 5. 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：
输入：s = "cbbd"
输出："bb"

示例 3：
输入：s = "a"
输出："a"

示例 4：
输入：s = "ac"
输出："a"
 
提示：
1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = "";
    for(let i = 0; i < s.length; i++){
        let s1 = palindrome(s, i, i);
        let s2 = palindrome(s, i, i + 1);
        result = result.length > s1.length ? result : s1;
        result = result.length > s2.length ? result : s2;
    }
    return result;
};

const palindrome = function(s, l ,r) {
    while(l >= 0 && r < s.length && s[l] == s[r]){
        l--;
        r++;
    }
    return s.substr(l + 1, r - l - 1);
}

let s = "babad";

console.log(longestPalindrome(s));

var longestPalindrome = function(s) {
    let result = "";
    for(let i = 0; i < s.length; i ++) {
        let s1 = palindrome(s, i, i);
        let s2 = palindrome(s, i, i + 1);
        result = result.length > s1.length ? result : s1;
        result = result.length > s2.length ? result : s2;
    }
    return result;
}

const palindrome = function(s, l, r) {
    while(l >= 0 && r < s.length && s[l] == s[r]) {
        l--;
        r++;
    }
    return s.substr(l + 1, r - l - 1);
}

