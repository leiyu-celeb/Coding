/* Promise.race
Promise 接受一个可迭代对象，里面的 Promise 是竞争关系，
谁先 resolve 或者 reject 立刻会被当做返回值返回到外部。
其他会 settled 的 Promise 会继续执行但不会再影响结果。 
*/

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1')
  }, 500)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2')
  }, 1000)
})
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p3')
    resolve('p3')
  }, 1500)
})

let P = Promise.race([p1, p2, p3])
  .then(res => {
    console.log(res)
}).catch(res => {
    console.log(res)
})