function Parent () {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

Parent.prototype.val = 1;

Parent.prototype.arr = [1, 2];

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin

var child2 = new Child();

child2.name = '111';

child2.val = 2;

child2.arr.push(3);

console.log(child1.name);
console.log(child1.arr);
console.log(child2.arr);




// function Parent() {
//     this.names = [1, 2];
// }

// function Child() {
//     Parent.call(this);
// }

// var child1 = new Child();
// console.log(child1);

// console.log(child1);
// var child2 = new Child();
// console.log(child2);

// child1.names.push(3);
// console.log(child1);
// console.log(child2);


/**寄生组合式继承 */
// function Parent(name) {
//     this.name = name;
//     this.colors = ['red', 'blue', 'green'];
// }

// Parent.prototype.getName = function() {
//     console.log(this.name);
// }

// Parent.prototype.arr = [1, 2, 3]

// function Child(name, age) {
//     Parent.call(this, name);
//     this.age = age;
// }

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// var child1 = new Child('leiyu', 20);
// var child2 = new Child('aa', 18);
// // child1.arr.push(4);
// console.log(child1.arr);
// console.log(child2.arr);


// //方法三：圣杯模式   面试写这个
// function inherit(child, parent) {
//     function F() {};
//     F.prototype = parent.prototype;
//     child.prototype = new F();
//     child.prototype.constructor = child;
//     child.prototype.uber = parent.prototype;   
// }


function inherit(child, parent) {
    function F() {};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.prototype.uber = parent.prototype;
}


// inherit(Child, Parent);

// var child1 = new Child('leiyu', 18);

// console.log(child1); // Child { name: 'leiyu', colors: [ 'red', 'blue', 'green' ], age: 18 }

// console.log(child1.getName());  // 'leiyu'  表示child1实例能用Parent.prototype的方法getName, 说明继承成功



// //关键的三步  不封装的写法  方法一
// var F = function() {}
// F.prototype = Parent.prototype;
// Child.prototype = new F();



//寄生组合式继承，也叫圣杯模式，普遍认为是最好的继承方式

//封装成一个方法：
//方法二： 
// function createObj(o){
//     function F() {};
//     F.prototype = o;
//     return new F();   
// }

// function inherit(child, parent) {
//     var f = createObj(parent.prototype);
//     f.constructor = child;
//     child.prototype = f;
// }

// inherit(Child, Parent);
