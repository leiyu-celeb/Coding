/* 63. 不同路径 II
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
*/


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// const uniquePathsWithObstacles = (obstacleGrid) => {
//     if (obstacleGrid[0][0] == 1) return 0; // 出发点就被障碍堵住 
//     const m = obstacleGrid.length;
//     const n = obstacleGrid[0].length;
//     // dp数组初始化
//     const dp = new Array(m);
//     for (let i = 0; i < m; i++) dp[i] = new Array(n);
//     // base case
//     dp[0][0] = 1;                 // 终点就是出发点
//     for (let i = 1; i < m; i++) { // 第一列其余的case
//         dp[i][0] = obstacleGrid[i][0] == 1 || dp[i - 1][0] == 0 ? 0 : 1;
//     }
//     for (let i = 1; i < n; i++) { // 第一行其余的case
//         dp[0][i] = obstacleGrid[0][i] == 1 || dp[0][i - 1] == 0 ? 0 : 1;
//     }
//     // 迭代
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//         dp[i][j] = obstacleGrid[i][j] == 1 ?
//             0 :
//             dp[i - 1][j] + dp[i][j - 1];
//         }
//     }
//     return dp[m - 1][n - 1]; // 到达(m-1,n-1)的路径数
// };


const uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0] === 1) return 0;         //出发点被堵住
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    //dp数组初始化
    const dp = new Array(m).fill(0).map(item => new Array(n).fill(0));       //初始化m * n阶矩阵
    dp[0][0] = 1;
    for(let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1;     
    }
    for(let i = 1; i < n; i++) {
        dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1;
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}

