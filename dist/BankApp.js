"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Checking_1 = require("./Checking");
var Savings_1 = require("./Savings");
var Retirement_1 = require("./Retirement");
var myChecking = new Checking_1.CheckingAccount("Bryson L. Smith", "October 19, 1985");
// console.log(myChecking.balance);
// console.log(myChecking.date);
// console.log(myChecking.startDate);
// console.log(myChecking.dateOpened);
//
// myChecking.advanceDate(30);
// console.log(myChecking.balance);
//
myChecking.advanceDate(365);
console.log(myChecking.balance);
//
// myChecking.depositMoney(350, "San Diego Vacation Fund", 2);
// // console.log(myChecking.balance);
//
// myChecking.depositMoney(25, "Friend Paid For Gas", 3);
//
// myChecking.withdrawMoney(50, "Eating Out", 1);
//
// myChecking.withdrawMoney(25.45, "Gas", 3);
// //
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
// //
// // console.log(
// //     '$' + mySavings.balance + '\n'
// //     + mySavings.date + '\n'
// //     + mySavings.startDate + '\n'
// //     + mySavings.dateOpened + '\n'
// // );
// //
// for(let i = 0; i < 7; i++) {
//     mySavings.withdrawMoney(100, 'Disneyland Vacation', 2);
//     console.log(mySavings.balance); // 9400 after 6 $100 withdrawls, or 9900 with one iteration
// }
// console.log(mySavings.accountHistory);
// mySavings.withdrawMoney(250, "20th Anniversary", 1); // 9650
// mySavings.withdrawMoney(25, "Eating Out", 2); // 9625
// mySavings.withdrawMoney(35, "Gas for Truck", 1); // 9590
// mySavings.withdrawMoney(10, "Toy for Child #1", 2); // 9580
// mySavings.withdrawMoney(750, "Flat Screen TV", 1); // 8830
// mySavings.withdrawMoney(125, "Something for Me", 2); // FAIL
// mySavings.withdrawMoney(1, "test", 1); // FAIL
// mySavings.withdrawMoney(1, "test", 1); // FAIL
// mySavings.withdrawMoney(1, "test", 1); // FAIL
//
// mySavings.withdrawMoney(125, "Something for Me", 3); // 8705
// mySavings.withdrawMoney(3, "Slurpy", 3);// 8702
//
// mySavings.withdrawMoney(12500, "Pay Off Debts", 3); // FAIL
// mySavings.showBalance(); // 10000
//
// mySavings.withdrawMoney(100, "", 1); // 9900
// mySavings.advanceDate(1);
// console.log(mySavings.date); // March 30, 2018
//
// mySavings.showBalance(); // 10000
//
// mySavings.advanceDate(5);
// console.log(mySavings.date); // April 4, 2018
//
// mySavings.showBalance(); // 10016.67
mySavings.advanceDate(30);
// console.log(mySavings.date); // April 28, 2018
//
mySavings.showBalance(); // 9916.50
//
// mySavings.depositMoney(2500, "", 2); // 12416.50
//
// mySavings.advanceDate(60);
// console.log(mySavings.date); // June 28, 2018
//
// mySavings.showBalance(); // 12457.32
//
// console.log(mySavings.accountHistory); // 2 Xactions
// mySavings.advanceDate(365);
// console.log(mySavings.balance); // 10201.84
// -------------------------------------------------------------------------
var myRetirement = new Retirement_1.RetirementAccount('Bryson Smith', new Date(1985, 9, 19)); // @  retirement age
myRetirement.withdrawMoney(150000, 'Rental Property', 3); // FAIL
myRetirement.withdrawMoney(15000, 'Boat', 3); // 85,000
myRetirement.advanceDate(365); // 87585.36
myRetirement.showBalance();
myRetirement.depositMoney(1000, "Tax Return", 1); // 88585.36
myRetirement.advanceDate(30); // 88806.82
myRetirement.showBalance();
for (var i = 0; i < 8; i++) {
    myRetirement.withdrawMoney(1000, "TEST", 2); // FAIL 2x
}
myRetirement.advanceDate(730); // 87920.73
myRetirement.showBalance();
// console.log(myRetirement.accountHistory); // 11x Xactions
//# sourceMappingURL=BankApp.js.map