"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strategySubtraction = /** @class */ (function () {
    function strategySubtraction() {
    }
    // do something gets passed into context at runtime depending on the operator selected by the user
    strategySubtraction.prototype.doSomething = function (input1, input2) {
        return input1 - input2;
    };
    return strategySubtraction;
}());
exports.strategySubtraction = strategySubtraction;
//# sourceMappingURL=strategySubtraction.js.map