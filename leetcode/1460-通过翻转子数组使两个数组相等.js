/* 2020/12/28
1460. 通过翻转子数组使两个数组相等
给你两个长度相同的整数数组 target 和 arr 。
每一步中，你可以选择 arr 的任意 非空子数组 并将它翻转。你可以执行此过程任意次。
如果你能让 arr 变得与 target 相同，返回 True；否则，返回 False 。

示例 1：
输入：target = [1,2,3,4], arr = [2,4,1,3]
输出：true

解释：你可以按照如下步骤使 arr 变成 target：
1- 翻转子数组 [2,4,1] ，arr 变成 [1,4,2,3]
2- 翻转子数组 [4,2] ，arr 变成 [1,2,4,3]
3- 翻转子数组 [4,3] ，arr 变成 [1,2,3,4]
上述方法并不是唯一的，还存在多种将 arr 变成 target 的方法。 

*/


/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
//方法一： 对两个数组进行排序后转字符串，判断是否相等
// var canBeEqual = function(target, arr) {
    
//     return  target.sort((a, b) => a - b).toString() == arr.sort((a, b) => a - b).toString();

// };


//方法二：
// var canBeEqual = function(target, arr) {
//     target.sort(function(a, b){return a - b});
//     arr.sort(function(a, b){return a - b});

//     if(JSON.stringify(target) === JSON.stringify(arr)){
//         return true;
//     }else{
//         return false;
//     }
// };

//方法三：join()将数组转为字符串，时间和空间效率比toString()都要高
var canBeEqual = function(target, arr) {
    return  target.sort((a, b) => a - b).join("") == arr.sort((a, b) => a - b).join("");
};