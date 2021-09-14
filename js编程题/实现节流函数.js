//函数节流：时间戳版本
function throttle(func, delay){   //func是事件处理函数，delay表示每过delay时间执行一次事件处理函数
    var prev = Date.now();    
    return function() {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if(now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}

function handle() {
    console.log(Math.random());
}


//对事件处理函数进行节流，每过2秒执行一次事件处理函数
window.addEventListener('click', throttle(handle, 2000));



function throttle(fn, delay){
    var prev = Date.now();
    return function() {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if(now - prev >= delay){
            fn.apply(context, args);
            prev = Date.now();
        }
    }
}


//函数节流：定时器版本
function throttle(fn, delay) {
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;
        if(!timer){
            timer = setTimeout(() => {
                fn.apply(context, args);
                timer = null;
            }, delay)
        }
    }
}

function throttle(fn, delay) {
    var timer = null;
    return function(...args) {
        var context = this;
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}



function throttle(fn, delay) {
    var timer = null;
    return function(...args) {
        var context = this;
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}

function throttle(fn, delay) {
    var timer = null;
    return function(...args) {
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, delay);
        }
    }
}
