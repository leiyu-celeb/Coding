//代码题
// var name = '58同城';
// var obj = {
//     name: '安居客',
//     fn: () => {
//         var name = '赶集网';
//         return () => { return this.name; }
//     }
// }
// console.log(obj.fn()());
// var fo = obj.fn();
// console.log(fo());

//
// var array = [-1, 1, 3, 4, 6, 10];
// array.sort((a, b) => Math.abs(a - 3) - Math.abs(b - 3));

// console.log(array);


// var name = "123";

// function foo() {
//     console.log(this.name);
// }

// function bar() {
//     var name = '456';
//     foo();
// }

// console.log(bar());




// var a = '123'
// var obj = {
//     a: '456',
//     b: () => {
//         console.log(this.a)
//     }
// }

var a = '123'
function demo(){
    let a = '789';
    let obj = {
        a: '456',
        b: () => {
            console.log(this.a)
        }
    }
    obj.b()
}
demo();



var obj = {
    x: 100,
    show() {
        let x = 4;
        let c = () => {
            console.log(this.x);
        }
        c();
    }
}
obj.show();
