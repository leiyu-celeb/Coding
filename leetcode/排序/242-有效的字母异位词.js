/* 242. 有效的字母异位词
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。


示例 1:

输入: s = "anagram", t = "nagaram"
输出: true

示例 2:

输入: s = "rat", t = "car"
输出: false
 

提示:

1 <= s.length, t.length <= 5 * 104
s 和 t 仅包含小写字母
 

进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Map
var isAnagram = function(s, t) {
    if(s.length !== t.length)  return false;
    const m = new Map();
    let temp = 0;
    for(let item of t){
        if(!m.has(item)){
            m.set(item, 1);
        }else{
            temp = m.get(item);
            m.set(item, ++temp);
        }
    }
    for(let str of s){
        if(m.has(str)){              //存在于hash map中
            temp = m.get(str);       //获得对应出现次数
            m.set(str, --temp);      //出现次数减一
            if(m.get(str) === 0){     //次数为0时删除这个键值对
                m.delete(str);
            }
        }
    }
    if(m.size != 0){
        return false;
    }else{
        return true;
    }
};

// 排序
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    return [...s].sort().join('') === [...t].sort().join('');
}


// 哈希
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let temp = {};
    for(let item of s){
        if(!temp[item]){
            temp[item] = 1;
        }else{
            temp[item]++;
        }
    }
    for(let item of t){
        if(temp[item]){
            temp[item]--;
            if(temp[item] === 0)         //次数为0时，删除这个键值对 
                delete temp[item];  
        }
    }
    return Object.keys(temp).length === 0
}


var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let temp = {};
    for(let item of t) {
        if(!temp[item]) {
            temp[item] = 1;
        }else{
            temp[item]++;
        }
    }
    for(let item of s) {
        if(temp[item]) {
            temp[item]--;
            if(temp[item] === 0) {
                delete temp[item];
            }
        }
    }
    return Object.keys(temp).length === 0;
}
























