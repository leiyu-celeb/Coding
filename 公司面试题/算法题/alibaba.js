// // 1. 链式调用
// // 2. 实现sleep函数
// class PlayBoy {
//     constructor (name) {
//       this.name = name;
//     }
  
//     sayHi () {
//       console.log('大家好，我是' + this.name);
//       return this;
//     }
  
//     sleep (time) {
//       const start = new Date().getTime();
//       while (new Date().getTime() - start < time) {};
//       return this;
//     }
  
//     play (game) {
//       console.log('我在玩儿' + game);
//       return this;
//     }
//   }
  
//   const playBoy = new PlayBoy('Bob');
//   playBoy.sayHi().sleep(2000).play('王者荣耀').sleep(3000).play('奇迹暖暖');
  // 输出
  // Bob
  // 等待2s
  // 我在玩儿王者荣耀
  // 等待3s
  // 我在玩儿奇迹暖暖







// 实现Cat类中的如下方法调用
// new Cat("胖胖").eat('鱼').sleep(2).drink("牛奶");
// 执行后按顺序打印如下
// 我是小猫胖胖!
// 我吃鱼
// 我睡觉睡了2秒（等待2秒后打印）
// 我喝牛奶


class Cat {
    constructor(name) {
        this.name = name;
        console.log('我是小猫' + this.name + '!');
    }
    eat(food) {
        console.log('我吃' + food);
        return this;
    }
    sleep(time) {
        const prev = new Date().getTime();           
        while(new Date().getTime() - prev < time * 1000) {}
        console.log('我睡觉了' + time + '秒');
        return this;
    }
    drink(liquid) {
        console.log('我喝' + liquid);
        return this;
    }
}

new Cat("胖胖").eat('鱼').sleep(2).drink("牛奶");
