/* 面试题 08.04. 幂集
幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。

说明：解集不能包含重复的子集。

示例:

 输入： nums = [1,2,3]
 输出：
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let res = [];       //结果集

    function dfs(path, index) {
        res.push(path.slice());       //每次递归进入先添加当前path进入结果集
        for(let i = index; i < nums.length; i++) {
            path.push(nums[i]);     //选择一个元素加入到path中
            dfs(path, i + 1);   //递归
            path.pop();     //回溯
        }
    }

    dfs([], 0);     //递归入口
    return res;    
};