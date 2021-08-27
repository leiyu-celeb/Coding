


var triangleLoop = function(n) {
    const arr = new Array(n).fill(null).map(item => item = new Array(n).fill(null));
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    let count = 1;
    while(left <= right && top <= bottom) {
        for(let row = bottom; row >= top; row--){
            arr[row][right] = count++;
        }
        for(let row = top + 1, column = right - 1; row <= bottom, column >= left; row++, column--){
            arr[row][column] = count++;
        }
        for(let column = left + 1; column < right; column++) {
            arr[bottom][column] = count++;
        }
        [left, right, top, bottom] = [left + 2, right - 1, top + 2, bottom - 1];
    }
    return arr;
}


console.log(triangleLoop(6));