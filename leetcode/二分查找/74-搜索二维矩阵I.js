/* 74. 搜索二维矩阵

编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
1）每行中的整数从左到右按升序排列。
2）每行的第一个整数大于前一行的最后一个整数。

提示：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-10^4 <= matrix[i][j], target <= 10^4
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 二分查找：两次二分查找，一次确定左侧边界，一次二分查找元素
var searchMatrix = function(matrix, target) {
    let rowIndex = searchMatrixFirstColumn(matrix, target);
    if(rowIndex < 0) return false;
    return searchMatrixRow(matrix[rowIndex], target);
};

const searchMatrixFirstColumn = function(matrix, target) {
    let left = -1;
    let right = matrix.length - 1;
    while(left < right){
        let mid = Math.floor((right - left + 1) / 2) + left;
        if(matrix[mid][0] <= target){
            left = mid;
        }else{
            right = mid - 1;
        }
    }
    return left;
}

const searchMatrixRow = function(matrix, target){
  let left = 0, right = matrix.length - 1;
  while(left <= right){
      let mid = Math.floor((right - left) / 2) + left;
      if(matrix[mid] === target){
          return true
      }else if(matrix[mid] < target){
          left = mid + 1;
      }else{
          right = mid - 1;
      }
  }
  return false;
}


