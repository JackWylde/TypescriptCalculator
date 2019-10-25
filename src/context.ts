import { Strategy } from "./strategy";


export class Context {

    // context must be initiated with a strategy 
   constructor(private strategy: Strategy){
   }

    // executes a particular strategy depending on what has been passed in    
   public executeStrategy(input1: number, input2: number){
       return this.strategy.doSomething(input1, input2);
   }
}