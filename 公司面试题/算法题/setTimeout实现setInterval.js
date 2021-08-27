

function myInterval(fn, time) {
    let res = {
      target: '' // 需要注意：利用引用类型保证target一直是最新的
    }
    function test () {
      fn()
      res.target = setTimeout(test, time);
    }
    test()
    return res;
}


function myClearInterval(timer) {
    clearTimeout(timer.target)
}

let t = myInterval(()=> {
    console.log(111)
}, 1000)

setTimeout(() => {
    myClearInterval(t);
}, 2000);


/* 
    setTimeout实现setInterval
*/
function myInterval(fn, time) {
    let res = {
        target: ''
    }
    function loop() {
        fn();
        res.target = setTimeout(loop, time);
    }
    loop();
    return res;
}

function myClearInterval(timer) {
    clearTimeout(timer.target);
}

let timer = myInterval(() => {
    console.log(222);
}, 1000)

setTimeout(() => {
    myClearInterval(timer)
}, 5000)


