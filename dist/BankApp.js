"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Checking_1 = require("./Checking");
var TransactionOrigin_1 = require("./TransactionOrigin");
var myChecking = new Checking_1.CheckingAccount("Bryson L. Smith", "October 19, 1985");
console.log(myChecking.balance);
console.log(myChecking.date);
console.log(myChecking.startDate);
console.log(myChecking.dateOpened);
myChecking.advanceDate(365);
console.log(myChecking.balance);
myChecking.depositMoney(350, "deposit", TransactionOrigin_1.TransactionOrigin.phone);
console.log(myChecking.balance);
console.log(myChecking.accountHistory);
myChecking.withdrawMoney(2000, "withdrawal", TransactionOrigin_1.TransactionOrigin.web);
myChecking.withdrawMoney(350, "withdrawal", TransactionOrigin_1.TransactionOrigin.branch);
console.log(myChecking.balance);
console.log(myChecking.accountHistory);
var Savings_1 = require("./Savings");
var mySavings = new Savings_1.SavingsAccount("Bryson L. Smith", 10 / 19 / 1985);
console.log('$' + mySavings.balance + '\n'
    + mySavings.date + '\n'
    + mySavings.startDate + '\n'
    + mySavings.dateOpened);
//# sourceMappingURL=BankApp.js.map