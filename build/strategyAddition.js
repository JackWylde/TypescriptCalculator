"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strategyAddition = /** @class */ (function () {
    function strategyAddition() {
    }
    // do something gets passed into context at runtime depending on the operator selected by the user
    strategyAddition.prototype.doSomething = function (input1, input2) {
        return input1 + input2;
    };
    return strategyAddition;
}());
exports.strategyAddition = strategyAddition;
//# sourceMappingURL=strategyAddition.js.map