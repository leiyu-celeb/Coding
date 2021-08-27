/* 46. 全排列

给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
] 

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//写法一：
var permute = function(nums) {
    let result = [];      //结果集
    let used = {};
    const dfs = function(path){
        if(path.length === nums.length){     //个数选够了
            result.push(path.slice());      //拷贝一份path，加入结果集result
            return;
        }
        for(let num of nums){  //遍历可选的选项
            if(used[num]) continue;      //用过则跳过本次循环，排除不合法的选择
            path.push(num);       //没用过，做选择
            used[num] = true;     //标记为使用过
            dfs(path);            //递归，进入下一层决策树
            path.pop();           //上一句的递归结束，回溯，取消选择  
            used[num] = false;     //更新为未使用过
        }
    }
    dfs([]);
    return result;
};


var permute = function(nums) {
    const result = [];
    const used= {};
    const dfs = function(path) {
        if(path.length === nums.length) {
            result.push(path.slice());
            return ;
        }
        for(let num of nums) {
            if(used[num]) continue;
            path.push(num);
            used[num] = true;
            dfs(path);
            path.pop();
            used[num] = false;
        }
    }

    dfs([]);
    return result;
}

