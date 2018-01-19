"use strict";
// TypeScript 2.6
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionOrigin_1 = require("./TransactionOrigin");
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
        this.startDate = new Date();
        this.dateOpened = new Date();
    }
    withdrawMoney(amount, description, transactionOrigin) {
        let message;
        if (transactionOrigin == TransactionOrigin_1.TransactionOrigin.branch || TransactionOrigin_1.TransactionOrigin.web || TransactionOrigin_1.TransactionOrigin.phone) {
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
        this.accrueInterest();
        this.startDate = new Date(this.date);
    }
    calcInterest() {
        return (this.interestRate / 12) * this.balance;
    }
    accrueInterest() {
        let yearsDifference;
        let monthsDifference;
        let totalMonths;
        if (this.date > this.dateOpened) {
            yearsDifference = this.date.getFullYear() - this.dateOpened.getFullYear();
            if (this.date.getMonth() < this.dateOpened.getMonth()) {
                monthsDifference = (this.date.getMonth() - this.dateOpened.getMonth()) * -1;
            }
            else {
                monthsDifference = this.date.getMonth() - this.dateOpened.getMonth();
            }
            totalMonths = (yearsDifference * 12) + monthsDifference;
            for (let i = 0; i < totalMonths; i++) {
                this.balance += this.calcInterest();
            }
            this.balance = Math.round(100 * this.balance) / 100;
        }
    }
    ;
};
CheckingAccount = __decorate([
    Decorators_1.displayClassNameWithPurpose('To prove TypeScript wrong.')
], CheckingAccount);
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=Checking.js.map