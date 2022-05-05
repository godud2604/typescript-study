// type Add = (a: number, b: number) => number;
type Add = {
  (a: number, b: number) : number
  (a: number, b: string) : number
}

// 💩 bad
const add: Add = (a, b) => {
  if (typeof b === 'string') return a
  return a + b
}

// 오버로딩은 함수가 서로 다른 여러 개의 call signatures를 가지고 있을 때 발생한다.
type Config = {
  path: string
  state: object
}

type Push = {
  (path: string): void
  (config: Config): void
}

const push:Push = (config) => {
  if (typeof config === 'string') console.log(config);
  else {
    console.log(config.path);
  }
}

/*
  Function Overloads

  동일한 이름에 매개 변수와 매개 변수 타입 또는 리턴 타입이 다른 여러 버전의 함수를 만드는 것을 말합니다. TypeScript에서는 오버로드 signatures을 작성하여 "다양한 방식으로 호출할 수 있는 함수"를 지정할 수 있습니다.
 */
  type Add2 = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number;
  };
    
  const add2: Add2 = (a, b, c?: number) => {
    return a + b;
  };
  
  add2(1,2)
  add2(1,2,3)
