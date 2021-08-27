/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
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
            for(let row = bottom; row > top; row--) {
                result.push(matrix[row][left]);
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return result;
};


let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

console.log(spiralOrder(matrix));


var spiralOrder = function(matrix) {
    if(!matrix.length === 0 || !matrix[0].length === 0) return [];
    let rows = matrix.length, columns = matrix[0].length;
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
    let result = [];
    while(left <= right && top <= bottom) {
        for(let column = left; column <= right; column++) {
            result.push(matrix[top][column]);
        }
        for(let row = top + 1; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        if(left < right && top < bottom) {
            for(let column = right - 1; column > left; column--) {
                result.push(matrix[bottom][column]);
            }
            for(let row = bottom; row > top; row--) {
                result.push(matrix[row][left]);
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return result;
}