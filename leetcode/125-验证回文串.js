/* 125. 验证回文串
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true

示例 2:

输入: "race a car"
输出: false 
*/


/**
 * @param {string} s
 * @return {boolean}
 */
//方法一：双指针 + 正则表达式
var isPalindrome = function(s) {
    let i = 0, j = s.length - 1;
    let reg = /[a-zA-Z0-9]/;               //正则表达式reg匹配字母和数字
    while(i < j) {
        if(!reg.test(s[i])){       //s[i]不为数字或字母，右移
            i++;            
            continue;
        }
        if(!reg.test(s[j])){      //s[j]不为数字或字母，左移
            j--;
            continue;
        }        
        if(s[i].toLowerCase() === s[j].toLowerCase()) {
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
};


let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));