/** 1.判断一个变量是否为字符串
 *  
 *  要求，尝试完成如下功能：
 *
 *  isString('hello')              = true
 *  isString(123)                  = false
 *  isString(undefined)            = false
 *  isString(null)                 = false
 *  isString(new String('hello'))  = true
 *
 **/
// function isString(value) {
    // if(Object.prototype.toString.call(value) === '[object String]') {
    //     return true;
    // }else{
    //     return false;
    // }
// }



/** 2.实现函数柯里化
 *
 *  要求，尝试完成如下功能：
 *
 *  const currying = require('currying')
 *
 *  const add = function(a, b) {
 *    return a + b
 *  }
 *
 *  const curried = currying(add)
 *  console.log(curried(1)(2)) // 3
 *
 **/
function currying(func, ...args) {
    return func.length <= args.length ? func(...args) : currying.bind(null, func, ...args);
}

const add = function(a, b) {
    return a + b;
}

const curried = currying(add);

console.log(curried(1)(2));




/** 3.duplicate函数
 *
 *  要求，尝试完成如下功能：
 *
 *  输入： array，例如: [1, 2, 3, 4]
 *
 *  输出：一个重复后的array，例如：[1, 2, 3, 4, 1, 2, 3, 4]
 *
 **/
// function duplicate(array) {
//     return array.concat(array)
// }

// console.log(duplicate([1, 2, 3, 4]));


/** 4.map变形函数
 *
 *  要求，尝试完成如下功能：
 *
 *  map([1, 2], function(i) {
 *   return i * 2
 *  })
 *  要求输出： [2, 4]
 *
 *  map([{name: 'nanfeng', age: 25}, {name: 'beifang', age: 33}], function(i) {
 *   return i.age
 *  })
 *  要求输出： [25, 33]
 *
 *  map([5, 7], function(i) {
 *   return this + i
 *  }, 2)
 *  要求输出： [7, 9]
 *
 **/
// function map(arr, func, ctx) {
//     //在这里实现
// }
// function map(arr, func, ctx) {
//     // 首先，检查传递的参数是否正确。
//     if (!Array.isArray(arr) || !arr.length || typeof func !== 'function') { 
//       return [];
//     } else if (ctx) {
//       let result = []; // 每次调用此函数时，我们都会创建一个 result 数组。因为我们不想改变原始数组。
//       let len = arr.length;
//       for (let i = 0; i < len; i++) {
//         result.push(func.call(ctx, arr[i]));   // 将 func 返回的结果 push 到 result 数组中
//       }
//       return result;      
//     } else {
//       let result = []; // 每次调用此函数时，我们都会创建一个 result 数组。因为我们不想改变原始数组。
//       let len = arr.length;
//       for (let i = 0; i < len; i++) {
//         result.push(func(arr[i], i, arr)); 
//         // 将 mapCallback 返回的结果 push 到 result 数组中
//       }
//       return result;
//     }
// }



/** 5.value取值函数
 *
 *  要求，尝试完成如下功能：
 *
 *  const what = 'is this!';
 *
 *  value(what) === 'is this!'
 *
 *  const hello = function() {
 *      return 'world'
 *  }
 *
 * value(hello) === 'world'
 *
 **/
// function value(anything) {
    // if(typeof anything !== 'function') {
    //     return anything;
    // }else{
    //     return value(anything.call(null));
    // }
// }
// const what = 'is this!';
// const hello = function() {
//     return 'world'
// }
// console.log(value(hello));


/** 6.实现驼峰化函数
 *
 *  要求，尝试完成如下功能：
 *
 *  console.log(camelcase('HELLO WORLD')) // helloWorld
 *
 *  console.log(camelcase('HELLO         WORLD')) // helloWorld
 *
 *  console.log(camelcase('drunkman')) // drunkman
 *
 *  console.log(camelcase('hi----you')) // hiYou
 *
 **/
// function camelcase(str) {
//    let arr = str.toLowerCase().split(/\W/g);
//    let res = arr[0];
//    for(let i = 1; i < arr.length; i++) {
//         res += arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1);
//    }
//    return res;
// }

// console.log(camelcase('hi----you'));




/** 7.thunkify形式转换函数
 *
 *  尝试完成如下功能：
 *
 *  const say = function(name, words, callback){
 *    setTimeout(function(){
 *      callback(undefined, { status: 'FINISHED' })
 *    })
 *  }
 *
 *  const thunkSay = thunkify(say);
 *
 *  thunkSay('ZhangSan', 'You are freak.')(function(err, data){
 *    console.log(err)  // undefined
 *    console.log(data) // { status: 'FINISHED' }
 *  })
 *
 **/
// const say = function(name, words, callback) {
//     setTimeout(function(){
//         callback(undefined, {status: 'FINISHED'})
//     })
// }
// const thunkSay = thunkify(say);

function thunkify(fn) {
    return function () {
        let args = Array.from(arguments);
        return function (callback) {
            let called;
            let proxyCallBack = function () {
                if (called) {
                    return;
                }
                called = true;
                callback.apply(null, Array.from(arguments));
            }
            let wholeArgs = [...args, proxyCallBack];
            try {
                return fn.apply(this, wholeArgs);
            }
            catch (err) {
                callback(err);
            }
        }
    }
}


// console.log(thunkSay('ZhangSan', 'You are freak.')(function(err, data){
//     console.log(err)  // undefined
//     console.log(data) // { status: 'FINISHED' }
// }));



/**
 *
 *  要求，尝试完成如下功能：
 *
 *  times(1, String) // ['0']
 *
 *  times(3, Boolean) // [false, true, true]
 *
 *  times(4, function(i) { return 'Hello.' + i; }) // ['Hello.0', 'Hello.1', 'Hello.2', 'Hello.3']
 *
 **/
// function times(n, func) {
//     let res = [];
//     for(let i = 0; i < n; i++) {
//         res.push(func.call(null, i))
//     }
//     return res;
// }

// console.log(times(3, Boolean));



/** 9.求二叉树的最大深度
 *
 *  给出一颗树节点定义如下：
 *
 *  interface TreeNode {
 *    value: any
 *    left?: TreeNode
 *    right?: TreeNode
 *  }
 *
 *  要求，获取二叉树的深度，例如：如下树深度为 3
 *
 *       3
 *      / \
 *      9  20
 *        /  \
 *      15   7
 *
 **/
// function maxDepth(treeNode) {
//     if(!treeNode) return 0;
//     return Math.max(maxDepth(treeNode.left), maxDepth(treeNode.right)) + 1;
// }


/** 10.difference找不同函数
 *
 *  要求，尝试完成如下功能：
 *
 *  const src = [3, 6, 9]
 *  const target = [1, 6, 8]
 *
 *  const diff = difference(src, target)
 *
 *  console.log(diff) // [3, 9]
 *
 **/
// function difference(src, target) {
//     return src.filter(item => !target.includes(item));
// }

// const src = [3, 6, 9]
// const target = [1, 6, 8]
// console.log(difference(src, target));




/** 11.数组扁平化
 *
 *  输入： arr: [1, [2, [3 ,4], 5], 6]
 *
 *  输出：一个扁平化后的array，例如：[1, 2, 3 ,4, 5, 6]
 *
 **/
// function flatten(arr) {
//     let result = [];
//     arr.forEach(item => {
//         if(Array.isArray(item)) {
//             result = result.concat(flatten(item));
//         }else{
//             result.push(item);
//         }
//     })
//     return result;
// }

// let arr = [1, [2, [3 ,4], 5], 6];

// console.log(flatten(arr));
