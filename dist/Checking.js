"use strict";
// TypeScript 2.6
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Decorators_1 = require("./Decorators");
let CheckingAccount = class CheckingAccount {
    constructor(accountHolder, birthDate) {
        this.accountHolderName = accountHolder;
        this.accountHolderBirthDate = birthDate;
        this.balance = 1000;
        this.accountHistory = [];
        this.accountType = 1;
        this.interestRate = 0.01;
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
    advanceDate(numberOfDays) {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
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
};
CheckingAccount = __decorate([
    Decorators_1.displayClassNameWithPurpose('To prove TypeScript wrong.')
], CheckingAccount);
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=Checking.js.map