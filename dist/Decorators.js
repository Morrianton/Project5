"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayClassName(target) {
    console.log("Class Name: " + target.name);
}
exports.displayClassName = displayClassName;
function displayClassNameWithPurpose(purpose) {
    return function (target) {
        console.log("Class Name: " + target.name + "\nPurpose: " + purpose);
    };
}
exports.displayClassNameWithPurpose = displayClassNameWithPurpose;
//# sourceMappingURL=Decorators.js.map