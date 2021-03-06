/* 2021/1/14
344. 反转字符串
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

 

示例 1：

输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]
示例 2：

输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"] */


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//方法一： Array.prototype.reverse()
var reverseString = function(s) {
    return s.reverse();
};

//方法二：双指针 + 解构赋值反转字符串
var reverseString = function(s) {
    let i = 0, j = s.length - 1;
    while(i < j){
        [ s[i], s[j] ] = [ s[j], s[i] ];   //ES6解构赋值的写法
        i++;
        j--;
    } 
    return s;
};

let s = ["h","e","l","l","o"];

console.log(reverseString(s));
