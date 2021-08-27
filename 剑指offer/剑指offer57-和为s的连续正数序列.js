/* 剑指 Offer 57 - II. 和为s的连续正数序列
输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

 

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]

示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 

限制：

1 <= target <= 10^5 */



/**
 * @param {number} target
 * @return {number[][]}
 */
// 没有参照物数组 但是可以根据下标
// 滑动窗口（双指针）
var findContinuousSequence = function(target) {
    let left = 1;
    let right = 2;
    let sum = 3;
    let res = [];
    // 滑动窗口框架
    while(left < right){         
        if(sum === target){        //满足条件
            let ans =[];               //ans数组保存一个结果
            for(let i = left; i <= right; i++){    //连续加入到ans数组中
                ans.push(i);
            }
            res.push(ans);
            // 等于的情况 我们可以继续窗口往右搜索 同时缩小左边的
            sum = sum - left;
            left++;
        } else if(sum > target){
            // 大于的条件 缩小窗口 sum已经加过了
            sum = sum - left;
            left++;
        } else {
            // 小于的情况 滑动窗口继续扩大
            right++
            sum = sum + right;
        }
    }
    return res;
};
