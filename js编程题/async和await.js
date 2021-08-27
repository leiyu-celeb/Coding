function analogAsync(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 5000), n)
    })
}

function fn1(n) {
    console.log(`step1 with ${n}`)
    return analogAsync(n)
}

function fn2(n) {
    console.log(`step2 with ${n}`)
    return analogAsync(n)
}

function fn3(n) {
    console.log(`step3 with ${n}`)
    return analogAsync(n)
}


//promise解决回调地狱
// function fn(){
//     let time1 = 0;
//     fn1(time1).then((time2) => fn2(time2)).then((time3) => fn3(time3)).then((res) => {
//           console.log(`result is ${res}`);
//         })
// }
  
// fn()

/* 输出结果
step1 with 0
step2 with 5000
step3 with 10000
result is 15000 
*/

//async, await比Promise更优雅在对于Promise对象的then链的处理，这里语法非常清晰
async function fn() {
    let time1 = 0
    let time2 = await fn1(time1) //await等待异步方法fn1(time1)完成
    let time3 = await fn2(time2) 
    let res = await fn3(time3)
    console.log(`result is ${res}`)
}
  
fn()

