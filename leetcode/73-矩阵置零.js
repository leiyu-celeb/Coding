/* 73. 矩阵置零

给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

进阶：

一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个仅使用常量空间的解决方案吗？ */


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//方法一：标记数组法   时间复杂度O(mn)， 空间复杂度O(m + n)
var setZeroes = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    const row = new Array(m).fill(false);
    const column = new Array(n).fill(false);
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0){
                row[i] = true;
                column[j] = true;
            }
        }
    }
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(row[i] || column[j]){
                matrix[i][j] = 0;
            }
        }
    }
};


/* 方法二：使用两个标记变量
思路和算法:
    我们可以用矩阵的第一行和第一列代替方法一中的两个标记数组，以达到 O(1)的额外空间。但这样会导致原数组的第一行和第一列被修改，
    无法记录它们是否原本包含 0。因此我们需要额外使用两个标记变量分别记录第一行和第一列是否原本包含 0。在实际代码中，
    我们首先预处理出两个标记变量，接着使用其他行与列去处理第一行与第一列，然后反过来使用第一行与第一列去更新其他行与列，
    最后使用两个标记变量更新第一行与第一列即可。 
*/
var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false, flagRow0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
    }
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            flagRow0 = true;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (flagCol0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    if (flagRow0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
};
// 复杂度分析:
// 时间复杂度：O(mn)，其中m是矩阵的行数，n是矩阵的列数。我们至多只需要遍历该矩阵两次。
// 空间复杂度：O(1)，我们只需要常数空间存储若干变量。



// 方法三：使用一个标记变量
var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (flagCol0) {
            matrix[i][0] = 0;
        }
    }
};
