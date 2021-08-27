/*
    作用：将函数fn柯里化
*/
//方法一： 已验证，正确
function curry1(fn, args) {
    //获取函数fn参数列表的长度
    let length = fn.length;
    
    //若没传args 则默认为空数组[]
    args = args || [];
    
    return function() {
        //args第一位参数
        let subArgs = args.slice(0);

        //拼接得到现有的所有参数
        for(let i = 0; i < arguments.length; i++) {
            subArgs.push(arguments[i]);
        }

        //判断参数的长度是否已经满足函数所需参数的长度
        if(subArgs.length >= length) {
            //如果满足，执行函数
            return fn.apply(this, subArgs);
        } else {
            //如果不满足，递归返回柯里化的函数，等待参数的传入
            return curry1.call(this, fn, subArgs);
        }
    };

}

//ES6方法实现, 已验证，正确
function curry2(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry2.bind(null, fn, ...args);
}

function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}



//方法三：已验证，正确
function curry3(fn) {
    if(fn.length <= 1) return fn;  //fn参数列表为0或者1时，不需要柯里化
    const generator = (...args) => {
        if(fn.length === args.length) {
            return fn(...args);
        } else {
            return (...args2) => {
                return generator(...args, ...args2);
            }
        }
    }
    return generator;
}



//柯里化之前的函数add，调用需要4个参数： add(1, 2, 3, 4) 输出结果 10
function add(a, b, c, d) {
    return a + b + c + d;
}

console.log(add(1,2,3,4));

//第一种方法柯里化：
const curriedAdd1 = curry1(add);
console.log(curriedAdd1(1)(2)(3)(4));


//第二种方法：ES6
const curriedAdd2 = curry2(add);
console.log(curriedAdd2(1)(2)(3)(4));


//第三种方法：和方法二类似
const curriedAdd3 = curry3(add);
console.log(curriedAdd3(1)(2)(3)(4));





function curry(fn, ...args){
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}
