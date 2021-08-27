function Subject() {      //被观察者
  this.observers = [];    //被观察者维护一组观察者
}

Subject.prototype = {
  //订阅
  subscribe: function(observer) {
    this.observers.push(observer);
  },
  //取消订阅
  unsubscribe: function(observerToRemove) {
    this.observers = this.observers.filter(observer => {
      return observer !== observerToRemove;
    })
  },
   notify: function() {
     this.observers.forEach(observer => {
       observer.call();   //observer是function
     })
   }
}

const subject = new Subject();

function observer1() {
  console.log('Observer 1 firing!');
}
function observer2() {
  console.log('Observer 2 firing!');
}

//observer1和observer2 订阅
subject.subscribe(observer1);
subject.subscribe(observer2);
console.log(subject);
subject.notify();

//observer2取消订阅
subject.unsubscribe(observer2);
console.log(subject);
subject.notify();
