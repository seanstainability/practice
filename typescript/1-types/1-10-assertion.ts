{
  /**
   * Type Assertions π©
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // νμ λ¨μΈνλ λ°©λ² 1
  console.log((<string>result).length); // νμ λ¨μΈνλ λ°©λ² 2

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // π±

  const button = document.querySelector("class")!; // νμ λ¨μΈνλ λ°©λ² 3
}
