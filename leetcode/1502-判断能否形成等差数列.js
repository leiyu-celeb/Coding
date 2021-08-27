/* 2021/01/03
1502. 判断能否形成等差数列
给你一个数字数组 arr 。

如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。

如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。

 

示例 1：
输入：arr = [3,5,1]
输出：true
解释：对数组重新排序得到 [1,3,5] 或者 [5,3,1] ，任意相邻两项的差分别为 2 或 -2 ，可以形成等差数列。

示例 2：
输入：arr = [1,2,4]
输出：false
解释：无法通过重新排序得到等差数列。 */


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort( (a, b) => a - b);     //升序
    let len = arr.length;           //数组长度
    for(let i = 1; i < len - 1; i++){
        if(arr[i+1] - arr[i] != arr[i] - arr[i-1]){    //相邻的差不等
            return false;
        }
    }
    return true;
};


let arr = [2,10,7,8,3]
console.log(canMakeArithmeticProgression(arr));










