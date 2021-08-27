/* call 函数的实现步骤：
  1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
  2.判断传入上下文对象是否存在，如果不存在，则设置为 window 。
  3.处理传入的参数，截取第一个参数后的所有参数。
  4.将函数作为上下文对象的一个属性。
  5.使用上下文对象来调用这个方法，并保存返回结果。
  6.删除刚才新增的属性。
  7.返回结果。 
*/

// call函数实现
Function.prototype.myCall = function(context) {
  // 判断调用对象
  if (typeof this !== "function") {
    console.error("type error");
  }
  // 获取参数
  let args = [...arguments].slice(1),  result = null;
  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;
  // 将调用函数设为对象的方法
  context.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 将属性删除
  delete context.fn;
  return result;
};




//面试版本：手写call方法
Function.prototype.myCall = function(context, ...args){
  if(typeof this !== 'function'){
      console.error('type error');
  }
  context = context || window;
  context.fn = this;      //this代表调用这个call方法的函数对象，相当于context这个对象借用这个函数，变成自己的属性fn
  var result = context.fn(...args);    //获得context对象借用函数得到的结果
  delete context.fn;              //删除这个属性
  return result;              //返回结果
}

let obj = {
  name: 'leiyu'
}

console.log(Object.prototype.toString.myCall(obj));



Function.prototype.myCall = function(context, ...args){
  if(typeof this != 'function'){
    console.error('type error');
  }
  context = context || window;
  context.fn = this;
  var result = context.fn(...args);
  delete context.fn;
  return result;         
}



Function.prototype.myCall = function(context, ...args) {
  if(typeof this != 'function'){
    console.error('error');
  }
  context = context || window;
  context.fn = this;
  var result = context.fn(...args);
  delete context.fn;
  return result;
}








