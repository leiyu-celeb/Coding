/* 剑指 Offer 38. 字符串的排列

输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。


示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
 

限制：

1 <= s 的长度 <= 8 */


/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const res = new Set();
    const visit = {};
    function dfs(path) {
        if(path.length === s.length) return res.add(path)
        for (let i = 0; i < s.length; i++) {
            if (visit[i]) continue
            visit[i] = true
            dfs(path + s[i])
            visit[i] = false
        }
    }
    dfs('')
    return [...res]
};

let s = "aab";

console.log(permutation(s));