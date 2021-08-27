/* 面试题 01.08. 零矩阵

编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

示例 1：

输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

示例 2：

输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
] 
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//方法一：标记数组法
var setZeroes = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let row = new Array(m).fill(false);
    let column = new Array(n).fill(false);

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                row[i] = true;
                column[j] = true;
            }
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(row[i] || column[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};
