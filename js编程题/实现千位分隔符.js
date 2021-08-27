// 方法一：将数字转换为字符数组
function numFormat(num) {
    num = num.toString().split(".");      //num[0]整数部分， num[1]小数部分(如果有)
    let arr = num[0].split("").reverse();   //分隔符从顺序上是从后面开始数的，所以将整数部分数组逆序一下
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(i % 3 == 0 && i != 0){
            res.push(",");   //添加分隔符
        }
        res.push(arr[i]);  //添加整数部分
    }
    res.reverse();  //整数部分千位分隔符添加完成
    if(num[1]){  //如果有小数部分
        res = res.join("").concat("." + num[1]);   //整数部分和小数部分concat一下
    }else{
        res = res.join("");
    }
    return res;
}

var a = 1234567894532;
var b = 673439.4542;
console.log(numFormat(a)); // "1,234,567,894,532"
console.log(numFormat(b)); // "673,439.4542"


//方法二：JS自带的toLocaleString()函数

console.log(a.toLocaleString());
console.log(b.toLocaleString());


//方法三：正则表达式 和 replace函数

//只使用于整数，不适用于小数，那么可以考虑参考方法一，将这个数分为整数部分和小数部分，
//整数部分添加千位分隔符用这个方法，小数部分直接字符串拼接即可
//百度2014年面试题最后一题
// var reg = /(?=(\B)(\d{3})+$)/g;

// var str = "10000000000"

// console.log(str.replace(reg, ","));

function numFormatReg(num) {
    num = num.toString().split(".");  //分为整数部分num[0]和小数部分num[1](如果有)
    var reg = /(?=(\B)(\d{3})+$)/g;    //正则表达式模式串
    num[0] = num[0].replace(reg, ",");  //整数部分添加千位分隔符
    if(num[1]){
        return num[0] + "." + num[1];
    }else{
        return num[0];
    }
}

console.log(numFormatReg(a));
console.log(numFormatReg(b));

