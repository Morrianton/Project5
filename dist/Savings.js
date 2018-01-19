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
        this.transaction = new Transaction;
    }
    withdrawMoney(amount, description, transactionOrigin) {
        let message;
        if (amount > this.balance) {
            message = `$${amount} has been withdrawn from your account. Your new balance is $${this.balance}.`;
            this.balance -= amount;
            console.log(message);
            this.transaction.success = true;
            this.transaction.amount = amount;
            this.transaction.resultBalance = this.balance;
            this.transaction.transactionDate = this.date;
            this.transaction.description = description;
            this.transaction.errorMessage = "";
        }
        else {
            message = `$${amount} exceeds your current balance. Please enter an amount less than or equal to $${this.balance}.`;
            console.log(message);
            this.transaction.success = false;
            this.transaction.amount = amount;
            this.transaction.resultBalance = this.balance;
            this.transaction.transactionDate = this.date;
            this.transaction.description = description;
            this.transaction.errorMessage = message;
        }
        this.accountHistory.push(this.transaction);
        return this.transaction;
    }
    depositMoney(amount, description) {
        let message;
        this.balance += amount;
        if (amount > 0) {
            message = `$${amount} has been added to your account. Your new balance is $${this.balance}.`;
            console.log(message);
            this.transaction.success = true;
            this.transaction.amount = amount;
            this.transaction.resultBalance = this.balance;
            this.transaction.transactionDate = this.date;
            this.transaction.description = description;
            this.transaction.errorMessage = "";
        }
        else {
            message = "An invalid amount has been entered.";
            console.log(message);
            this.transaction.success = false;
            this.transaction.amount = amount;
            this.transaction.resultBalance = this.balance;
            this.transaction.transactionDate = this.date;
            this.transaction.description = description;
            this.transaction.errorMessage = message;
        }
        this.accountHistory.push(this.transaction);
        return this.transaction;
    }
    calcInterest() {
        return Math.round(100 * (this.interestRate * this.balance / 12)) / 100;
    }
    accrueInterest() {
        if (this.date > this.dateOpened) {
            let difference = (((((this.dateOpened.getMilliseconds() - this.date.getMilliseconds()) / 1000) / 60) / 60) / 24);
            this.balance += (this.calcInterest() * difference) / 30;
        }
    }
    ;
    showBalance() {
        console.log(`Your balance in this account is $${this.balance}.`);
    }
    advanceDate(numberOfDays) {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=Savings.js.map