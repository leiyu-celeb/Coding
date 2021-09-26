/* 
   方法一： 递归法，实现一个数组扁平化的函数flat() 
   思想：1.遍历数组元素 2.判断当前元素是否是数组  3.如果是数组则递归处理，如果不是则直接加入结果数组中
   数组遍历的方法很多，普通for循环, for...in, for...of, forEach, map, filter, keys, values, entries, reduce
*/
//forEach遍历数组
function flat(arr) {
    let result = [];
    arr.forEach(item => {
        if(Array.isArray(item)){ //遇到了数组，递归调用
            // result = result.concat(arguments.callee(item));   arguments.callee(item) 等价于 flat(item)
            result = result.concat(flat(item));
        }else{ 
            result.push(item); //不是数组则直接加入
        }
    });
    return result;
}

function flat(arr) {
    let result = [];
    arr.forEach(item => {
        if(Array.isArray(item)) {
            result = result.concat(flat(item));
        }else{
            result.push(item);
        }
    })
    return result;
}


const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];


// for...of遍历数组
function flat111(arr) {
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(flat(item));
        }else{
            result.push(item);
        }
    }
    return result;
}

// console.log(flat111(arr));


//方法二：Array.prototype.reduce()遍历数组  实现数组扁平化，思路是一样的
const flat2 = (arr) => {
    return arr.reduce((prev, curr) => {
        if(Array.isArray(curr)){  //遇到了数组，递归调用
            return prev.concat(flat2(curr));
        }else{
            return prev.concat(curr);
        }
    }, []);
}

const flat = (arr) => {
    return arr.reduce((prev, curr) => {
        if(Array.isArray(curr)) {
            return prev.concat(flat(curr));
        }else{
            return prev.concat(curr);
        }
    }, []);
}





// const flat = (arr) => {
//     return arr.reduce((prev, curr) => {
//         return prev.concat(Array.isArray(curr) ? flat(curr) : curr)
//     }, []);
// }


//方法三：用栈的思想实现flat函数
const flat3 = (arr) => {
    let result = [];
    let stack = arr.slice();  // 浅拷贝arr数组到stack，作为栈
    while(stack.length !== 0) { //栈不空
        let val = stack.pop();
        if(Array.isArray(val)){
            stack.push(...val);       //如果val是数组，则...扩展运算符展开一层继续插入到栈中
        }else{  
            result.unshift(val);    //如果不是数组，则前插入数据
        }
    }
    return result;
}





//方法四：通过传入整数参数控制拉平层数
const flat4 = (arr, num = 1) => {
    return num > 0 ? arr.reduce((prev, curr) => {
        return prev.concat(Array.isArray(curr) ? flat4(curr, num - 1) : curr);
    }, []) : arr.slice();
}






//方法五：使用Generator实现flat函数
function * flat5(arr, num) {
    if(num === undefined) {
        num = 1;
    }
    for(const item of arr) {
        if(Array.isArray(item) && num > 0){
            yield * flat5(item, num - 1);
        }else{
            yield item;
        }
    }
}




//方法六：原型链上手写Array.prototype.flat()
Array.prototype.myflat = function(num = 1) {
    if( !Number(num) || Number(num) < 0) {      
        return this;
    }
    let arr = this.concat();
    while(num > 0) {
        if(arr.some(item => Array.isArray(item))) {   //arr数组中还有数组元素
            arr = [].concat(...arr);       //只要有，num大于0，就展开一层
        } else {
            break;     //arr已经完全展平为一维数组
        }
        num--; //展平一次num--
    }
    return arr;
}




//ES6扩展运算符
function flatten(arr){
    while(arr.some(item => Array.isArray(item))){  //只要arr数组元素中还存在数组
        arr = [].concat(...arr);    //展开一层
    }
    return arr;
}






//方法七：考虑数组空位的情况


// console.log(flat(arr));
// console.log(flat2(arr));
// console.log(flat3(arr));
// console.log(flat4(arr,2));

// console.log(arr.myflat(Infinity));

