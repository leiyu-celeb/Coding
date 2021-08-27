// 工厂模式：一个简单的工厂模式的例子
class Man{
    constructor(name){
        this.name = name;
    }
    alertName(){
        console.log(this.name);
    }
}

class Factory{
    static create(name){
        return new Man(name);
    }
}

Factory.create('yck').alertName();     //静态方法，直接 类名.方法名 调用


//单例模式：
class Singleton {
    constructor(){

    }
}

Singleton.getInstance = (function(){
    let instance;
    return function() {
        if(!instance){
            instance = new Singleton();
        }
        return instance;
    }
}());

let s1 = Singleton().getInstance();
let s2 = Singleton().getInstance();
console.log(s1 === s2);    //true


//适配器模式：
class Plug{
    getName(){
        return '港版插头';
    }
}
class Target {
    constructor(){
        this.plug = new Plug();
    }
    getName() {
        return this.plug.getName() + ' 适配器转二脚插头'
    }
}

let target = new Target();
target.getName();       //港版插头 适配器转二脚插头



  

