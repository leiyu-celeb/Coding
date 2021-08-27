// 浅拷贝：
// 1.Object.assign({}, obj)
// 2.Array.prototype.concat()
// 3.Array.prototype.slice()
// 4.扩展运算符...
// 5.手写浅拷贝：

function shallowCopy(src) {
    var dst = {};
    for(var prop in src) {
        if(src.hasOwnProperty(prop)) {
            dst[prop] = src[prop]
        }
    }
    return dst;
}


//深拷贝：
//方法一：JSON.parse(JSON.stringify(obj))
//缺点：不能处理undefined、symbol、函数、正则、new Date()、存在循环引用的情况
// let obj= [{'a': 1}, {'b': 2}, true, 22, 'helloworld', [1, 2, 3]]

// let obj_deepCopy1 = JSON.parse(JSON.stringify(obj))

// console.log(obj_deepCopy1);

//方法二：JS内置模块lodash的深拷贝函数cloneDeep， 可以深拷贝undefined、symbol、函数
// let obj= [{'a': 1}, {'b': 2}, true, 22, 'helloworld', [1, 2, 3]]

//npm install lodash
// let _ = require('lodash')   //CommonJS语法，导入lodash模块
// let obj_deepCopy2 = _.cloneDeep(obj);      //使用lodash模块的 cloneDeep函数实现深拷贝
// console.log(obj_deepCopy2);



//方法三：[面试够用] 手写递归深拷贝，可以拷贝基本类型，引用类型，包括function

function deepClone(src, target) {
    var target = target || [];
    var arrStr = "[object Array]";
    for(let prop in src) {
        if(src.hasOwnProperty(prop)) {
            if(src[prop] !== null && typeof(src[prop]) === "object") {
                target[prop] = Object.prototype.toString.call(src[prop]) === arrStr ? [] : {};
                deepClone(src[prop], target[prop]);
            }else{
                target[prop] = src[prop];
            }
        }
    }
    return target;
}


function deepClone(src, target) {
    var target = target || [];
    var arrStr = "[object Array]";
    for(let prop in src){
        if(src.hasOwnProperty(prop)){
            if(src[prop] !== null && typeof(src[prop]) === 'object') {
                target[prop] = Object.prototype.toString.call(src[prop]) === arrStr ? [] : {};
                deepClone(src[prop], target[prop]);
            }else{
                target[prop] = src[prop];
            }
        }
    }
    return target;
}


// xieyuheng
const deepClone = (target) => {
    let result
    if (typeof target === 'object') {
      if (Array.isArray(target)) {
        result = []
        for (const i in target) {
          result.push(deepClone(target[i]))
        }
      } else if (target === null) {
        result = null
      } else if (target.constructor === RegExp) {
        result = target
      } else {
        result = {}
        for (const i in target) {
          result[i] = deepClone(target[i])
        }
      }
    } else {
      result = target
    }
    return result
  }







let obj= [{'a': 1}, {'b': 2}, true, 22, 'helloworld', [1, 2, 3], undefined, null, function F() { console.log(1) }]
let obj_deepCopy3 = deepClone(obj, []);
console.log(obj_deepCopy3[8]());

