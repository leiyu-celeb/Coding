/* 面试题 01.06. 字符串压缩
字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。

比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

示例1:

输入："aabcccccaaa"
输出："a2b1c5a3"

示例2:

输入："abbccd"
输出："abbccd"
解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。 */

/**
 * @param {string} S
 * @return {string}
 */
//方法：双指针
var compressString = function(S) {
    let ans = "";
    let i = 0, j = 0;          //i指向每一段的起始点，j指向每一段的结束点，j - i + 1为出现次数
    while(j < S.length - 1) {
        if(S[j] != S[j + 1]) {
            ans += S[i] + (j - i + 1);      //每次j走到一段的结束点，就拼接字符串
            i = j + 1;         //更新i为下一段起始点
        }
        j++;
    }

    ans += S[i] + (j - i + 1);          //拼接最后一段
    if(ans.length < S.length) {
        return ans;
    } else {
        return S;
    }
};


let str = "aabcccccaaa";

console.log(compressString(str));