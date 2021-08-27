/* 剑指 Offer 47. 礼物的最大价值

在一个 m * n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。

你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。

给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

 

示例 1:

输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
 

提示：

0 < grid.length <= 200
0 < grid[0].length <= 200 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxValue = function(grid) {
    const rows = grid.length;
    const columns = grid[0].length;
    const dp = new Array(rows).fill(0).map(item => item = new Array(columns).fill(0));
    dp[0][0] = grid[0][0];
    for(let i = 1; i < rows; i++) {
        dp[i][0] = grid[i][0] + dp[i - 1][0];
    }
    for(let i = 1; i < columns; i++) {
        dp[0][i] = grid[0][i] + dp[0][i - 1];
    }
    for(let i = 1; i < rows; i++) {
        for(let j = 1; j < columns; j++) {
            dp[i][j] = grid[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[rows - 1][columns - 1];
};