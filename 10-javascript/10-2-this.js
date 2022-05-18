console.log(this); // Window

function simpleFunc() {
  console.log(this); // Window
}
simpleFunc();

class Counter {
  count = 0;
  increase = () => {
    console.log(this); // Counter
  }
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
// const caller = counter.increase.bind(counter);
caller(); // undefined

class Bob {

}
const bob = new Bob();
bob.run = counter.increase;
bob.run();