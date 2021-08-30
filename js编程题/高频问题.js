// 字节面试题：实现一个多次执行的有间隔的定时器函数repeat
// 需要实现的函数
function repeat (func, times, wait) {
    return async function(...args){
        for(let i = 0; i < times; i++){
            await new Promise((resolve, reject) => {
                setTimeout(()=> {
                    func.apply(this, args);
                    resolve();
                }, wait)
            })
        }
    }   
}

// 使下面调用代码能正常工作
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("helloworld");//会输出4次 helloworld, 每次间隔3秒


function repeat(func, times, wait){
    return async function(...args){
        for(let i = 0; i < times; i++){
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    func.apply(this, args);
                    resolve();
                }, wait)                
            });
        }
    }
}











// 字节面试题：实现一个函数可以链式调用，
//如：u.console("hello").settimeout(3000).console("world").settimeout(3000).console()
//首先输出hello，3s后输出world,再间隔3s,再输出
function U (){
    this.time = null;
    this.totalTime = 0;
    this.console = function(text){
        if(this.time>=0){
            this.totalTime += this.time;
            setTimeout(()=>{
                console.log(text)
            },this.totalTime)
        }else{
            console.log(text)
        }
        return this
    }
    this.settimeout = function(time){
        this.time = time || 0;
        return this
    }

}
let u = new U();
u.console("hello").settimeout(3000).console("world").settimeout(3000).console()
