/* 3、防抖

> 实现一个`Foo`方法，接受函数`func`和时间`wait`，返回一个新函数，
新函数即时连续多次执行，但也只限制在`wait`的时间执行一次。

 */


function Foo(func, wait) {
    /* 代码实现 */
    var timer = null;
    return function(...args) {
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
            timer = null;
        }, wait);
    }
}
