/** 2020/12/27
 * 48-旋转图像 (同 面试题0107-转矩阵)
 * 顺时针旋转90度
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let temp = 0;
    for(let i = 0; i < row; i++){
        for(let j = 0; j <= i; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let item of matrix){
        item.reverse()
    }
    console.log(matrix);
};

 
let matrix = [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ];

rotate(matrix);