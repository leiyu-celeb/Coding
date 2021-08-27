/* 438. 找到字符串中所有字母异位词
给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

说明：

字母异位词指字母相同，但排列不同的字符串。
不考虑答案输出的顺序。 */


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const need = {};
    const window = {};
    for(let item of p){
        if(!need[item]){
            need[item] = 1;
        }else{
            need[item]++;
        }
    }
    let left = 0, right = 0, valid = 0;
    let need_len = Object.keys(need).length;
    let result = [];
    while(right < s.length){
        let current = s[right];
        right++;
        window[current] ? window[current]++ : window[current] = 1;
        if(window[current] === need[current]){
            valid++;
        }
        while(right - left >= p.length){
            if(valid === need_len){
                result.push(left);      //只要当前窗口满足要求，把起始索引加入到结果数组中
            }
            let now = s[left];
            left++;
            if(need[now]){
                if(window[now] === need[now]){
                    valid--;
                }
                window[now]--;
            }
        }
    }
    return result;
};