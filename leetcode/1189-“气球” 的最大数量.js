/* 2020/12/24 
1189. “气球” 的最大数量

给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。

字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。 
*/


/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let arr = [...text];
    let words = new Array(5).fill(0);     //记录 b,a,l,o,n字母出现次数
    for(let item of arr){
        if(item == 'a'){
            words[0]++;
        }else if(item == 'b'){
            words[1]++;
        }else if(item == 'l'){
            words[2] += 0.5;
        }else if(item == 'o'){
            words[3] += 0.5;
        }else{
            words[4]++;
        }
    }    
    //至此，words数组已经记录了"气球" 各字母的出现次数，只要找到数组的最小值取floor，即为ballon的最大数量
    words.sort(function(a, b){
        return a - b;
    })
    console.log(words);
    return Math.floor(words[0]);
};


// let text = "nlaebolko";
// let text = "loonbalxballpoon";
let text = "leetcode"

console.log(maxNumberOfBalloons(text));