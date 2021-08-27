// 1.原生Ajax发送网络请求

const xhr = new XMLHttpRequest();

xhr.open('get', "https://api.apiopen.top/getJoke", true);

xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){    
        if(xhr.status === 200){  //状态码为200表示数据完美的回来了，并且请求的页面存在    2XX都表示成功
            console.log(xhr.response);
        }
    }
}



const xhr = new XMLHttpRequest();

xhr.open('get', "https://api.apiopen.top/getJoke", true);
xhr.send(null);
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if( (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
            console.log(xhr.responseText);
        }else{
            console.log("request was not successful" + xhr.status);
        }
    }
}


const xhr = new XMLHttpRequest();

xhr.open('get', "xxx", true);
xhr.send(null);
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            console.log(xhr.responseText);
        }else{
            console.log(xhr.status);
        }
    }
}






//2.jQuery-ajax写法
$.ajax({
    type: 'post',
    url: '',         //网络请求接口
    async: true,     //async异步， sync同步
    data: data,      //针对post请求
    dataType: 'jsonp',
    success: function(msg) {

    },
    err: function(error) {

    }
})




//3.Promise封装ajax请求：
const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', "https://api.apiopen.top/getJoke", true);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){  //状态码2XX表示成功
                resolve(xhr.response)
            }else{
                reject(xhr.status);
            }
        }
    }
})

p.then((value) => {
    console.log(value);
}).catch((err) => {
    console.error(err);
});

