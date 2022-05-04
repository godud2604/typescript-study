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

  const maker = CoffeeMachine.makeMachine;
}