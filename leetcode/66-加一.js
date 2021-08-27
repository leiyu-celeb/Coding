/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] == 9){
            digits[i] = 0;
        }else{
            digits[i]++;
            return digits;
        }
    }
    digits.unshift(1);
    return digits
};

let digits = [9,9,9,9,9];

console.log(plusOne(digits));