"use strict";
// TypeScript 2.6
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionOrigin_1 = require("./TransactionOrigin");
var SavingsAccount = /** @class */ (function () {
    function SavingsAccount(accountHolderName, accountHolderBirthDate) {
        this.accountHolderName = accountHolderName;
        this.accountHolderBirthDate = accountHolderBirthDate;
        this.balance = 10000;
        this.accountHistory = [];
        this.accountType = 2;
        this.interestRate = 0.02;
        this.date = new Date();
        this.startDate = new Date();
        this.dateOpened = new Date();
        this.withdrawlLimit = 0;
    }
    SavingsAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var message;
        // checks transactionOrigin
        if (transactionOrigin != TransactionOrigin_1.TransactionOrigin.branch) {
            if (this.withdrawlLimit < 6) {
                if (this.accountHistory !== null) {
                    if (this.findDateLastTransaction(this.accountHistory).getMonth() / this.date.getMonth() < 1) {
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
                            this.withdrawlLimit++;
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
                    }
                    else {
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
                            this.withdrawlLimit = 1;
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
                    }
                }
                else {
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
                        this.withdrawlLimit = 1;
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
                }
            }
            else {
                message = 'You have exceeded the maximum number of phone and online withdrawals. We apologize for any inconvenience.';
                console.log(message);
            }
        }
        else {
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
        }
        this.accountHistory.push(this.transaction);
        return this.transaction;
    };
    SavingsAccount.prototype.depositMoney = function (amount, description, transactionOrigin) {
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
    SavingsAccount.prototype.calcInterest = function () {
        return Math.round(100 * (this.interestRate * this.balance / 12)) / 100;
    };
    SavingsAccount.prototype.showBalance = function () {
        console.log("Your balance in this account is $" + this.balance + ".");
    };
    SavingsAccount.prototype.accrueInterest = function () {
        var yearsDifference;
        var monthsDifference;
        var totalMonths;
        if (this.date > this.dateOpened) {
            yearsDifference = this.date.getFullYear() - this.dateOpened.getFullYear();
            if (this.date.getMonth() < this.dateOpened.getMonth()) {
                monthsDifference = (this.date.getMonth() - this.dateOpened.getMonth()) * -1;
            }
            else {
                monthsDifference = this.date.getMonth() - this.dateOpened.getMonth();
            }
            totalMonths = (yearsDifference * 12) + monthsDifference;
            for (var i = 0; i < totalMonths; i++) {
                this.balance += this.calcInterest();
            }
            this.balance = Math.round(100 * this.balance) / 100;
        }
    };
    ;
    SavingsAccount.prototype.advanceDate = function (numberOfDays) {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
        this.accrueInterest();
        this.startDate = new Date(this.date.toString());
    };
    SavingsAccount.prototype.findDateLastTransaction = function (acctHist) {
        var transactions = acctHist.filter(function (type) { return type.transactionType === 1 && type.success === true; });
        var lastTransaction = transactions.pop();
        return lastTransaction.transactionDate;
    };
    return SavingsAccount;
}());
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=Savings.js.map