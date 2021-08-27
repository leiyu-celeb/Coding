/* 240. 搜索二维矩阵 II
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。


输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true

输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false
 

提示：

m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-10^9 <= matix[i][j] <= 10^9
每行的所有元素从左到右升序排列
每列的所有元素从上到下升序排列
-10^9 <= target <= 10^9
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//方法一：两重循环暴力搜索
// var searchMatrix = function(matrix, target) {
//     if(!matrix.length || !matrix[0].length) return false;
//     let rows = matrix.length, columns = matrix[0].length;
//     for(let i = 0; i < rows; i++) {
//         for(let j = 0; j < columns; j++) {
//             if(matrix[i][j] === target){
//                 return true;
//             }
//         }
//     }
//     return false;
// };


var searchMatrix = function(matrix, target) {
    if(!matrix.length || !matrix[0].length) return false;          //判空
    let [x, y] = [matrix[0].length - 1, 0];             // 初始化位置
    while(x >= 0 && y < matrix.length){
        if(matrix[y][x] > target){
            x--;
        }else if(matrix[y][x] < target){
            y++;
        }else{
            return true;
        }
    }
    return false;
};
