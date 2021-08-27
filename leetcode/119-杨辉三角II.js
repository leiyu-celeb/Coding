/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const ans = [];
    for(let i = 0; i <= rowIndex; i++){
        const row = new Array(i + 1).fill(1);
        for(let j = 1; j < row.length - 1; j++){
            row[j] = ans[i - 1][j -1] + ans[i - 1][j];
        }
        ans.push(row);
    }
    return ans[rowIndex];
};

console.log(getRow(0));