import { CheckingAccount } from "./Checking";
import { TransactionOrigin } from "./TransactionOrigin";

let myChecking = new CheckingAccount("Bryson L. Smith", "October 19, 1985");

console.log(myChecking.balance);
console.log(myChecking.date);
console.log(myChecking.startDate);
console.log(myChecking.dateOpened);

myChecking.advanceDate(30);
console.log(myChecking.balance);

myChecking.advanceDate(365);
console.log(myChecking.balance);

myChecking.depositMoney(350, "deposit", TransactionOrigin.phone);
console.log(myChecking.balance);

console.log(myChecking.accountHistory);

myChecking.withdrawMoney(2000, "withdrawal", TransactionOrigin.web);

myChecking.withdrawMoney(350, "withdrawal", TransactionOrigin.branch);
console.log(myChecking.balance);

console.log(myChecking.accountHistory);


// import {SavingsAccount} from "./Savings";
//
// let mySavings = new SavingsAccount("Bryson L. Smith", 10/19/1985);
//
// console.log('$' + mySavings.balance + '\n'
//             + mySavings.date + '\n'
//             + mySavings.startDate + '\n'
//             + mySavings.dateOpened);
//
// mySavings.withdrawMoney(30, 'eating out', 2);
// console.log(mySavings.balance); // 9970
//
// // mySavings.advanceDate(365);
// // console.log(mySavings.balance); // 10201.84