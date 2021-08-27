/* leetcode 3. 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

示例 4:
输入: s = ""
输出: 0
 
提示：
0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成 */

/**
 * @param {string} s
 * @return {number}
 */
//方法：滑动窗口法
var lengthOfLongestSubstring = function(s) {
    let window = {};
    let left = 0, right = 0;
    let maxLen = 0;
    while(right < s.length){
        let current = s[right];
        right++;
        window[current] ? window[current]++ : window[current] = 1;
        
        while(window[current] > 1){  //开始出现重复字母了
            let now = s[left];
            left++;
            window[now]--;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
};

let s = "abcabcbb";

console.log(lengthOfLongestSubstring(s));


var lengthOfLongestSubstring = function(s) {
    let window = {};
    let left = 0, right = 0;
    let maxLen = 0;
    while(rigth < s.length) {
        let current = s[right];
        right++;
        window[current] ? window[current]++ : window[current] = 1;

        while(window[current] > 1) {
            let now = s[left];
            left++;
            window[now]--;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
}


var lengthOfLongestSubstring = function(s) {
    const window = {};
    let left = 0, right = 0;
    let maxLen = 0;
    while(right < s.length) {
        let current = s[right];
        right++;
        window[current] ? window[current]++ : window[current] = 1;
        
        while(window[current] > 1) {
            let now = s[left];
            left++;
            window[now]--;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
}


var lengthOfLongestSubstring = function(s) {
    const window = {};
    let left = 0, right = 0;
    let maxLen = 0;
    while(right < s.length) {
        let current = s[right];
        right++;
        window[current] ? window[current]++ : window[current] = 1;

        while(window[current] > 1) {
            let now = s[left];
            left++;
            window[now]--;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
}
