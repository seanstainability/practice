{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 }); // 정의하고 수정할 수 없게 만드는 방법
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday"; // enum은 타입이 완벽히 보장되지 않고, Union 타입으로 대체 가능하다.
  enum Days { // enum에서는 첫글자만 대문자로 표기한다.
    Monday = 1, // 원래는 자동으로 0부터 지정된다. 문자열도 지정해줄 수 있다.
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // enum 타입으로 지정된 변수에 다른 어떤 숫자도 할당할 수 있다는 문제점을 가지고 있다.
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}
