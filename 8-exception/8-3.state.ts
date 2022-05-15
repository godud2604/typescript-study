{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  }

  type SuccessState = {
    result: 'success';
  }

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    // tryConnect는 예상할 수 있는 에러이다. Exception error를 남발하면 안 된다.
    tryConnect(): ResultState {
      return {
        result: 'fail',
        reason: 'offline',
      }
    }
  }

  class UserService {
    // dependency Injection (필요한 것을 외부에서 주입)
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login.....
    }
  }

  class OfflineError extends Error {}

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch(error) {
        // instanceof라는 키워드는 여기에서 사용 불가능
        // => catch로 에러를 받는 순간 any type이 되기 때문에 타입에 대한 정보가 사라진다.
        if(error instanceof OfflineError) {
        }
      } finally {
        console.log('finally!!!');
      }
    }
  }

  const client = new NetworkClient();
  const userService = new UserService(client);
  // userService.login();
  const app = new App(userService);
  app.run();

}