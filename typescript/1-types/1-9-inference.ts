/**
 * Type Inference
 */
let text = "hello";
function print(message = "hello") {
  console.log(message);
}
print("hello"); // default 타입을 문자열로 지정했기 때문에 문자열로 타입 추론이 가능하지만 명시해주는 습관을 들여야 한다!

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
