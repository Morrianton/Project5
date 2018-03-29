"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Checking_1 = require("./Checking");
var Savings_1 = require("./Savings");
var myChecking = new Checking_1.CheckingAccount("Bryson L. Smith", "October 19, 1985");
// console.log(myChecking.balance);
// console.log(myChecking.date);
// console.log(myChecking.startDate);
// console.log(myChecking.dateOpened);
//
// myChecking.advanceDate(30);
// console.log(myChecking.balance);
//
// myChecking.advanceDate(365);
// console.log(myChecking.balance);
//
// myChecking.depositMoney(350, "deposit", TransactionOrigin.phone);
// console.log(myChecking.balance);
//
// console.log(myChecking.accountHistory);
//
// myChecking.withdrawMoney(2000, "withdrawal", TransactionOrigin.web);
//
// myChecking.withdrawMoney(350, "withdrawal", TransactionOrigin.branch);
// console.log(myChecking.balance);
//
// console.log(myChecking.accountHistory);
// for(let i = 0; i < 5; i++) {
//     myChecking.withdrawMoney(30, 'Eating Out', 3);
// }
// console.log(myChecking.accountHistory);
// -------------------------------------------------------------------------
var mySavings = new Savings_1.SavingsAccount("Bryson L. Smith", 10 / 19 / 1985);
//
// console.log(
//     '$' + mySavings.balance + '\n'
//     + mySavings.date + '\n'
//     + mySavings.startDate + '\n'
//     + mySavings.dateOpened + '\n'
// );
//
for (var i = 0; i < 2; i++) {
    mySavings.withdrawMoney(100, 'Disneyland Vacation', 2);
    console.log(mySavings.balance); // 9970
}
// console.log(mySavings.accountHistory);
// mySavings.advanceDate(365);
// console.log(mySavings.balance); // 10201.84 
//# sourceMappingURL=BankApp.js.map