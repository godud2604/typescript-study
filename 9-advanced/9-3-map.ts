type Video = {
  title: string;
  author: string;
  description: string;
};

type Optional<T> = {
  [P in keyof T]?: T[P] // for...in 을 썼을 때와 동일 (키 값 순회)
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
  title: 'hi',
};

type Animal = {
  name: string;
  age: number;
};

const animal: Optional<Animal> = {
  name: 'dog'
};
animal.name = 'ellie';

const video: ReadOnly<Video> = {
  title: '제목',
  author: 'hy',
  description: '설명'
};
// video.title = '읽기 전용 속성이므로 제목 변경 불가';

type Nullable<T> = { 
  [P in keyof T]: T[P] | null 
};
const obj2: Nullable<Video> = {
  title: null,
  author: 'hy',
  description: '설명'
};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};