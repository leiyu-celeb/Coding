//三个数求和函数add
function add(a, b, c) {   
    return a + b + c;
}

//函数柯里化
function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}


const curriedAdd = curry(add);

console.log(curriedAdd(1,2,3));   //6
console.log(curriedAdd(1)(2)(3));   //6
console.log(curriedAdd(1,2)(3));    //6
console.log(curriedAdd(1,2,3,4,5,6,7));   //6


// const add1 = x => y => z => x + y + z;

// console.log(add1(1)(2)(3));


// function add2(x) {
//     return function(y){
//         return function(z){
//             return x + y + z; 
//         }
//     }
// 

// console.log(add2(1)(2)(3));


