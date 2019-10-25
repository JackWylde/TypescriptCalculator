"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context = /** @class */ (function () {
    // context must be initiated with a strategy 
    function Context(strategy) {
        this.strategy = strategy;
    }
    // executes a particular strategy depending on what has been passed in    
    Context.prototype.executeStrategy = function (input1, input2) {
        return this.strategy.doSomething(input1, input2);
    };
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map