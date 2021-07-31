{
  // function: login -> success, fail ⏱
  type SuccessState = {
    result: "success"; // 타입을 정의할 때 같은 key로 value가 구분되도록 작성
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    // 타입이 보장되면서 서로 다른 state를 만들어준다. 훨씬 직관적이다.
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
