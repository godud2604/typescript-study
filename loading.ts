{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  // 대게 유니온 타입경우 여러 케이스별로 다른 로직을 적용할때는 switch가 더 좋다.
  // 다른 타입(retrying 재시도중)을 추가 한다면 추가된 케이스는 전부다 else에 들어가서 예상하지 못한 오류가 발생할 것.
  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        console.log('loading...');
        break;
      case 'success':
        console.log(`😃 ${state.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${state.reason}`);
      default:
        throw new Error(`unknown state: ${state}`);
    }   
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
