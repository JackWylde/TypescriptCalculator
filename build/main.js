"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = require("./context");
var strategyMultiply_1 = require("./strategyMultiply");
var strategyDivision_1 = require("./strategyDivision");
var strategyAddition_1 = require("./strategyAddition");
var strategySubtraction_1 = require("./strategySubtraction");
var App = /** @class */ (function () {
    function App() {
    }
    App.main = function () {
        var readline = require('readline-sync');
        // take user input
        // <number> casts the input as a number as javascript still declares any console input as a string  
        var input1 = readline.question("Please provide a number: ");
        var input2 = readline.question("Please provide a number: ");
        // throws an error if the input is not a number 
        if (isNaN(input1) || isNaN(input2)) {
            throw new Error('Invalid input. Expected two numbers.');
        }
        // some decision making on which strategy to use 
        // create a dictionary to initialise a certain method depending on the user input
        var strategyDict = {
            '*': new strategyMultiply_1.strategyMultiply(),
            '+': new strategyAddition_1.strategyAddition(),
            '/': new strategyDivision_1.strategyDivision(),
            '-': new strategySubtraction_1.strategySubtraction()
        };
        // check the user input against the dictionary keys 
        var operator = readline.question("Which operator would you like to use? Please declare either '+', '-', '/' or '*' ");
        // throws an error if a number is divided by zero as it is an invalid operation 
        if (input2 == 0 && operator == '/') {
            throw new Error('Numbers are not divisible by zero.');
        }
        // if it's not in the dictionary, throw an error
        if (!Object.keys(strategyDict).includes(operator)) {
            throw new Error('Invalid operator entered. Expected either "+", "-", "/" or "*".');
        }
        // if it is in the dictionary, do something 
        else {
            var context_2 = new context_1.Context(strategyDict[operator]);
            console.log(context_2.executeStrategy(input1, input2));
        }
    };
    return App;
}());
App.main();
//# sourceMappingURL=main.js.map