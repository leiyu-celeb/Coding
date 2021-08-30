/* 59. 螺旋矩阵 II
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，
且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。 

示例 1：
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]

示例 2：
输入：n = 1
输出：[[1]]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    //初始化n * n的二维矩阵
    const arr = new Array(n).fill(null).map(item => item = new Array(n).fill(null));
    //定义四个边界点
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    let count = 1;
    while(left <= right && top <= bottom) {
        for(let column = left; column <= right; column++){         //上边
            arr[top][column] = count++;
        }
        for(let row = top + 1; row <= bottom; row++){       //右边
            arr[row][right] = count++;
        }
        if(left < right && top < bottom){
            for(let column = right - 1; column > left; column--) {        //下边
                arr[bottom][column] = count++;
            }
            for(let row = bottom; row > top; row--){         //左边
                arr[row][left] = count++;
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return arr;
};
