"use strict";
// TypeScript 2.6
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Savings_1 = require("./Savings");
var RetirementAccount = /** @class */ (function (_super) {
    __extends(RetirementAccount, _super);
    function RetirementAccount(accountHolderName, accountHolderBirthDate) {
        var _this = _super.call(this, accountHolderName, accountHolderBirthDate) || this;
        _this.accountHolderName = accountHolderName;
        _this.accountHolderBirthDate = accountHolderBirthDate;
        _this.balance = 100000;
        _this.accountHistory = [];
        _this.accountType = 2;
        _this.interestRate = 0.03;
        _this.date = new Date();
        _this.dateOpened = new Date();
        return _this;
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var message;
        if (amount > this.balance) {
            message = "$" + amount + " has been withdrawn from your account. Your new balance is $" + this.balance + ".";
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
            message = "$" + amount + " exceeds your current balance. Please enter an amount less than or equal to $" + this.balance + ".";
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
    };
    RetirementAccount.prototype.depositMoney = function (amount, description) {
        var message;
        this.balance += amount;
        if (amount > 0) {
            message = "$" + amount + " has been added to your account. Your new balance is $" + this.balance + ".";
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
    };
    RetirementAccount.prototype.calcInterest = function () {
        return Math.round(100 * (this.interestRate * this.balance / 12)) / 100;
    };
    RetirementAccount.prototype.accrueInterest = function () {
        if (this.date > this.dateOpened) {
            var difference = (((((this.dateOpened.getMilliseconds() - this.date.getMilliseconds()) / 1000) / 60) / 60) / 24);
            this.balance += (this.calcInterest() * difference) / 30;
        }
    };
    ;
    RetirementAccount.prototype.showBalance = function () {
        console.log("Your balance in this account is $" + this.balance + ".");
    };
    RetirementAccount.prototype.advanceDate = function (numberOfDays) {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
    };
    return RetirementAccount;
}(Savings_1.SavingsAccount));
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=Retirement.js.map