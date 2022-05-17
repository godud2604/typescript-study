{
  const obj = {
    name: 'hy',
  };
  obj.name; // hy
  obj['name']; // hy
  
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string type
  const text:Name = 'string';

  type Gender = Animal['gender']; // 'male' | 'female'

  // Animal의 모든 type을 할당
  type Keys = keyof Animal; // 'name' | 'age' | 'gender', union string
  const key: Keys = 'gender'; 

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'hy',
    gender: 'female'
  };
}