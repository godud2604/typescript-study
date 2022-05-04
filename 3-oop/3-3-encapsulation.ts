{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }
  
  class CoffeeMachine {
    private static BEANS_GRAMS_PER_SHOT = 7; // class level
    private coffeeBeans = 0; // instance (object) level
  
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
  
    static makeMachine(coffeeBeans: number): CoffeeMachine { // class level
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
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

  const maker = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error('invalid')
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('steve', 'jobs');
  user.age = 6;
}