// 第二题 写一个节流函数 限制一个ip地址一分钟内只允许被请求60次
// function throttle(func, delay = 1000){
//     var timer = null;
//     return function(...args){
//         if(!timer){
//             timer = setTimeout(() => {
//                 func.apply(this, args);
//                 timer = null;
//             }, delay)
//         }
//     }
// }




function debounce(func, wait) {
    let timer = null;
    return function(...args){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
            timer = null;
        }, wait);
    }
}

function throttle(func, delay) {
    let timer = null;
    return function(...args) {
        if(!timer){
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        }
    }
}

Function.prototype.myCall = function(context, ...args) {
    if(typeof this !== 'function'){
        throw new TypeError('error');
    }
    context = context || window;
    context.fn = this;
    var result = context.fn(args);
    delete context.fn;
    return result;
}



Function.prototype.myBind = function(context){
    if(typeof this !== 'function'){
      throw new TypeError('Error');
    }
    var args = [...arguments].slice(1);
    var fn = this;
    return function Fn(){
      return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments));
    }
  }
  


function myNew() {
    var obj = {};
    var Constructor = [].shift.call(arguments);
    //var Constructot = args[0];
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
}





//第三题 深拷贝
// function deepClone(src, target){
//     var target = target || {};
//     var arrStr = "[object Array]";
//     for(let prop in src){
//         if(src.hasOwnProperty(prop)){
//             if(src[prop] !== null && typeof(src[prop]) === 'object'){
//                 target[prop] = Object.prototype.toString.call(src[prop]) === arrStr ? [] : {};
//                 deepClone(src[prop], target[prop]);
//             }else{
//                 target[prop] = src[prop];
//             }
//         }
//     }
//     return target;
// }


// var src = {
//     name: 'leiyu',
//     a: function() { console.log(1)},
//     b: null,
//     c: [1, 2, 3],
//     d: 2,
//     e: false,
//     f: undefined,
//     g: 13131315151641651n
// }
// console.log(deepClone(src, {}).a());



const arr = [16, 31, 12, 1, 23, 888, 10]  
function bubbleSort(arr) { 
     for (let i = 0; i < arr.length - 1; i++) {  
         for (let j = 0; j < arr.length - i - 1; j++) {  
             if (arr[j] > arr[j + 1]) {  //es6 结构赋值  
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]  
            }  
        }  
        return arr  
    } 
}

//多叉树
class TreeNode {
    constructor(data){
      this.data = data
      this.children = []
    }
  }

class TreeNode{
    constructor(data){
        this.data = data;
        this.children = [];
    }
}

function traverse1(node){
    if(!node){
        return []
    }
   var result = []
   result.push(node.data)
   if(node.children){
        for(var i = 0;i<=node.children.length-1;i++){
            result = result.concat(traverse1(node.children[i]))
        }
    return result
   }
}

