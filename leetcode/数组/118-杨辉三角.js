/* 2021/1/10
118. 杨辉三角
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
] 
*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ans = [];
    for(let i = 0; i < numRows; i++){    
        const row = new Array(i + 1).fill(1);    //生成当前行 
        for(let j = 1; j < row.length - 1; j++){ 
            row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
        }
        ans.push(row);
    }
    return ans;
};


console.log(generate(5));