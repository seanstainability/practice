{
  // Array
  const fruits: string[] = ["π", "π"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, classλ‘ λμ²΄ν  κ²μ κΆμ₯
  // Tupleμ μΈλ±μ€λ‘ μ κ·ΌνκΈ° λλ¬Έμ μ΄λ€ λ°μ΄ν°κ° λ€μ΄ μλμ§ λͺμμ μ΄μ§ μμ κ°λμ±μ΄ λ¨μ΄μ§λ©° λμ²΄ κ°λ₯νλ€.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // λ°°μ΄ λμ€νΈλ­μ²λ§ ν λΉ
  const [name, age] = student; // λ°μ΄ν°κ° μ ν΄μ§ κ³³μ΄ μλλΌ λ°μ΄ν°κ° μ¬μ©λλ κ³³μμ μμλ‘ μ΄λ¦μ μ νκ³  μ¬μ©ν  μ μκΈ΄ νλ€.
}
