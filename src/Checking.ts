// TypeScript 2.6

import {Account} from "./Account";
import {AccountType} from "./AccountType";
import {Transaction} from "./InterfaceTransaction";
import {TransactionOrigin} from "./TransactionOrigin";
import {TransactionType} from "./TransactionType";
import {displayClassNameWithPurpose} from "./Decorators";

@displayClassNameWithPurpose('To prove TypeScript wrong.')
export class CheckingAccount implements Account {
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
        this.transaction = <Transaction>{ };
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        let message;
            if(amount <= this.balance){
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
            this.transaction.transactionType = TransactionType.deposit;
            this.transaction.origin = transactionOrigin;
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
            this.transaction.transactionType = TransactionType.deposit;
            this.transaction.origin = transactionOrigin;
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

    advanceDate(numberOfDays: number): void {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
        this.accrueInterest();
        // this.startDate = new Date(this.date.toString());
    }

    calcInterest(): number {
        return (this.interestRate / 12) * this.balance;
    }

    accrueInterest(): void {

            for(let i = 0; i < this.compareMonths(this.dateOpened); i++) {
                this.balance += this.calcInterest();
            }

            this.balance = Math.round(100 * this.balance) / 100;
        };

    compareMonths(date: Date): number {
        let yearsDifference: number;
        let monthsDifference: number;
        let totalMonths: number;
        if (this.date > date) {
            yearsDifference = this.date.getFullYear() - date.getFullYear();

            if (this.date.getMonth() < date.getMonth()) {
                monthsDifference = (this.date.getMonth() - date.getMonth()) * -1;
            }
            else {
                monthsDifference = this.date.getMonth() - date.getMonth();
            }

            totalMonths = (yearsDifference * 12) + monthsDifference;

        }
        return totalMonths;
    }
}

