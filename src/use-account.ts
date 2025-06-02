import { Account } from "./account";

let acc = new Account("savings");
console.log(`Account type: ${acc.type}`);
console.log(`Account balance: ${acc.balance}`);

console.log(`Account balance after deposit: ${acc.balance}`);
console.log(`Account balance after withdrawal: ${acc.balance}`);

try {
    acc.withdraw(0)
}
catch(err) {
    console.log(err.message)
}

try {
    acc.deposit(0)
}
catch(err) {
    console.log(err.message)
}
