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
    withdrawlLimit: number;

    constructor(accountHolderName, accountHolderBirthDate){
        this.accountHolderName = accountHolderName;
        this.accountHolderBirthDate = accountHolderBirthDate;
        this.balance = 10000;
        this.accountHistory = [];
        this.accountType = 2;
        this.interestRate = 0.02;
        this.date = new Date();
        this.startDate = new Date();
        this.dateOpened = new Date();
        this.withdrawlLimit = 6;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {

// checks transactionOrigin
        if (transactionOrigin != TransactionOrigin.branch) {

            // compares the date of last Transaction to current date
            // date comparison >= 1 month
            if (this.findDateLastTransaction(this.accountHistory).getMonth() / this.date.getMonth() < 1) {

                if (this.withdrawlLimit !> 6) {
                    let message: string;
                    if (amount ! > this.balance) {
                         message = `$${amount} has been withdrawn from your account. Your new balance is $${this.balance}.`;
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

                else {
                    let message:string = 'We apologize, but you are limited to 6 phone or web withdrawals per month per Federal regulation.';
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

            else {
                this.withdrawlLimit = 0;
                let message: string;
                if (amount ! > this.balance) {
                    message = `$${amount} has been withdrawn from your account. Your new balance is $${this.balance}.`;
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
        }
    }

    depositMoney(amount: number, description: string, transactionOrigin?: TransactionOrigin): Transaction {
        let message;
        this.balance += amount;
        if(amount > 0) {
            message = `$${amount} has been added to your account. Your new balance is $${this.balance}.`;
            console.log(message);
            this.transaction.success = true;
            this.transaction.amount = amount;
            this.transaction.resultBalance = this.balance;
            this.transaction.transactionDate = this.date;
            this.transaction.description = description;
            this.transaction.errorMessage = "";
        }
        else{
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

    }calcInterest(): number {
        return Math.round(100 * (this.interestRate * this.balance / 12)) / 100;
    }

    showBalance(): void {
        console.log(`Your balance in this account is $${this.balance}.`);
    }

    accrueInterest(): void {
        let yearsDifference;
        let monthsDifference;
        let totalMonths;
        if(this.date > this.dateOpened){
            yearsDifference = this.date.getFullYear() - this.dateOpened.getFullYear();

            if(this.date.getMonth() < this.dateOpened.getMonth()) {
                monthsDifference = (this.date.getMonth() - this.dateOpened.getMonth()) * -1;
            }
            else {
                monthsDifference = this.date.getMonth() - this.dateOpened.getMonth();
            }

            totalMonths = (yearsDifference * 12) + monthsDifference;

            for(let i = 0; i < totalMonths; i++) {
                this.balance += this.calcInterest();
            }

            this.balance = Math.round(100 * this.balance) / 100;
        }
    };

    advanceDate(numberOfDays: number): void {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
        this.accrueInterest();
        this.startDate = new Date(this.date.toString());
    }

    findDateLastTransaction(acctHist: Transaction[]): Date {
        let transactions = acctHist.filter(type => type. transactionType === 1 && type.success === 'true');

        let lastTransaction = transactions.pop();

        return lastTransaction.transactionDate;
        }

}