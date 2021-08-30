/* 2020/12/28
54. 螺旋矩阵I
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]

示例 2:
输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7] 
*/


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//方法一：模拟层
var spiralOrder = function(matrix) {
  if(!matrix.length === 0 || !matrix[0].length){
      return [];
  }
  let rows = matrix.length, columns = matrix[0].length;
  let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
  let result = [];
  while(left <= right && top <= bottom) {
      for(let column = left; column <= right; column++){          //上边
          result.push(matrix[top][column]);
      }
      for(let row = top + 1; row <= bottom; row++) {         //右边
          result.push(matrix[row][right]);
      }
      if(left < right && top < bottom) {
          for(let column = right - 1; column > left; column--) {      //底边
              result.push(matrix[bottom][column]);
          }
          for(let row = bottom; row > top; row--) {         //左边
              result.push(matrix[row][left]);
          }
      }
      [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];     //对下一层遍历
  }
  return result;
};

let matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ];

console.log(spiralOrder(matrix));






