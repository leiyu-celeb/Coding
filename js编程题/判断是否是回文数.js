//方法一：转为字符串，再翻转字符串，判断和原字符串是否相等，相等则是回文数，不相等则不是回文数
// var isPalindrome = function(x) {
//     return x.toString().split("").reverse().join("") === x.toString();
// };


var a = 121;
var b = 12321;
var c = 12356;

console.log(isPalindrome(a));
console.log(isPalindrome(c));

//进阶：你能不将整数转为字符串来解决这个问题吗？

