Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
    throw new TypeError('Error')
    }
    var _this = this
    var args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
    return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
    }
}



// bind 函数的实现步骤：

//1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
//2.保存当前函数的引用，获取其余传入参数值。
//3.创建一个函数返回
//4.函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，
//其余情况都传入指定的上下文对象。

//bind 函数实现
Function.prototype.myBind = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 获取参数
  var args = [...arguments].slice(1),
    fn = this;

  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};



Function.prototype.myBind = function(context){
  if(typeof this !== 'function'){
    throw new TypeError('Error');
  }
  var args = [...arguments].slice(1);
  var fn = this;
  return function Fn(){
    return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments));
  }
}


Function.prototype.mybind = function(context) {
  if(typeof this !== 'function'){
    throw new TypeError('Error');
  }
  var args = [...arguments].slice(1);
  var fn = this;
  return function Fn() {
    return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments));
  } 
}








// 模拟 bind  腐烂的橘子
Function.prototype.bind1 = function() {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments) // 变成数组
  
  // 获取 this（数组第一项）
  const t = args.shift()
  
  // fn1.bind(...) 中的 fn1
  const self = this
  
  // 返回一个函数
  return function() {
      return self.apply(t, args)
  }
}
function fn1(a, b, c){
  console.log('this', this)
  console.log(a, b, c)
  return 'this is fn1'
}
const fn2 = fn1.bind1({x: 100}, 10, 20, 30)
const res = fn2()
console.log(res) 


