function debounce(fn, wait) {
    var timer = null;
    return function() {
        if(timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
    }   
}

function debounce(fn, wait) {
    var timer = null;
    return function() {
        if(timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
    }
}


//事件处理函数，也就是事件回调函数
function handle() {
    console.log(Math.random());
}

//不做防抖，就是只要触发了滚动事件，就执行回调函数handle，当连续滚动，不断执行回调函数，很容易导致崩溃
window.addEventListener('scroll', handle);

//滚动事件，给window注册滚动事件，回调函数先做防抖，设置延迟时间1000ms
//触发滚动事件，调用debounce(handle, 1000)，返回一个新的回调函数
//内部函数被保存到外部，因此这个回调函数可以访问到timer、wait、fn，而这些又不是它的局部变量或参数，这是一个闭包
//第一次执行debounce函数，timer为null，
//连续触发滚动事件调用的回调函数其实是下面这个函数
/* function () {
    if(timer !== null) {  //定时器时间没到，又触发滚动事件，当前计时器清空
        clearTimeout(timer);
    }
    timer = setTimeout(handle, 1000);  //重新设置一个定时器，因为设定的延迟时间没到又触发了滚动事件
    //直到间隔了1000毫秒没有再次触发滚动事件，定时器自己走完了时间，这时会触发定时器回调函数，也就是我们之前的滚动事件的处理函数
    //handle执行一次，而之前的连续触发滚动事件，其实只响应了一次
} */
window.addEventListener('scroll', debounce(handle, 1000));


//函数防抖的标准写法
function debounce(fn, wait) {
    var timer = null;
    return function (...args) {
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, wait);
    }
}

function handle(){  //事件处理函数，触发事件时执行
    console.log(111);
}

window.addEventListener('click', debounce(handle, 1000))



function debounce(fn, wait){
    var timer = null;
    return function(...args){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, wait)
    }
}
