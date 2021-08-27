// 1.回调函数
// 2.事件监听
// 3.发布订阅
// 4.Promise/A+
// 5.生成器函数Generators/yield
// 6.async/await


// Promise.resolve(1)
// .then(res => {
//   console.log(res)
//   return 2 //包装成 Promise.resolve(2)
// }).catch(err => 3).then(res => console.log(res))


function *fetch() {
    yield ajax(url, () => {})
    yield ajax(url1, () => {})
    yield ajax(url2, () => {})
}
let it = fetch()
let result1 = it.next()
let result2 = it.next()
let result3 = it.next()
