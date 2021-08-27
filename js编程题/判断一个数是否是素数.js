//方法一：数据量较大时，效率较低
function isPrime(num) {
    for(let i = 2; i < num; i++){
        if(num % i == 0) 
            return false;
    }
    return true;
}

//方法二：对上面方法的改进：不需要遍历到num - 1，遍历到sqrt(num)即可
function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) 
            return false;
    }
    return true;
}

//方法三：继续改进
//除了2和3，其他质数一定在6的倍数两侧
function isPrime(num) {
    if(num === 2 || num === 3){
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

