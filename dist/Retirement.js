"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionType_1 = require("./TransactionType");
var TransactionOrigin_1 = require("./TransactionOrigin");
var RetirementAccount = /** @class */ (function () {
    function RetirementAccount(accountHolder, birthDate) {
        this.accountHolderName = accountHolder;
        this.accountHolderBirthDate = birthDate;
        this.balance = 100000;
        this.accountHistory = [];
        this.accountType = 3;
        this.interestRate = 0.03;
        this.date = new Date();
        this.lastAdvanceDate = new Date();
        this.dateOpened = new Date();
        this.transaction = {};
        this.withdrawalLimit = 0;
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var message;
        if (this.compareYears(this.accountHolderBirthDate) >= 60) {
            if (transactionOrigin !== TransactionOrigin_1.TransactionOrigin.branch) {
                if (this.withdrawalLimit < 6) {
                    if (this.accountHistory.length >= 1) {
                        if (this.compareMonths(this.findDateLastWithdrawalTransaction(this.accountHistory)) < 1) {
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
        }
        else {
            if (transactionOrigin !== TransactionOrigin_1.TransactionOrigin.branch) {
                if (this.withdrawalLimit < 6) {
                    if (this.accountHistory.length >= 1) {
                        if (this.compareMonths(this.findDateLastWithdrawalTransaction(this.accountHistory)) < 1) {
                            if ((amount * 1.1) <= this.balance) {
                                this.balance -= (amount * 1.1);
                                message = "$" + amount + " has been withdrawn from your account. A 10% early withdrawal fee equaling " + amount * .1 + " has also been assessed; your account has not yet matured. Your new balance is $" + this.balance + ".";
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
                                message = amount + " with the 10% early withdrawal fee exceeds your current balance. Please enter an amount less than or equal to $" + this.balance + ".";
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
                            if ((amount * 1.1) <= this.balance) {
                                this.balance -= (amount * 1.1);
                                message = "$" + amount + " has been withdrawn from your account. A 10% early withdrawal fee equaling " + amount * .1 + " has also been assessed; your account has not yet matured. Your new balance is $" + this.balance + ".";
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
                                message = amount + " with the 10% early withdrawal fee exceeds your current balance. Please enter an amount less than or equal to $" + this.balance + ".";
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
                        if ((amount * 1.1) <= this.balance) {
                            this.balance -= (amount * 1.1);
                            message = "$" + amount + " has been withdrawn from your account. A 10% early withdrawal fee equaling " + amount * .1 + " has also been assessed; your account has not yet matured. Your new balance is $" + this.balance + ".";
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
                            message = amount + " with the 10% early withdrawal fee exceeds your current balance. Please enter an amount less than or equal to $" + this.balance + ".";
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
                if ((amount * 1.1) <= this.balance) {
                    this.balance -= (amount * 1.1);
                    message = "$" + amount + " has been withdrawn from your account. A 10% early withdrawal fee equaling " + amount * .1 + " has also been assessed; your account has not yet matured. Your new balance is $" + this.balance + ".";
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
                    message = "$" + amount + " with the 10% early withdrawal fee exceeds your current balance. Please enter an amount less than or equal to $" + this.balance + ".";
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
        this.accountHistory.push(this.transaction);
        return this.transaction;
    };
    RetirementAccount.prototype.depositMoney = function (amount, description, transactionOrigin) {
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
    RetirementAccount.prototype.calcInterest = function () {
        return Math.round(100 * (this.interestRate * this.balance / 12)) / 100;
    };
    RetirementAccount.prototype.showBalance = function () {
        console.log("Your balance in this account is $" + this.balance + ".");
    };
    RetirementAccount.prototype.accrueInterest = function () {
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
        for (var i = 0; i < this.compareMonths(this.lastAdvanceDate); i++) {
            this.balance += this.calcInterest();
        }
        this.balance = Math.round(100 * this.balance) / 100;
    };
    ;
    RetirementAccount.prototype.advanceDate = function (numberOfDays) {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
        this.accrueInterest();
        this.lastAdvanceDate = new Date(this.date.setDate(this.date.getDate()));
    };
    RetirementAccount.prototype.findDateLastWithdrawalTransaction = function (acctHist) {
        var transactions = acctHist.filter(function (type) { return type.transactionType === TransactionType_1.TransactionType.withdrawal && type.success === true; });
        var lastTransaction = transactions.pop();
        return lastTransaction.transactionDate;
    };
    RetirementAccount.prototype.compareMonths = function (date) {
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
    RetirementAccount.prototype.compareYears = function (date) {
        return Math.round(this.compareMonths(date) / 12);
    };
    return RetirementAccount;
}());
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=Retirement.js.map