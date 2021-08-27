/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n === 0 || n === 1 || n === 2){   
        return 0;
    }
    let count = 0;
    for(let i = 2; i < n; i++){   //输入的n大于等3时，计算2到n-1的质数个数
        if(isPrime(i)){  //是质数
            count++;  
        }
    }
    return count;
};


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


// const isPrime = function(num) {
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }