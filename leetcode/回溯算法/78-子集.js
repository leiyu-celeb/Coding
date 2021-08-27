/* 78. 子集
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。


示例 1：
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

示例 2：
输入：nums = [0]
输出：[[],[0]]
 
提示：
1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];

    const dfs = function(index, path) {
        if(index === nums.length){
            result.push(path.slice());
            return;
        }
        path.push(nums[index]);
        dfs(index + 1, path);
        path.pop();
        dfs(index + 1, path);
    }
    dfs(0, []);
    return result;
};


const subsets = (nums) => {
    const res = [];
  
    const dfs = (index, list) => {
      res.push(list.slice());     // 调用子递归前，加入解集
      for (let i = index; i < nums.length; i++) { // 枚举出所有可选的数
        list.push(nums[i]);       // 选这个数
        dfs(i + 1, list);         // 基于选这个数，继续递归，传入的是i+1，不是index+1
        list.pop();               // 撤销选这个数
      }
    };
    dfs(0, []);
    return res;
};



//回溯算法   
const subsets = function(nums) {
    const res = [];

    const dfs = function(index, path) {
        res.push(path.slice());
        for(let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(i + 1, path);
            path.pop();
        }
    }
    dfs(0, []);
    return res;
}


const subsets = function(nums) {
    const res = [];

    const dfs = function(index, path) {
        res.push(path.slice());
        for(let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(i + 1, path);
            path.pop();
        }
    }

    dfs(0, []);
    return res;
}
