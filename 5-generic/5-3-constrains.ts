interface Employee {
  pay(): void;
}

interface Employee2<T> {
  pay(): T;
}


class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }

  workFullTime() {
     
  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }

  workPartTime() {

  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const hy = new FullTimeEmployee();
const ms = new PartTimeEmployee();
hy.workFullTime();
ms.workPartTime();

const hyAfterPay = payBad(hy) as FullTimeEmployee;
const msAfterPay = payBad(ms);

const hyAfterPay2 = pay(hy);
hyAfterPay2.workFullTime();



const obj = {
  name: 'hy',
  age: 20,
};

console.log(getValue(obj, 'name')); // hy

// K extends keyof T :  T라는 타입의 오브젝트에 들어있는 것중에 하나인 것
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}