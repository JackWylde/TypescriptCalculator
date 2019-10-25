"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strategyMultiply = /** @class */ (function () {
    function strategyMultiply() {
    }
    // do something gets passed into context at runtime depending on the operator selected by the user
    strategyMultiply.prototype.doSomething = function (input1, input2) {
        return input1 * input2;
    };
    return strategyMultiply;
}());
exports.strategyMultiply = strategyMultiply;
//# sourceMappingURL=strategyMultiply.js.map