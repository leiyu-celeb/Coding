// 大数相加
const bigAdd = (a, b) => {
    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, 0);
    b = b.padStart(maxLength, 0);
    let curSum  = 0;
    let carry = 0;
    let sum = "";
    for(let i = maxLength - 1; i >= 0; i++) {
        curSum = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(curSum / 10);
        sum = curSum % 10 + sum;
    }
    if(carry == 1) {
        sum = '1' + sum;
    }
    return sum;
}



//方法一： 将大数用字符串string类型表示
const bigAdd = (a, b) => {
    //取a和b字符串最大长度
    let maxLength = Math.max(a.length, b.length);
    //根据最大长度在前面补0
    a = a.padStart(maxLength, 0);
    b = b.padStart(maxLength, 0);
    
    //定义一些相加时需要的变量
    let t = 0; //保存每次相加的和
    let f = 0; //保存进位，初始化为0
    let sum = "";  //保存和
    for(let i = maxLength - 1; i >= 0; i--) {   //从个位开始对应相加
        t = parseInt(a[i]) + parseInt(b[i]) + f;
        f = Math.floor(t / 10); //更新当前位相加的进位
        sum = t % 10 + sum;
    }
    if(f == 1){ //最高位的进位
        sum = "1" + sum;
    }
    return sum;
}

function add(a, b) {
    return a + b;
}

let a = "9007199254740991";      //16位数，JS中number类型的最大安全范围，超出可能损失精度
let b = "1234567899999999999";   //20位数


console.log(bigAdd(a, b));  

//方法二：大数用最新的基本数据类型BigInt表示

let a1 = 9007199254740991n;      //声明赋值时，末尾加一个n即表示声明成BigInt类型的数据

console.log(typeof(a1));

let b1 = 1234567899999999999n;   //20位数，超过Number类型数据最大安全范围，这里声明成BigInt类型数据，就不用担心精度损失问题了

console.log(a1 + b1);



//JS number数据类型  安全范围：  [-2^53 + 1, 2^53 - 1]  超出精度损失

function bigAdd(a, b){
    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, 0);
    b = b.padStart(maxLength, 0);
    let f = 0;
    let t = 0;
    let sum = "";
    for(let i = maxLength - 1; i >= 0; i++){
        t = parseInt(a[i]) + parseInt(b[i]) + f;
        f = Math.floor(t / 10);
        sum = t % 10 + sum;
    }
    if(f === 1){
        sum = '1' + sum;
    }
    return sum;
}













