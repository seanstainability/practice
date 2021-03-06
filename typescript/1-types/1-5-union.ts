{
  /**
   *  Union Types: OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail âą
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> đ body
  // fail -> đ­ reason
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`đ ${state.response.body}`);
    } else {
      console.log(`đ­ ${state.reason}`);
    }
  }
} // ė´ë ę˛ íë ę˛ëŗ´ë¤ ë¤ė ëė¤ë discriminated union ë°Šėė´ ë ëė ë°Šėė´ë¤.
