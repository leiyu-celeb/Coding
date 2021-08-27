// 写一个程序按箭头顺序在下面矩阵中填入对应数据  (30分)

// 写一个函数，接收一个整数，返回按箭头顺序从1累加的二维数组。
// 例如输入“3”，返回“[[null,null,3],[null,4,2],[5,6,1]]”

var triangleLoop = function(n) {
    //生成n * n的二维矩阵
    const arr = new Array(n).fill(null).map(item => item = new Array(n).fill(null));
    //生成四个顶点坐标
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



