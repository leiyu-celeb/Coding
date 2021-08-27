/* 2021/1/5

830. 较大分组的位置
在一个由小写字母构成的字符串 s 中，包含由一些连续的相同字符所构成的分组。
例如，在字符串 s = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。
分组可以用区间 [start, end] 表示，其中 start 和 end 分别表示该分组的起始和终止位置的下标。上例中的 "xxxx" 分组用区间表示为 [3,6] 。
我们称所有包含大于或等于三个连续字符的分组为 较大分组 。
找到每一个 较大分组 的区间，按起始位置下标递增顺序排序后，返回结果。

示例 1：
输入：s = "abbxxxxzzy"
输出：[[3,6]]
解释："xxxx" 是一个起始于 3 且终止于 6 的较大分组。

示例 2：
输入：s = "abc"
输出：[]
解释："a","b" 和 "c" 均不是符合要求的较大分组。

示例 3：
输入：s = "abcdddeeeeaabbbcd"
输出：[[3,5],[6,9],[12,14]]
解释：较大分组为 "ddd", "eeee" 和 "bbb"

示例 4：
输入：s = "aba"
输出：[]
 
提示：
1 <= s.length <= 1000
s 仅含小写英文字母 
*/

/**
 * @param {string} s
 * @return {number[][]}
 */
//方法一：遍历字符串各字符并记录出现的位置
// var largeGroupPositions = function(s) {
//     let result = [];      //存放最后结果的数组
//     let len = s.length;   //字符串长度
//     let arr = [];         //遍历时保存每个字母(元素)连续出现的区间
//     arr.push(0);       //第0个元素先放入arr数组中
//     for(let i = 1; i < len; i++){ //从第一个元素开始遍历
//         if(s[i-1] == s[i] && i != len - 1 ){        //相邻元素相同，继续把索引插入当前的arr
//             arr.push(i);           
//         }else if(s[i - 1] != s[i]){              //若不相同，则把arr插入到result数组中，表示该字母已经中断
//             result.push(arr);      
//             arr = [];                //置空arr数组
//             arr.push(i);             //不同的字母把索引插入新的arr数组中
//         }else{  // 当字符串只有一个字母的情况，保证arr加入到数组result中
//             arr.push(i);
//             result.push(arr);
//         }
//     }
//     //过滤掉result数组中元素长度小于3的元素，并取每个元素的首尾
//     return result.filter(item => item.length >= 3).map(item => item = [item[0], item[item.length - 1]]); 
// };



//LeetCode-Solution
// var largeGroupPositions = function(s) {
//     const ret = [];
//     const n = s.length;
//     let num = 1;
//     for (let i = 0; i < n; i++) {
//         if (i === n - 1 || s[i] !== s[i + 1]) {
//             if (num >= 3) {
//                 ret.push([i - num + 1, i]);
//             }
//             num = 1;
//         } else {
//             num++;
//         }
//     }
//     return ret;
// };

//方法三：正则表达式
var largeGroupPositions = function(s) {
    let result = [];
    let temp;
    let g = s.matchAll(/([a-z])\1{2,}/g);
    while(temp = g.next().value){
        result.push([temp.index, temp.index + temp[0].length -1]);
    }
    return result;
};



let s = "abcdddeeeeaabbbcd"


console.log(largeGroupPositions(s));


