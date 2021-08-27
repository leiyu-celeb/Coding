// function new_instance_of(leftVaule, rightVaule) { 
//     let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
//     leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
//     while (true) {
//     	if (leftVaule === null) {
//             return false;	
//         }
//         if (leftVaule === rightProto) {
//             return true;	
//         } 
//         leftVaule = leftVaule.__proto__ 
//     }
// }


function myinstanceof(leftVaule, rightVaule){
    let rightProto = rightVaule.prototype;   //取右边函数的prototype
    //判断左边对象实例的原型链上有没有上面这个原型
    //取左边对象的__proto__
    leftVaule = leftVaule.__proto__;
    while(true){
        if(leftVaule === null) {  //左边实例没有原型
            return false;
        }
        if(leftVaule === rightProto) {  //左边对象的原型等于右边函数的原型，意味着这个对象是右边构造函数的实例
            return true;
        }
        //如果不等，那么沿着左边原型链查找，更新leftValue值
        leftVaule = leftVaule.__proto__;
    }
}



const myinstanceof2 = (left, right) => {
    let rightProto = right.prototype;
    left = left.__proto__;
    while(true){
        if(left === null){
            return false;
        }
        if(left === rightProto){
            return true;
        }
        left = left.__proto__;
    }
}


const myinstanceof = function(left, right) {
    let rightProto = right.prototype;
    left = left.__proto__;
    while(true) {
        if(left === null) {
            return false;
        }
        if(left === rightProto) {
            return true;
        }
        left = left.__proto__;
    }
}



console.log(myinstanceof2(Object, Function));

