type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
}

class CoffeeMachine {
  static BEANS_GRAMS_PER_SHOT = 7; // class level
  coffeeBeans = 0; // instance (object) level

  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }

  static makeMachine(coffeeBeans: number): CoffeeMachine { // class level
    return new CoffeeMachine(coffeeBeans);
  }

  makeCoffee(shots: number): CoffeeCup {
    if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMS_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    } 

    this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMS_PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  }
}

const coffeeMachine = new CoffeeMachine(32);

const static_make_machine = CoffeeMachine.makeMachine(3); // static 을 붙인 함수는 오브젝트를 생성하지않고도, 클래스 레벨에서 함수 호출 가능