/* 461. 汉明距离
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 2^31.

示例:

输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。 */


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
//方法一：计数法，转为二进制字符串，补齐位数，移位比较
var hammingDistance = function(x, y) {
    x = x.toString(2);           //x, y转为2进制字符串
    y = y.toString(2);
    let maxLen = Math.max(x.length, y.length);
    x = x.padStart(maxLen, 0);            
    y = y.padStart(maxLen, 0);
    let distance = 0;
    for(let i = 0; i < maxLen; i++) {
        if(x[i] !== y[i]) {
            distance++;
        }    
    }
    return distance;
};



