/* 2021/2/25
867. 转置矩阵
给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。



 

示例 1：

输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]
示例 2：

输入：matrix = [[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
-109 <= matrix[i][j] <= 109 */


/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const row = matrix.length;
    const column = matrix[0].length;
    const transposed = new Array(column).fill(0).map(() => new Array(row).fill(0));
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
};