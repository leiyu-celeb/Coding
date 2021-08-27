/*  2020/12/27
205. 同构字符串
给定两个字符串 s 和 t，判断它们是否是同构的。
如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。\
所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

示例 1:
输入: s = "egg", t = "add"
输出: true

示例 2:
输入: s = "foo", t = "bar"
输出: false

示例 3:
输入: s = "paper", t = "title"
输出: true

说明:
你可以假设 s 和 t 具有相同的长度。 
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//方法一：
var isIsomorphic = function(s, t) {
    const map = new Map();     
    let length = s.length;
    let count = 0;        
    for(let i = 0; i < length; i++){    //添加s[i] => t[i] 键值对
        if(!map.has(s[i]) && ![...map.values()].includes(t[i])){   //键名第一次出现, 同时键值也是第一次出现
            map.set(s[i], t[i]); //加入map中
            count++;     //count加一
        }else if(map.has(s[i]) && map.get(s[i]) == t[i]){  //已存在的键名并同时键值也一样
            count++;
        }else{
            count--;
        }
    }
    if(count == length){
        return true;
    }else{
        return false;
    }
};



//方法二：利用哈希的思想
var isIsomorphic = function (s, t) {
    const s2t = {};
    const t2s = {};
    let len = s.length;
    for(let i = 0; i < len; i++){
        let x = s[i], y = t[i];
        if(s2t[x] && s2t[x] !== y  || t2s[y] && t2s[y] !== x){ //产生了冲突，即不是同构字符串
            return false;
        }
        s2t[x] = y;
        t2s[y] = x;
    }
    return true;
}


//方法三：索引indexOf 或者 lastIndexOf
var isIsomorphic = function(s, t) {
    for (let i = 0; i < s.length; i++)
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
    return true
};





let s = "aba", t = "baa";

console.log(isIsomorphic(s, t));