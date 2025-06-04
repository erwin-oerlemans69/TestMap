import {Account} from "./account";

let account = new Account('savings');

console.log("Account type: " + account.type);
console.log("Account savings: " + account.savings); 

//Try Catch; fouten afvangen EJ
try {
    account.deposit(2);
} catch (err) {
    console.log("Error afgevangen: " + err)
}

console.log("Balance1: " + account.balance);

account.withdraw(3);
console.log("Balance2: " + account.balance);
//console.log('Balance2:  + ${account.balance}');