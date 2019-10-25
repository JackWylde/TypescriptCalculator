import { Strategy } from "./strategy";

export class strategyDivision implements Strategy {
    // do something gets passed into context at runtime depending on the operator selected by the user
    doSomething(input1: number, input2: number):number {
        return input1 / input2;
    }
}