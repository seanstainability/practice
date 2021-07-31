console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();
class Counter {
  count = 0;
  increase = () => {
    // console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
//const caller = counter.increase.bind(counter);
caller(); // 변수는 기본적으로 global 객체에 등록되지 않기 때문에 this를 잃어버려 undefined가 나온다. -> 따라서 bind 작업이 필요하다.
// Counter의 increase 함수를 선언할 때 화살표 함수를 사용하면 bind를 해주지 않아도, 선언될 당시의 문맥의 this를 유지해준다.

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // bob이 불렀으므로 Bob이 this가 된다.
