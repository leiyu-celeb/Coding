/* 200. 岛屿数量
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
此外，你可以假设该网格的四条边均被水包围。

 
示例 1：
输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1

示例 2：
输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
 

提示：
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 的值为 '0' 或 '1'
*/


/* DFS为什么要沉岛?
遍历遇到 1 就是遇到土地，它肯定在一个岛上，统计计数 +1
如果不把它和同在一个岛的 1 变成 0，则DFS重复遍历到它们时，会对一个岛重复计数
怎么找出同处一岛的所有 1
DFS，从当前 1 为入口
DFS 做的事情：
将当前的 1 变 0
当前坐标的上下左右都递归 DFS，同处一个岛的 1 都变 0
dfs 出口：超出矩阵边界，或遇到 0，不用沉岛，直接返回 
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
//方法一：DFS
const numIslands = function(grids) {
    let count = 0;
    for(let i = 0; i < grids.length; i++) {
        for(let j = 0; j < grids[0].length; j++) {
            if(grids[i][j] === '1') {
                count++;
                turnZero(i, j, grids);
            }
        }
    }
    return count;
}

function turnZero(i, j, grids) {
    if(i < 0 || i >= grids.length || j < 0 || j >= grids[0].length || grids[i][j] === '0') return ;
    grids[i][j] = '0';
    turnZero(i, j + 1, grids);
    turnZero(i, j - 1, grids);
    turnZero(i + 1, j, grids);
    turnZero(i - 1, j, grids);
}

var numIslands = function(grids) {
  let count = 0;
  for(let i = 0; i < grids.length; i++) {
    for(let j = 0; j < grids[0].length; j++) {
      if(grids[i][j] === '1') {
        count++;
        turnZero(i, j, grids);
      }
    }
  }
  return count;
}

function turnZero(i, j, grids) {
  if(i < 0 || i > grids.length || j < 0 || j > grids[0].length) return ;
  grids[i][j] = '0';
  turnZero(i + 1, j, grids);
  turnZero(i - 1, j, grids);
  turnZero(i, j + 1, grids);
  turnZero(i, j - 1, grids);
}






/*
遇到 1 就计数 +1
维护一个队列，遇到 1 就让它的坐标入列
节点出列，并考察四个方向，如果是 1，将它转为 0，并将节点入列
如果越界了或遇到 0 ，则跳过不用入列
出列...入列...直到没有可以入列的节点，则当前岛屿的所有 1 都转 0 了
*/

//方法二：BFS
const numIslands = (grid) => {
    let count = 0
    let queue = []
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '1') {
          count++
          grid[i][j] = '0' // 做标记，避免重复遍历
          queue.push([i, j])
          turnZero(queue, grid)
        }
      }
    }
    return count
  }
  function turnZero(queue, grid) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    while (queue.length) {
      const cur = queue.shift()
      for (const dir of dirs) {
        const x = cur[0] + dir[0]
        const y = cur[1] + dir[1]
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {
          continue
        }
        grid[x][y] = '0'
        queue.push([x, y])
      }
    }
  }



