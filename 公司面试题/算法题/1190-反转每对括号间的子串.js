/* 1190. 反转每对括号间的子串   4.14华为机试题
给出一个字符串 s（仅含有小写英文字母和括号）。
请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
注意，您的结果中 不应 包含任何括号。

 

示例 1：
输入：s = "(abcd)"
输出："dcba"

示例 2：
输入：s = "(u(love)i)"
输出："iloveu"

示例 3：
输入：s = "(ed(et(oc))el)"
输出："leetcode"

示例 4：
输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"
 
提示：
0 <= s.length <= 2000
s 中只有小写英文字母和括号
我们确保所有括号都是成对出现的 */

/**
 * @param {string} s
 * @return {string}
 */
/* 
初始化栈，栈顶元素为 ''
遇到 '(': 向栈顶压入空字符串
遇到 ')': 把栈顶的最后一个元素翻转 + 栈顶倒数第二个元素
遇到 字符: 直接将栈顶最后一个元素与它拼上 
*/
//栈的思想
var reverseParentheses = function(s) {
    let stack = [''];
    
    for (let i = 0, len = s.length; i < len; i++) {
      let c = s.charAt(i);
      if (c === '(') {
        stack.push( '' );
      } else if (c === ')') {
        let last = stack.pop();
        let temp = last.split('').reverse().join('');
        stack[stack.length - 1] += temp;
      } else {
        stack[stack.length - 1] += c;
      }
    }
    
    return stack.pop();
};