{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class로 대체할 것을 권장
  // Tuple은 인덱스로 접근하기 때문에 어떤 데이터가 들어 있는지 명시적이지 않아 가독성이 떨어지며 대체 가능하다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // 배열 디스트럭처링 할당
  const [name, age] = student; // 데이터가 정해진 곳이 아니라 데이터가 사용되는 곳에서 임의로 이름을 정하고 사용할 수 있긴 하다.
}
