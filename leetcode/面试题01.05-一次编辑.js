/* 面试题 01.05. 一次编辑

字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 

给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

示例 1:

输入: 
first = "pale"
second = "ple"
输出: True
 

示例 2:

输入: 
first = "pales"
second = "pal"
输出: False */

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
    let len1 = first.length, len2 = second.length;          //两个字符串的长度len1, len2
    if(Math.abs(len1 - len2) > 1) return false;             //长度相差超过1，必然不可能一次编辑得到
    let isContinue = true;         //因为只能做一次编辑
    for(let i = 0, j = 0; i < len1 && j < len2;){      //i, j分别扫描两个字符串
        if(first[i++] != second[j++]){            //first[i] !=== second[j] 时，这是i++, j++
            if(!isContinue) return false;        //如果这个时候isContinue已经为false了，那么直接返回false，因为不可能通过一次编辑相互转换
            isContinue = false;                 //第一次遇到不等，isContinue置为false
            if(len1 !== len2) {         //如果两个串长度不相等，那么要一次编辑，必然是相差一个字符，其他字符得完全一样
                len1 > len2 ? j-- : i--;     //len1大，j退一格，反之，i退一格
            }                
        }
    }
    return true;           //循环能出来，说明能一次编辑
};





