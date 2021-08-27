/* 47. 全排列 II

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：

输入：nums = [1,1,2]
输出：[[1,1,2], [1,2,1], [2,1,1]]

示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

提示：

1 <= nums.length <= 8
-10 <= nums[i] <= 10 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
    const res = [];
    const used = new Array(nums.length);
    nums.sort((a, b) => a - b); // 升序排序

    const dfs = (path) => {
        if (path.length == nums.length) { // 个数选够了
            res.push(path.slice());       // path的拷贝 加入解集
            return;                       // 结束当前递归分支
        }

        for (let i = 0; i < nums.length; i++) { // 枚举出所有的选择
            if (used[i]) {                      // 这个数使用过了，跳过。
                continue;
            }
            if (i - 1 >= 0 && nums[i - 1] == nums[i] && !used[i - 1]) { // 避免产生重复的排列
                continue;
            }
            path.push(nums[i]); // make a choice
            used[i] = true;     // 记录路径上做过的选择
            dfs(path);       // explore，基于它继续选，递归
            path.pop();         // undo the choice
            used[i] = false;    // 也要撤销一下对它的记录
        }
    };

    dfs([]);
    return res;
};


const permuteUnique = function(nums) {
    const res = [];
    const used = new Array(nums.length);
    nums.sort((a, b) => a - b);

    const dfs = function(path) {
        if(path.length === nums.length) {
            res.push(path.slice());
            return ;
        }
        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue;
            if(i - 1 >= 0 && nums[i - 1] === nums[i] && !used[i - 1]) continue;
            path.push(nums[i]);
            used[i] = true;
            dfs(path);
            path.pop();
            used[i] = false;
        }
    }
    dfs([]);
    return res;
}

const permuteUnique = function(nums) {
    const res = [];
    const used = new Array(nums.length);
    nums.sort((a, b) => a - b);

    const dfs = function(path) {
        if(path.length === nums.length) {
            res.push(path.slice());
            return ;
        }
        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue;
            if(i - 1 >= 0 && nums[i - 1] === nums[i] && !used[i - 1]) continue;
            path.push(nums[i]);
            used[i] = true;
            dfs(path);
            path.pop();
            used[i] = false;
        }
    }

    dfs([]);
    return res;
}
