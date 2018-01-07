// TypeScript 2.6

import {TransactionOrigin} from "./TransactionOrigin";
import {Transaction} from "./InterfaceTransaction";
import {AccountType} from "./AccountType";

export interface Account {
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin) : Transaction;
    depositMoney(amount: number,
                 description: string) : Transaction;
    accountHistory : Transaction[];
    advanceDate(numberOfDays: number);
    accountType: AccountType;
}