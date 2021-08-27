const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks= [];

    let resolve = (value) => {
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    } 

    let reject = (reason) => {
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 依次将对应的函数执行
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    }

    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      });

      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onRejectedCallbacks.push(()=> {
        onRejected(this.reason);
      })
    }
  }
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
  },1000);
}).then(
  (data) => {
    console.log('success', data)
  },
  (err) => {
    console.log('faild', err)
  }
)





function Promise(fn){ 
  let state = 'pending';
  let value = null;
  const callbacks = [];

  this.then = function (onFulfilled){
      return new Promise((resolve, reject)=>{
          handle({ //桥梁，将新 Promise 的 resolve 方法，放到前一个 promise 的回调对象中
              onFulfilled, 
              resolve
          })
      })
  }

  function handle(callback){
      if(state === 'pending'){
          callbacks.push(callback)
          return;
      }
      
      if(state === 'fulfilled'){
          if(!callback.onFulfilled){
              callback.resolve(value)
              return;
          }
          const ret = callback.onFulfilled(value) //处理回调
          callback.resolve(ret) //处理下一个 promise 的resolve
      }
  }
  function resolve(newValue){
      const fn = ()=>{
          if(state !== 'pending')return

          state = 'fulfilled';
          value = newValue
          handelCb()
      }
      
      setTimeout(fn,0) //基于 PromiseA+ 规范
  }
  
  function handelCb(){
      while(callbacks.length) {
          const fulfiledFn = callbacks.shift();
          handle(fulfiledFn);
      };
  }
  
  fn(resolve)
}

