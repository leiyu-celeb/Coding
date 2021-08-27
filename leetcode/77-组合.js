/* 77. 组合
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
] */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    const dfs = function(start, path) {  // start是枚举选择的起点 path是当前构建的路径（组合）
        if(path.length == k){
            result.push(path.slice());    // 拷贝一份path，加入result
            return ;
        }
        for(let i = start; i <= n; i++){      //枚举所有选择
            path.push(i);      //做选择
            dfs(i + 1, path);   //向下继续选择
            path.pop();        //撤销选择
        }
    }    
    dfs(1, []);            //递归的入口，start从1开始
    return result;
};