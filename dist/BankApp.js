"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Checking_1 = require("./Checking");
var TransactionOrigin_1 = require("./TransactionOrigin");
var myChecking = new Checking_1.CheckingAccount("Bryson L. Smith", "October 19, 1985");
console.log(myChecking.balance);
console.log(myChecking.date);
console.log(myChecking.startDate);
console.log(myChecking.dateOpened);
myChecking.advanceDate(30);
console.log(myChecking.balance);
myChecking.advanceDate(365);
console.log(myChecking.balance);
myChecking.depositMoney(350, "deposit", TransactionOrigin_1.TransactionOrigin.phone);
console.log(myChecking.balance);
console.log(myChecking.accountHistory);
myChecking.withdrawMoney(2000, "withdrawal", TransactionOrigin_1.TransactionOrigin.web);
myChecking.withdrawMoney(350, "withdrawal", TransactionOrigin_1.TransactionOrigin.branch);
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
//# sourceMappingURL=BankApp.js.map