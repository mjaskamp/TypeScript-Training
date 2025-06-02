import { Account } from "./account";

let acc = new Account("savings");
console.log(`Account type: ${acc.type}`);
console.log(`Account balance: ${acc.balance}`);
acc.deposit(10);
console.log(`Account balance after deposit: ${acc.balance}`);
acc.withdraw(5);
console.log(`Account balance after withdrawal: ${acc.balance}`);
try {
    acc.withdraw(0)
}
catch(err) {
    console.log(err.message)
}
console.log(`Account balance after attempt to withdraw negative amount: ${acc.balance}`);
try {
    acc.withdraw(0)
}
catch(err) {
    console.log(err.message)
}
console.log(`Account balance after attempt to overdraw: ${acc.balance}`);