"use strict";
// TypeScript 2.6
Object.defineProperty(exports, "__esModule", { value: true });
function displayClassName(target) {
    console.log(`Class Name: ${target.name}`);
}
exports.displayClassName = displayClassName;
function displayClassNameWithPurpose(purpose) {
    return (target) => {
        console.log(`Class Name: ${target.name}\nPurpose: ${purpose}`);
    };
}
exports.displayClassNameWithPurpose = displayClassNameWithPurpose;
//# sourceMappingURL=Decorators.js.map