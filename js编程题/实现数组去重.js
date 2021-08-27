//方法一：对象键值对方法进行数组去重，也叫哈希法
function unique(arr){
    let temp = {};
    let result = [];
    for(let item of arr) {
        if(!temp[item]){
            temp[item] = "aaa";
            result.push(item);
        }
    }
    return result;
}

var arr = [0,0,1,2,3,4,1,0,0,2,6,9,4]

console.log(unique(arr));

// 方法二：ES6 Set集合数据结构用于数组去重
const unique2 = (arr) => {
    return [...new Set(arr)];
}

const unique3 = (arr) => {
    return Array.from(new Set(arr));
}



//方法三：双层循环
var array = [1, 1, '1', '1'];

function unique4(array) {
    // res用来存储结果
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++ ) {
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}

console.log(unique4(array)); // [1, "1"]



//方法四：
function uniqueArray(arr){  
    return arr.filter((v,i)=>arr.index(v)===i) 
}