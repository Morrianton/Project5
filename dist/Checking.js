"use strict";
// TypeScript 2.6
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionType_1 = require("./TransactionType");
var Decorators_1 = require("./Decorators");
var CheckingAccount = /** @class */ (function () {
    function CheckingAccount(accountHolder, birthDate) {
        this.accountHolderName = accountHolder;
        this.accountHolderBirthDate = birthDate;
        this.balance = 1000;
        this.accountHistory = [];
        this.accountType = 1;
        this.interestRate = 0.01;
        this.date = new Date();
        this.lastAdvanceDate = new Date();
        this.dateOpened = new Date();
        this.transaction = {};
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var message;
        if (amount <= this.balance) {
            this.balance -= amount;
            message = "$" + amount + " has been withdrawn from your account. Your new balance is $" + this.balance + ".";
            console.log(message);
            this.transaction = {
                transactionType: TransactionType_1.TransactionType.withdrawal,
                origin: transactionOrigin,
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.date,
                description: description,
                errorMessage: ""
            };
        }
        else {
            message = "$" + amount + " exceeds your current balance. Please enter an amount less than or equal to $" + this.balance + ".";
            console.log(message);
            this.transaction = {
                transactionType: TransactionType_1.TransactionType.withdrawal,
                origin: transactionOrigin,
                success: false,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.date,
                description: description,
                errorMessage: message
            };
        }
        this.accountHistory.push(this.transaction);
        return this.transaction;
    };
    CheckingAccount.prototype.depositMoney = function (amount, description, transactionOrigin) {
        var message;
        this.balance += amount;
        if (amount > 0) {
            message = "$" + amount + " has been added to your account. Your new balance is $" + this.balance + ".";
            console.log(message);
            this.transaction = {
                transactionType: TransactionType_1.TransactionType.deposit,
                origin: transactionOrigin,
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.date,
                description: description,
                errorMessage: ""
            };
        }
        else {
            message = "An invalid amount has been entered.";
            console.log(message);
            this.transaction = {
                transactionType: TransactionType_1.TransactionType.deposit,
                origin: transactionOrigin,
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.date,
                description: description,
                errorMessage: ""
            };
        }
        this.accountHistory.push(this.transaction);
        return this.transaction;
    };
    CheckingAccount.prototype.advanceDate = function (numberOfDays) {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
        this.accrueInterest();
        this.lastAdvanceDate = new Date(this.date.setDate(this.date.getDate()));
    };
    CheckingAccount.prototype.calcInterest = function () {
        // return (this.interestRate / 12) * this.balance;
        return Math.round(100 * (this.interestRate * this.balance / 12)) / 100;
    };
    CheckingAccount.prototype.accrueInterest = function () {
        for (var i = 0; i < this.compareMonths(this.lastAdvanceDate); i++) {
            this.balance += this.calcInterest();
        }
        this.balance = Math.round(100 * this.balance) / 100;
    };
    ;
    CheckingAccount.prototype.compareMonths = function (date) {
        var yearsDifference;
        var monthsDifference;
        var totalMonths;
        yearsDifference = this.date.getFullYear() - date.getFullYear();
        if (this.date.getMonth() < date.getMonth()) {
            monthsDifference = (this.date.getMonth() - date.getMonth()) * -1;
        }
        else {
            monthsDifference = this.date.getMonth() - date.getMonth();
        }
        totalMonths = (yearsDifference * 12) + monthsDifference;
        return totalMonths;
    };
    CheckingAccount = __decorate([
        Decorators_1.displayClassNameWithPurpose('To prove TypeScript wrong.')
    ], CheckingAccount);
    return CheckingAccount;
}());
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=Checking.js.map