// const name1 = "Vivienne";

// console.log('My name is' + (name1 === 'Vivienne') ? 'Vivienne' : 'unknown');


// const obj = {};
// const s1 = Symbol('s');
// const s2 = Symbol('s');

// const key1 = { single: 1 };
// const key2 = { single : 2 };
// obj[s1] = 's1';
// obj[s2] = 's2';
// obj[key1] = 'key1';
// obj[key2] = 'key2';
// console.log(obj[s1]);
// console.log(obj[key1]);


// function Book() {
//     this.type = 'english';
// }

// Book.prototype.getType = function() {
//     console.log(this.type);
// }

// const book = new Book();
// console.log(book.getType());
// book.type = 'Math';
// console.log(book.valueOf());

// var end = Math.pow(2, 50);
// var start = end - 100;
// var count = 0;
// for(var i = start; i <= end; i++){
//     ++count;
// }
// console.log(count);

//1
// const ret = (async function() {
//     let a;
//     try {
//         a = await Promise.reject("b");
//     } catch(e) {
//         a = e;
//     }
//     return a;
// })();
// setTimeout(() => console.log(ret), 0);


//2
// var name = 'window';
// function logger() {
//     "use strict";
//     var log = {
//         name: 'innerlog',
//         showName: () => console.log(this.name)
//     }
//     this.name = "logger";
//     this.showName = log.showName;
// }
// new logger().showName.call(window)




// Function.prototype.sangfor = function() {
//     return Function.prototype.call.bind(this);
// }

// console.log(Array.prototype.push.sangfor()([], 0, 1, 2));




// function fn(a = 1) {
//     console.log(a);
// }
// fn();
// fn(undefined);
// fn(null);
// fn(false);



// function SangFor() {};
// SangFor.prototype.name = 100;
// let a = new SangFor();
// console.log(a.name);
// SangFor.prototype.name = 200;
// console.log(a.name);
// SangFor.prototype = { name: 300 };
// console.log(a.name);



// let obj = {
//     sangfor: 100,
//     log() {
//         sangfor = 200;
//         console.log(this.sangfor);
//     }
// }

// obj.log();
// let { log } = obj;
// log();



// let xx = {
//     sangfor: 100
// }
// Object.defineProperty(xx, 'sangfor', {
//     get () {
//         return 200;
//     }
// })
// xx.sangfor = 300;
// console.log(xx.sangfor);




// function Sangfor(name) {
//     return this.name = name;
// }
// console.log([0,'0',[],{},null].map(i => typeof new Sangfor(i).name))


// let x = {
//     toString() {
//         return 20;
//     },
//     valueOf() {
//         return '30';
//     }
// }

// console.log(x == '20');
// console.log(x == 30);

// function test(){
//     getName = function() {
//         Promise.resolve().then(() => console.log(0));
//         console.log(1);
//     };
//     return this;
// }
// test.getName = function(){
//     setTimeout(() => console.log(2), 0);
//     console.log(3);
// }
// test.prototype.getName = function() {
//     console.log(4);
// }

// var getName = function() {
//     console.log(5);
// }

// function getName() {
//     console.log(6);
// }
// test.getName();
// getName();
// test().getName();
// getName();
// new test.getName();
// new test().getName();
// new new test().getName();

// let string = 'str';
// let array = [1, 2, 3];
// let object = {};

// function foo(string, array, object) {
//     string = 'string';
//     array.push(4);
//     array = [];

//     object.str = 1;
//     object = { string : 1 };

// }

// foo(string, array, object);

// console.log(string,  array, object);










