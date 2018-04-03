"use strict";
// TypeScript 2.6
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionOrigin_1 = require("./TransactionOrigin");
var TransactionType_1 = require("./TransactionType");
var SavingsAccount = /** @class */ (function () {
    function SavingsAccount(accountHolder, birthDate) {
        this.accountHolderName = accountHolder;
        this.accountHolderBirthDate = birthDate;
        this.balance = 10000;
        this.accountHistory = [];
        this.accountType = 2;
        this.interestRate = 0.02;
        this.date = new Date();
        this.startDate = new Date();
        this.dateOpened = new Date();
        this.transaction = {};
        this.withdrawalLimit = 0;
    }
    SavingsAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var message;
        if (transactionOrigin !== TransactionOrigin_1.TransactionOrigin.branch) {
            if (this.withdrawalLimit < 6) {
                if (this.accountHistory.length >= 1) {
                    if (this.compareMonths(this.findDateLastTransaction(this.accountHistory)) < 1) {
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
                            this.withdrawalLimit++;
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
                    }
                    else {
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
                            this.withdrawalLimit = 1;
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
                    }
                }
                else {
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
                        this.withdrawalLimit = 1;
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
                }
            }
            else {
                message = 'You have exceeded the maximum number of phone and online withdrawals. We apologize for any inconvenience.';
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
        }
        else {
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
    SavingsAccount.prototype.calcInterest = function () {
        return Math.round(100 * (this.interestRate * this.balance / 12)) / 100;
    };
    SavingsAccount.prototype.showBalance = function () {
        console.log("Your balance in this account is $" + this.balance + ".");
    };
    SavingsAccount.prototype.accrueInterest = function () {
        // let yearsDifference;
        // let monthsDifference;
        // let totalMonths;
        // if(this.date > this.dateOpened){
        //     yearsDifference = this.date.getFullYear() - this.dateOpened.getFullYear();
        //
        //     if(this.date.getMonth() < this.dateOpened.getMonth()) {
        //         monthsDifference = (this.date.getMonth() - this.dateOpened.getMonth()) * -1;
        //     }
        //     else {
        //         monthsDifference = this.date.getMonth() - this.dateOpened.getMonth();
        //     }
        //
        //     totalMonths = (yearsDifference * 12) + monthsDifference;
        for (var i = 0; i < this.compareMonths(this.dateOpened); i++) {
            this.balance += this.calcInterest();
        }
        this.balance = Math.round(100 * this.balance) / 100;
    };
    ;
    SavingsAccount.prototype.advanceDate = function (numberOfDays) {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
        this.accrueInterest();
        this.startDate = new Date(this.date.toString());
    };
    SavingsAccount.prototype.findDateLastTransaction = function (acctHist) {
        var transactions = acctHist.filter(function (type) { return type.transactionType === TransactionType_1.TransactionType.withdrawal && type.success === true; });
        var lastTransaction = transactions.pop();
        return lastTransaction.transactionDate;
    };
    SavingsAccount.prototype.compareMonths = function (date) {
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
    return SavingsAccount;
}());
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=Savings.js.map