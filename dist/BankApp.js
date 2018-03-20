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
myChecking.depositMoney(350, "deposit");
console.log(myChecking.balance);
console.log(myChecking.accountHistory);
myChecking.withdrawMoney(350, "withdrawal", TransactionOrigin_1.TransactionOrigin.branch);
console.log(myChecking.balance);
console.log(myChecking.accountHistory);
//# sourceMappingURL=BankApp.js.map