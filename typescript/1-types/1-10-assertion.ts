{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 타입 단언하는 방법 1
  console.log((<string>result).length); // 타입 단언하는 방법 2

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱

  const button = document.querySelector("class")!; // 타입 단언하는 방법 3
}
