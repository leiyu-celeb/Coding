/* 读取size个字符：gets(size)
将读取至多size个字符，当还未达到size个时如果遇到回车或结束符，会提前结束。回车符可能会包含在返回值中。
输出信息：printsth(sth, ...)
往控制台输出sth，当有多个参数时，空格分隔；最后不加回车。
输出一行：print(sth, ...) console.error(sth, ...) console.debug(sth, ...) console.info(sth, ...) console.log(sth, ...)
往控制台输出sth，当有多个参数时，空格分隔；最后加回车。
读取一个（长）整数：readInt()
从控制台读取一个（长）整数。
读取一个浮点型：readDouble()
从控制台读取一个浮点型。
读取一行输入：read_line()
将读取至多1024个字符，当还未达到1024个时如果遇到回车或结束符，提前结束。
读取多行最简单的办法是while((line = read_line()) != '')。
 */



// const getMinMP = function (n, c1, c2, str){
//     let minSP = Math.min(c1, c2);
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
// 		if(str[i] === 'F' && str[i] === str[i + 1] && str[i + 1] === str[i + 2]){
//             count++;
//             i = i + 2;
//         }
//     }
//     return count * minSP;
    
// }

// let n = 10;
// let c1 = 7;
// let c2 = 3;
// let str = 'FTFFFTFFFF'

// console.log(getMinMP(n,c1,c2, str));

console.log(1);

setTimeout(() => {
    console.log(2);
}, 2000)

let start = new Date();
while(new Date() - start < 3000){}

setTimeout(() => {
    console.log(4);
}, 0)

new Promise((resolve, reject) =>{
    console.log(5);
    foo.bar(100);
}).then(() => {
    console.log(6);
}).then(() => {
    console.log(7);
}).catch(() => {
    console.log(8);
})

console.log(9);