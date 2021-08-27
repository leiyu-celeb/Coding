/* 面试题 08.08. 有重复字符串的排列组合
有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。

示例1:

输入：S = "qqe"
输出：["eqq","qeq","qqe"]

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
    let arr = S.split('').sort();        //字符数组，按字典序排序
    let res = [];           //结果集
    function dfs(path, store) {
        if (store.length === 0) {
            res.push([...path]);
            return ;
        }
        // 【关键1】只需要循环未遍历的元素集合
        for (let i = 0; i < store.length; i++) {
            // 【关键2】如果该元素和上一次遍历的元素重复则跳过
            if (store[i] === store[i - 1]) continue;
            path.push(store[i]);
            dfs(path, store.filter((_,idx) => idx !== i));
            path.pop();
        }
    }
    dfs([], arr);
    return res.map(item => item.join(''));
};
