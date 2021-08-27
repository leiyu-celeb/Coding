/* leetcode 821. 字符的最短距离
给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。

返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

 

示例 1：
输入：s = "loveleetcode", c = "e"
输出：[3,2,1,0,1,0,0,1,2,2,1,0]
解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 3 。
对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。

示例 2：
输入：s = "aaab", c = "b"
输出：[3,2,1,0]
 

提示：
1 <= s.length <= 104
s[i] 和 c 均为小写英文字母
题目数据保证 c 在 s 中至少出现一次 
*/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
/*  方法一：中心扩展法
    思路：
    这是最符合直觉的思路，对每个字符分别进行如下处理：
    1.从当前下标出发，分别向左、右两个方向去寻找目标字符 C。
    2.只在一个方向找到的话，直接计算字符距离。
    3.两个方向都找到的话，取两个距离的最小值。 
    复杂度分析；时间复杂度O(n^2)， 空间复杂度O(1)
*/
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    // 结果数组 res
    var res = Array(S.length).fill(0);
  
    for (let i = 0; i < S.length; i++) {
      // 如果当前是目标字符，就什么都不用做
      if (S[i] === C) continue;
  
      // 定义两个指针 l, r 分别向左、右两个方向寻找目标字符 C，取最短距离
      let l = i,
        r = i,
        shortest = Infinity;
  
      while (l >= 0) {
        if (S[l] === C) {
          shortest = Math.min(shortest, i - l);
          break;
        }
        l--;
      }
  
      while (r < S.length) {
        if (S[r] === C) {
          shortest = Math.min(shortest, r - i);
          break;
        }
        r++;
      }
  
      res[i] = shortest;
    }
    return res;
};
  


/* 解法 2：空间换时间
思路:
空间换时间是编程中很常见的一种 trade-off (反过来，时间换空间也是)。

因为目标字符 C 在 S 中的位置是不变的，所以我们可以提前将 C 的所有下标记录在一个数组 cIndices 中。

然后遍历字符串 S 中的每个字符，到 cIndices 中找到距离当前位置最近的下标，计算距离。

复杂度分析:
时间复杂度：O(N*K)O(N∗K)，N 是 S 的长度，K 是字符 C 在字符串中出现的次数，K <= NK<=N。
空间复杂度：O(K)O(K)，K 为字符 C 出现的次数，这是记录字符 C 出现下标的辅助数组消耗的空间。
 */
var shortestToChar = function(s, c) {
    let cIndices = [];   //数组cIndices存储字符串s中c字符出现的位置索引
    for(let i = 0; i < s.length; i++){
        if(s[i] === c){
            cIndices.push(i);
        }
    }
    let result = [];
    for(let i = 0; i < s.length; i++){
        var tmp = cIndices.slice();    //浅拷贝cIndices
        let minDistance = Math.min(...tmp.map((item) => Math.abs(item - i)));
        result.push(minDistance);  
    }
    return result;
}

let s = "loveleetcode" 
let c = "e"

console.log(shortestToChar(s, c));




