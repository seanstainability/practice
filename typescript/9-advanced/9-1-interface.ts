{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object β
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class β
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    z: number;
    x: number;
    y: number;
  }

  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // π only interfaces can be merged. -> λμΌν μ΄λ¦μ μΈν°νμ΄μ€λ₯Ό μ€λ³΅ μ μνλ©΄ ν©μ³μ€λ€. νμμ μ€λ³΅ μ μ μλ¬κ° λλ€.
  interface PositionInterface {
    z: number;
  }

  // type PositionType {
  // }

  // π Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";
}
