/* 2020/12/29
1684. 统计一致字符串的数目

给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。
如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串 。
请你返回 words 数组中 一致字符串 的数目。

示例 1：
输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
输出：2

解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b' 。 
*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// var countConsistentStrings = function(allowed, words) {
//     let len = words.length;
//     let count = 0;
//     for(let item of words){  //遍历words数组里的每一个字符串
//         let item_len = item.length;     
//         for(let i = 0; i < item_len; i++){   //对每个字符串，都逐字母判断是否存在于allowed字符串中 
//             if(!allowed.includes(item[i])){    //不存在，直接跳过该字符串
//                 break;
//             }
//             if(i == item_len - 1){
//                 count++;
//             }
//         }
//     }
//     return count;
// };


//方法二： 
var countConsistentStrings = function (allowed, words) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      let allIn = words[i].split('').every(item => allowed.indexOf(item) !== -1);
      allIn && count++;  //allIn为真时，count才会加一
    }
    return count;
  };
  
  
  
  

// let allowed = "ab", words = ["ad","bd","aaab","baa","badab"];
let allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"];

console.log(countConsistentStrings(allowed, words));