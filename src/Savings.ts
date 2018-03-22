// TypeScript 2.6

import {Account} from "./Account";
import {AccountType} from "./AccountType";
import {Transaction} from "./InterfaceTransaction";
import {TransactionOrigin} from "./TransactionOrigin";

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
// checks withdrawlLimit and transactionOrigin
if(transactionOrigin != TransactionOrigin.branch && this.withdrawlLimit > 0) {
    // compares the date of last Transaction to current date
    let prevTransAct = this.accountHistory.filter()
        // date comparison >= 30 days
            // allow transaction
            // reduce withdrawlLimit
}
        let message;
        if(amount !> this.balance){
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

    accrueInterest(): void {
        if(this.date > this.startDate){
            let difference = (((((this.startDate.getMilliseconds() - this.date.getMilliseconds()) / 1000) / 60) / 60) / 24);
            this.balance += (this.calcInterest() * difference) / 30;
        }
    };

    showBalance(): void {
        console.log(`Your balance in this account is $${this.balance}.`);
    }

    advanceDate(numberOfDays: number): void {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
    }

    findTransType(element, index, array) {
        return element === ''
    }

}