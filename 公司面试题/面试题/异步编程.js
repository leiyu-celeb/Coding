

// function delay(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, time);
//     })
// }

// delay(1000).then(res => {
//     console.log('after 1000ms');
//     return delay(2000);
// }).then((res) => {
//     console.log(('after 2000ms'));
//     return delay(3000);
// }).then(res => {
//     console.log('after 3000ms');
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ test: 1 })
//         resolve({ test: 2 })
//         reject({ test: 2 })
//     }, 1000)
// }).then((data) => {
//     console.log('result1', data)
// },(data1)=>{
//     console.log('result2',data1)
// }).then((data) => {
//     console.log('result3', data)
// })
//result1 { test: 1 }
//result3 undefined



//一.回调函数：容易形成回调地狱，不利于维护，可读性差
// setTimeout(() => {
//     console.log(111);
//     setTimeout(() => {
//         console.log(222);
//         setTimeout(() => {
//             console.log(333);
//         }, 3000)
//     }, 2000)
// }, 1000)


//二、生成器函数
// 1.生成器函数可以让一些函数按照我们想要的顺序执行
// 2.有了生成器函数，就不要再嵌套回调函数了，同时不会存在回调地狱
// 3.函数顺序执行，看起来是同步的，实际上是异步执行的

// function one(){
//     setTimeout(() => {
//         console.log(111);
//         iter.next();         
//     }, 1000)
// }
// function two() {
//     setTimeout(() => {
//         console.log(222);
//         iter.next();
//     }, 2000)
// }
// function three() {
//     setTimeout(() => {
//         console.log(333);
//     }, 3000)
// }

// function * gen(){
//     yield one();
//     yield two();
//     yield three();
// }

// let iter = gen();
// iter.next();


// 生成器函数模拟请求用户数据、订单数据、商品数据：
// 在实际情景下，这三类数据是有关联的，只有获得了对应用户的数据，才能获取该用户的订单数据，对应订单又有商品数据
// function getUser() {
//     setTimeout(() => {        //用定时器模拟异步请求操作
//         let data = '用户数据';
//         iter.next(data); 
//     }, 1000)
// }

// function getOrder() {
//     setTimeout(() => {
//         let data = '订单数据';
//         iter.next(data);
//     }, 2000)
// }

// function getGoods() {
//     setTimeout(() => {
//         let data = '商品数据';
//         iter.next(data);
//     }, 3000)
// }

// function * gen() {
//     let user = yield getUser();
//     console.log(user);
//     let order = yield getOrder();
//     console.log(order);
//     let goods = yield getGoods();
//     console.log(goods);
// }

// let iter = gen();
// iter.next();







