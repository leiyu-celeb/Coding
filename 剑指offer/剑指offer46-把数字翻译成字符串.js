/* 剑指 Offer 46. 把数字翻译成字符串

给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。

请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

 

示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
 

提示：

0 <= num < 2^31 

*/

/**
 * @param {number} num
 * @return {number}
 */
//方法一：递归，DFS
var translateNum = function(num) {
    let str = num.toString();

    const dfs = function(str, index) {       // 随着dfs向下，index指针右移
        if(index >= str.length - 1) return 1;        //递归出口，指针抵达边界和超出边界都返回1

        let temp = Number(str[index] + str[index + 1]);           //考察该两位数
        
        if(temp >= 10 && temp <= 25) {
            return dfs(str, index + 1) + dfs(str, index + 2);       // 2个分支的结果相加
        } else {
            return dfs(str, index + 1);          // 返回1个分支的结果
        }
    }
    
    return dfs(str, 0);
};


//方法二：动态规划
var translateNum = function(num) {
    let str = num.toString();
    let n = str.length;
    const dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i < n + 1; i++) {
        const temp = Number(str[i - 2] + str[i - 1]);   //考察这个两位数
        if(temp >= 10 && temp <= 25) {
            dp[i] = dp[i - 1] + dp[i - 2];  //'10' ~ '25'
        }else{
            dp[i] = dp[i - 1];       //'00' ~ '09'
        }
    }
    return dp[n];
}