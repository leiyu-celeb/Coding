/* 20. 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true
 

提示：
1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];       //定义一个栈stack
    for(let item of s){
        if(item == '(' || item == '[' || item == '{'){  //遇到左括号，就进栈
            stack.push(item);
        }else{                //遇到了右括号
            if(stack.length  && getLeft(item) === stack[stack.length - 1]){  //栈不空 且 当前栈顶符号和遇到的右括号匹配
                stack.pop();         //出栈
            }else{
                return false;   //不匹配则括号无效
            }
        }
    }
    return stack.length === 0;      //遍历完成，栈为空时表示括号有效，否则无效
};

var getLeft = function(item){
    if(item === ')') return '(';
    if(item === ']') return '[';
    if(item === '}') return '{';
}



var isValid = function(s) {
    const stack = [];
    for(let item of s) {
        if(item === '(' || item === '[' || item === '{') {
            stack.push(item);
        }else{
            if(stack.length && getLeft(item) === stack[stack.length - 1]) {
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0;
};

var getLeft = function(str) {
    if(str === ')') return '(';
    if(str === ']') return '[';
    if(str === '}') return '{';
}
