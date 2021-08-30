/* 567. 字符串的排列
给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

示例 1：
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").

示例 2：
输入: s1= "ab" s2 = "eidboaoo"
输出: False
 
提示：
输入的字符串只包含小写字母
两个字符串的长度都在 [1, 10,000] 之间 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const need = {};
    const window = {};
    for(let item of s1){
        if(!need[item]){
            need[item] = 1;
        }else{
            need[item]++;
        }
    }
    let left = 0, right = 0;
    let valid = 0;
    let need_length = Object.keys(need).length;
    while(right < s2.length){
        let current = s2[right];
        right++;
        window[current] ? window[current]++ : window[current] = 1;
        if(need[current] == window[current]){
            valid++;
        }
        while(right -left >= s1.length){
            if(valid === need_length){
                return true;
            }
            let now = s2[left];
            left++;
            if(need[now]){
                if(window[now] === need[now]){
                    valid--;
                }
                window[now]--;
            }
        }
    }
    return false;
};

let s1 = "ab" , s2 = "eidbvabooo";


console.log(checkInclusion(s1, s2));


var checkInclusion = function(s1, s2){
    const need = {};
    const window = {};
    for(let item of s1){
        if(!need[item]){
            need[item] = 1;
        }else{
            need[item]++;
        }
    }
    let left = 0, right = 0, valid = 0;
    let need_length = Object.keys(need).length;
    while(right < s2.length){
        let current = s2[right];
        right++;
        window[current] ? window[current]++ : window[current] = 1;
        if(window[current] === need[current]) {
            valid++;
        }
        while(right - left >= s1.length){  //right - left等于s1.length时开始考虑是否要收缩
            if(valid === need_length){  //如果满足了要求
                return true;
            }
            let now = s2[left];
            left++;
            if(need[now]){
                if(window[now] === need[now]){
                    valid--;
                }
                window[now]--;
            }
        }
    }
    return false;
}