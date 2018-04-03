// TypeScript 2.6

import {Account} from "./Account";
import {AccountType} from "./AccountType";
import {Transaction} from "./InterfaceTransaction";
import {TransactionOrigin} from "./TransactionOrigin";
import {TransactionType} from "./TransactionType";

export class SavingsAccount implements Account {
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountHistory: Transaction[];
    accountType: AccountType;
    interestRate: number;
    date: Date;
    startDate: Date;
    dateOpened: Date;
    transaction: Transaction;
    withdrawalLimit: number;

    constructor(accountHolder, birthDate){
        this.accountHolderName = accountHolder;
        this.accountHolderBirthDate = birthDate;
        this.balance = 10000;
        this.accountHistory = [];
        this.accountType = 2;
        this.interestRate = 0.02;
        this.date = new Date();
        this.startDate = new Date();
        this.dateOpened = new Date();
        this.transaction = <Transaction>{ };
        this.withdrawalLimit = 0;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        let message: string;

        if (transactionOrigin !== TransactionOrigin.branch) {

            if (this.withdrawalLimit < 6) {

                if (this.accountHistory.length >= 1) {

                    if (this.compareMonths(this.findDateLastTransaction(this.accountHistory)) < 1) {
                        if (amount <= this.balance) {
                            this.balance -= amount;
                            message = `$${amount} has been withdrawn from your account. Your new balance is $${this.balance}.`;
                            console.log(message);
                            this.transaction = {
                                transactionType: TransactionType.withdrawal,
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
                            message = `$${amount} exceeds your current balance. Please enter an amount less than or equal to $${this.balance}.`;
                            console.log(message);
                            this.transaction = {
                                transactionType: TransactionType.withdrawal,
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
                            message = `$${amount} has been withdrawn from your account. Your new balance is $${this.balance}.`;
                            console.log(message);
                            this.transaction = {
                                transactionType: TransactionType.withdrawal,
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
                            message = `$${amount} exceeds your current balance. Please enter an amount less than or equal to $${this.balance}.`;
                            console.log(message);
                            this.transaction = {
                                transactionType: TransactionType.withdrawal,
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
                        message = `$${amount} has been withdrawn from your account. Your new balance is $${this.balance}.`;
                        console.log(message);
                        this.transaction = {
                            transactionType: TransactionType.withdrawal,
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
                        message = `$${amount} exceeds your current balance. Please enter an amount less than or equal to $${this.balance}.`;
                        console.log(message);
                        this.transaction = {
                            transactionType: TransactionType.withdrawal,
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
                    transactionType: TransactionType.withdrawal,
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
                message = `$${amount} has been withdrawn from your account. Your new balance is $${this.balance}.`;
                console.log(message);
                this.transaction = {
                    transactionType: TransactionType.withdrawal,
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
                message = `$${amount} exceeds your current balance. Please enter an amount less than or equal to $${this.balance}.`;
                console.log(message);
                this.transaction = {
                    transactionType: TransactionType.withdrawal,
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
    }

    depositMoney(amount: number, description: string, transactionOrigin?: TransactionOrigin): Transaction {
        let message;
        this.balance += amount;
        if(amount > 0) {
            message = `$${amount} has been added to your account. Your new balance is $${this.balance}.`;
            console.log(message);
            this.transaction = {
                transactionType: TransactionType.deposit,
                origin: transactionOrigin,
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.date,
                description: description,
                errorMessage: ""
            };
        }
        else{
            message = "An invalid amount has been entered.";
            console.log(message);
            this.transaction = {
                transactionType: TransactionType.deposit,
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

    }calcInterest(): number {
        return Math.round(100 * (this.interestRate * this.balance / 12)) / 100;
    }

    showBalance(): void {
        console.log(`Your balance in this account is $${this.balance}.`);
    }

    accrueInterest(): void {
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

            for(let i = 0; i < this.compareMonths(this.dateOpened); i++) {
                this.balance += this.calcInterest();
            }

            this.balance = Math.round(100 * this.balance) / 100;
        };

    advanceDate(numberOfDays: number): void {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
        this.accrueInterest();
        this.startDate = new Date(this.date.toString());
    }

    findDateLastTransaction(acctHist: Transaction[]): Date {
        let transactions = acctHist.filter(type => type. transactionType === TransactionType.withdrawal && type.success === true);

        let lastTransaction = transactions.pop();

        return lastTransaction.transactionDate;
    }

    compareMonths(date: Date): number {
        let yearsDifference: number;
        let monthsDifference: number;
        let totalMonths: number;

        yearsDifference = this.date.getFullYear() - date.getFullYear();

        if (this.date.getMonth() < date.getMonth()) {
            monthsDifference = (this.date.getMonth() - date.getMonth()) * -1;
        }
        else {
            monthsDifference = this.date.getMonth() - date.getMonth();
        }

        totalMonths = (yearsDifference * 12) + monthsDifference;

        return totalMonths;
    }


}