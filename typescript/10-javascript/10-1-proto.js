const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = []; // Array.__proto__를 상속받고, Array.__proto__는 Object.__proto__를 상속받는다.
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  /* this.makeCoffee = shots => {
    console.log('making... ☕️');
  }; */
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making... ☕️");
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // LatteMachine이 CoffeeMachine을 상속하도록 구현

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
