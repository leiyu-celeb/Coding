const myPromiseAll = (promises) => {
    return new Promise((resolve, reject) => {
      let resolves = []
      const promisesLen = promises.length
      let promisesI = 0
      const check = (res) => {
        resolves.push(res)
        if (++promisesI === promisesLen) {
          resolve(resolves) // 如果 索引超出边界 resolve
        } else {
          next() // 迭代执行
        }
      }
      const next = () => {
        const promiseType = typeof promises
        if (promiseType === "object" && Symbol.iterator in promises) { // 判断是否为可迭代对象
          const nowPormise = promises[promisesI]
          if (nowPormise instanceof Promise) { // 判断是否为Promise
            nowPormise.then(res => {
              check(res)
            }).catch(err => {
              reject(err) // 遇到错误 reject 
            })
          } else {
            check(nowPormise)
          }
        }
        else {
          reject(`TypeError: ${promiseType} ${promises} is not iterable (cannot read property Symbol(Symbol.iterator))`)
        }
      }
      next()
    })
}


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
const promise4 = new Promise((resolve, reject) => setTimeout(reject, 101, 'reject'))
// myPormiseAll ...

myPromiseAll([promise1, promise2, promise3]).then(values => console.log(values));
myPromiseAll([promise1, promise4, promise3]).catch(err => console.log(err));
myPromiseAll(8).catch(err => console.log(err));



//腐烂的橘子： 实现Promise.all
function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    if (!isArray(promises)) {
      return reject(new TypeError('arguments must be an array'));
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedValues = new Array(promiseNum);
    for (var i = 0; i < promiseNum; i++) {
        (function(i) {
            Promise.resolve(promises[i]).then(function(value) {
            resolvedCounter++
            resolvedValues[i] = value
            if (resolvedCounter == promiseNum) {
                return resolve(resolvedValues)
            }
            }, function(reason) {
            return reject(reason)
            })
        })(i)
    }
  })
}
