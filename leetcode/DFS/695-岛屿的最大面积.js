/* 695. 岛屿的最大面积
给定一个包含了一些 0 和 1 的非空二维数组 grid 。

一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。

你可以假设 grid 的四个边缘都被 0（代表水）包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)

 

示例 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

示例 2:

[[0,0,0,0,0,0,0,0]]
对于上面这个给定的矩阵, 返回 0。

 

注意: 给定的矩阵grid 的长度和宽度都不超过 50 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
let area = 0;       //全局变量记录当前处理的岛屿面积
var maxAreaOfIsland = function(grid) {
    let res = [];         //记录每个岛屿的面积
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                turnZero(grid, i, j);
                res.push(area);       //递归结束，得到当前岛屿的面积area
                area = 0;            //处理完一个岛屿，area归零
            }
        }
    }
    if(res.length === 0) {
        return 0;
    }else{
        return Math.max(...res);
    }
};

var turnZero = function(grid, i, j) {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return ;
    grid[i][j] = 0;
    area++;
    turnZero(grid, i + 1, j);
    turnZero(grid, i - 1, j);
    turnZero(grid, i, j + 1);
    turnZero(grid, i, j - 1);
}
 

let grid = [[0,0,0,0,0,0,0,0]]

console.log(maxAreaOfIsland(grid));



