/* 剑指 Offer 04. 二维数组中的查找

在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。

请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

 
示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。
给定 target = 20，返回 false。

 
限制：

0 <= n <= 1000
0 <= m <= 1000

注意：本题与主站 240 题相同：https://leetcode-cn.com/problems/search-a-2d-matrix-ii/

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//方法一：两重循环暴力搜索
// var findNumberIn2DArray = function(matrix, target) {
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


var findNumberIn2DArray = function(matrix, target) {
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
}