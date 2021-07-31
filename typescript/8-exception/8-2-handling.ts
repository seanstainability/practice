{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to use : 의미있고 우아하게 에러처리 가능!
        // if (error instanceof OfflineError) {
        //   // TypeScript에서 구현된 catch()에는 어떠한 타입정보도 전달되지 않아서 instanceOf를 사용할 수 없다.
        // }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
