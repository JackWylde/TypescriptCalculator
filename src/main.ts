import { Context } from './context';
import { strategyMultiply } from './strategyMultiply';
import { strategyDivision } from './strategyDivision';
import { strategyAddition } from './strategyAddition';
import { strategySubtraction } from './strategySubtraction';
import { Strategy } from './strategy'

// needed to declare require statement 
declare var require: any;


class App {    
    public static main(): void{
        let readline = require('readline-sync');
        // take user input
        
        // <number> casts the input as a number as javascript still declares any console input as a string  
        let input1: number = <number>readline.question("Please provide a number: ");
        let input2: number = <number>readline.question("Please provide a number: ");

        // throws an error if the input is not a number 
        if(isNaN(input1) || isNaN(input2)){
            throw new Error('Invalid input. Expected two numbers.')    
        }

        // some decision making on which strategy to use 
        // create a dictionary to initialise a certain method depending on the user input
        let strategyDict: { [id: string]: Strategy; } = {
            '*': new strategyMultiply(),
            '+': new  strategyAddition(),
            '/': new strategyDivision(),
            '-': new strategySubtraction()
        }
        // check the user input against the dictionary keys 
        
        let operator: string = readline.question("Which operator would you like to use? Please declare either '+', '-', '/' or '*' ");

        // throws an error if a number is divided by zero as it is an invalid operation 
        if(input2 == 0 && operator == '/'){
            throw new Error('Numbers are not divisible by zero.')            
        }

        // if it's not in the dictionary, throw an error
        if(!Object.keys(strategyDict).includes(operator)){
            throw new Error('Invalid operator entered. Expected either "+", "-", "/" or "*".')            
        }
        // if it is in the dictionary, do something 
        else{
            let context = new Context(strategyDict[operator])
            console.log(context.executeStrategy(input1, input2))
        }
    }
}
App.main();