"use strict";
// TypeScript 2.6
Object.defineProperty(exports, "__esModule", { value: true });
class SavingsAccount {
    constructor(accountHolderName, accountHolderBirthDate) {
        this.accountHolderName = accountHolderName;
        this.accountHolderBirthDate = accountHolderBirthDate;
        this.balance = 10000;
        this.accountHistory = [];
        this.accountType = 2;
        this.interestRate = 0.02;
        this.date = new Date();
        this.dateOpened = new Date();
    }
    withdrawMoney(amount, description, transactionOrigin) {
        return undefined;
    }
    depositMoney(amount, description) {
        return undefined;
    }
    advanceDate(numberOfDays) {
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=Savings.js.map