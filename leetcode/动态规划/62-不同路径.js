/* 62. 不同路径

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？ 

*/




/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//方法一：动态规划
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(item => item = new Array(n).fill(0));       //初始化m * n 阶矩阵
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1;         
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];           //状态转移方程
        }
    }
    return dp[m - 1][n - 1];
};


var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(item => item = new Array(n).fill(0));
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}


var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(item => item = new Array(n).fill(0));
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}




// 方法二：组合数学
// 从左上角到右下角的过程中，我们需要移动 m+n-2 次，其中有 m-1 次向下移动，n-1 次向右移动。
// 因此路径的总数，就等于从 m+n-2 次移动中选择 m-1 次向下移动的方案数
var uniquePaths = function(m, n) {
    let ans = 1;
    for (let x = n, y = 1; y < m; ++x, ++y) {
        ans = Math.floor(ans * x / y);
    }
    return ans;
};
