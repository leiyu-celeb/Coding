/* leetcode 76. 最小覆盖子串
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

示例 1：
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"

示例 2：
输入：s = "a", t = "a"
输出："a"
 

提示：
1 <= s.length, t.length <= 10^5
s 和 t 由英文字母组成
 
进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const need = {};    //存字符串t中的各字母的出现次数
    const window = {};  //存当前滑动窗口内的字母出现次数
    for(let item of t){
        if(!need[item]){
            need[item] = 1;
        }else{
            need[item]++;
        }
    }
    let need_length = Object.keys(need).length;    //获得t字符串共有几种字母
    let left = 0, right = 0;
    let valid = 0;  //符合条件的字母个数
    let start = 0;  
    let len = Infinity; 
    while(right < s.length){
        let current = s[right];  //窗口右边开始扩张
        right++;
        window[current] ? window[current]++ : window[current] = 1;  //window存在current字母则+1，否则初始化为1 
        if(need[current] == window[current]){  //如果current字母在滑动窗口内已经达标 
            valid++;        //有效字母数+1
        }
        while(valid === need_length){   //当有效字母数达到指定要求时，获得一个可行解，但是可能不是最优解，需要优化
            if(right - left < len){   //更新最小覆盖子串
                start = left;      //最小覆盖子串起始点
                len = right - left;      //最小覆盖子串长度
            }
            let now = s[left];    //窗口左边开始收缩  
            left++;
            if(need[now]){  //now字母出现在need中
                if(window[now] === need[now]){   //且已经满足要求，这个时候移除意味着该字母变成不满足要求，valid -1
                    valid--;
                }
                window[now]--;
            }
        }
    }
    return len == Infinity ? "" : s.substr(start, len);
};



var minWindow = function(s, t){
    let need = {};
    let window = {};
    for(let item of t){
        if(!need[item]){
            need[item] = 1;
        }else{
            need[item]++;
        }
    }
    let need_length = Object.keys(need).length;
    let left = 0, right = 0;
    let valid = 0;
    let start = 0;
    let len = Infinity;
    while(right < s.length){
        let current = s[right];
        right++;
        window[current] ? window[current]++ : window[current] = 1;
        if(window[current] === need[current]){
            valid++;
        }
        while(valid === need_length){
            if(right - left < len){
                start = left;
                len = right - left; 
            }
            let now = s[left];
            left++;
            if(need[now]){
                if(window[now] === need[now]){
                    valid--
                }
                window[now]--;
            }
        }
    }
    return len === Infinity ? "" : s.substr(start, len);
}




let s = "cacaaabacbcccccbabcaa"
let t = "bbabcbc"

console.log(minWindow(s,t));

