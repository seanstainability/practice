{
  // global scope로 이름이 충돌되지 않게 하기 위해 중괄호 설정

  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩 undefined로 선언된 변수는 undefined만 할당할 수 있기 때문
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 자바스크립트와의 호환을 위해 존재하지만 쓰지 않는 것이 좋음
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    // 함수에서 아무것도 리턴하지 않을 때 void를 사용한다.
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // never은 함수에서 리턴할 계획이 전혀 없다는 뜻 -> 에러를 던지거나 while true의 경우만 존재
    // message -> server (log)
    throw new Error(message);
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩 구체적이지 않음
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
