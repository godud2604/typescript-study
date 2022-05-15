class NetworkClient {
  tryConnect(): void {
    throw new Error('no network!');
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

class App {
  constructor(private userService: UserService) {}

  run() {
    try {
      this.userService.login();
    } catch(e) {
      console.error(e);
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
