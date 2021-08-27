/* leetcode 204. 计数质数
统计所有小于非负整数 n 的质数的数量。
 
示例 1：
输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

示例 2：
输入：n = 0
输出：0

示例 3：
输入：n = 1
输出：0
 

提示：
0 <= n <= 5 * 10^6 
*/

//判断一个数(大于等于2的数)是不是质数
// function isPrime(num) {
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i == 0) 
//             return false;
//     }
//     return true;
// }

//
//除了2和3，其他质数一定在6的倍数两侧
function isPrime(num) {
    if(num === 2 || num === 3){   //2和3一定是质数
        return true;
    }
    if(num % 6 != 1 && num % 6 != 5){  //不在6的倍数两侧一定不是质数
        return false;
    }
    //在6的倍数两侧，也可能不是质数
    for(let i = 5; i <= Math.sqrt(num); i = i + 6){  
        if(num % i === 0 || num % (i + 2) === 0){  //当前6的倍数两侧的数都不是质数，排除掉
            return false;
        }
    }
    return true;
}



//统计所有小于非负整数 n 的质数的数量
function getPrimeCount(n) {
    if(n === 0 || n === 1 || n === 2) return 0;
    let count = 0;
    for(let i = 2; i < n; i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}



console.log(getPrimeCount(30));
















