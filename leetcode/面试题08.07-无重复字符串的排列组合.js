/* 面试题 08.07. 无重复字符串的排列组合
无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。

示例1:

输入：S = "qwe"
输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]

示例2:

输入：S = "ab"
输出：["ab", "ba"]

提示:

字符都是英文字母。
字符串长度在[1, 9]之间。 */

/**
 * @param {string} S
 * @return {string[]}
 */
 var permutation = function(S) {
    const res = [];   //结果集
    
    function dfs(str) {
        
        if(str.length === S.length) {   // 符合字符串长度则收集
            res.push(str);
            return ;
        }
        for(let i = 0; i < S.length; i++) {
            // 去除重复字符，比如：字符串为'ab'， 去掉'aa'或'bb'这类情况
            if(str.indexOf(S[i]) !== -1) {
                continue;
            }

            // 递归：回溯的通用公式
            dfs(str+ S[i]);
        }
    }    
    
    dfs('');      //递归入口
    return res;
};

