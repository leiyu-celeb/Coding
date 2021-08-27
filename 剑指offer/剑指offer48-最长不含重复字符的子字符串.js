/* 剑指 Offer 48. 最长不含重复字符的子字符串
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 

提示：

s.length <= 40000
注意：本题与主站 3 题相同：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/ */


/**
 * @param {string} s
 * @return {number}
 */
//滑动窗口算法
var lengthOfLongestSubstring = function(s) {
    let window = {};
    let left = 0, right = 0;
    let maxLen = 0;
    while(right < s.length) {
        let current = s[right];
        window[current] ? window[current]++ : window[current] = 1;
        right++;

        while(window[current] > 1) {
            let now = s[left];
            left++;
            window[now]--;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
};