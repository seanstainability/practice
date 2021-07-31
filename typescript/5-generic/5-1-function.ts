{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  } // 숫자 타입만 사용할 수 있으므로 타입별로 함수를 다 만들어야 하는가?

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  } // 타입이 보장되지 않는다.
  const result = checkNotNullAnyBad(123);

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  } // 어떤 타입이든 받을 수 있으면서 타입도 보장된다.
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
