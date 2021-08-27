//递归方式
function handleFetchQueue(urls, max, callback) {
    let urlsCopy = [... urls];//防止影响外部urls变量
    function request() {
        function Handle () {
            count--;
            console.log('end 当前并发数为: '+count);
            if(urlsCopy.length) {//还有未请求的则递归
                request();
            } else if (count === 0) {//并发数为0则表示全部请求完成
                callback()
            }
        }
        count++;
        console.log('start 当前并发数为: '+count);
        //请求
        fetch(urlsCopy.shift()).then(Handle).catch(Handle);
        //并发数不足时递归
        count < max && request();
    }
    let count = 0;//几率并发数
    request();
}
 
//Promise方式
function sendResquest(urls, max, callback) { 
    let pending_count = 0, //并发数
    idx = 0;//当前请求的位置
 
    while (pending_count < max) { 
        _fetch(urls[idx++])
    } 
 
    async function _fetch(url) { 
        if (!url) return; 
        pending_count++; 
        console.log(url + ':start','并发数: '+pending_count); 
        await fetch(url) 
        pending_count--; 
        console.log(url + ':done','并发数: '+pending_count); 
        _fetch(urls[idx++]); 
        pending_count || callback && callback()
    } 
}
 
 
//验证
let urls = Array.from({length: 10}, (v, k) => k);
 
let fetch = function (idx) {
    return new Promise(resolve => {
        let timeout = parseInt(Math.random() * 1e4);
        setTimeout(() => {
            resolve(idx)
        }, timeout)
    })
};
 
let max = 4;
 
let callback = () => {
    console.log('run callback');
};
//执行
sendResquest(urls, max, callback)