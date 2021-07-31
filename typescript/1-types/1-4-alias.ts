{
  /**
   * Type Aliases: 원하는 타입을 정의할 수 있다.
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   * String Literal Types: Type Aliases로 타입이 아니라 특정한 문자열이나 값 자체를 정의할 수도 있다.
   */
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
