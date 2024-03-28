#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 6089;


console.log(`Your current Balance is: ${myBalance} `);
console.log(`PIN code: ${myPin}`);

let pinAns = await inquirer.prompt([
    {
      name: "pin",
      message: "Enter your PIN:",
      type: "number"
    }
]);

if (pinAns.pin === myPin) {
    console.log("Correct PIN code!");


let operationAns = await inquirer.prompt([
    {
        name:"operation",
        message:"What do you want to do?!",
        type: "list",
        choices:["Withdraw","Check Balance", "Fast Cash"]

    }
]);

if (operationAns.operation === "Withdraw") {
     let withdraw = await inquirer.prompt([

        {   name: "amount",
            message: "Enter the Amount:",
            type: "number"
        }
     ]);

if (withdraw.amount > myBalance) {
        console.log("insufficient amount!");
     
}else{
        let amountLeft = myBalance - withdraw.amount;
     console.log(`The Remaining balance is: ${ amountLeft}`);
     console.log("Thank You!");
    }

}else  if (operationAns.operation === "Check Balance") {
      console.log(`Your Current Balance is: ${myBalance} `);
      console.log("Thank You!")
}
else if (operationAns.operation === "Fast Cash") {
     let fastCash = await inquirer.prompt([

        {   name: "amount",
            message: "Select the Amount:",
            type: "list",
            choices:[5000, 10000, 15000, 20000, 25000, 30000]
        }
     ]);

 if (fastCash.amount > myBalance) {
    console.log("insufficient amount!");
 
}else{
    let amountLeft = myBalance - fastCash.amount;
 console.log(`The Remaining balance is: ${ amountLeft}`);
 console.log("Thank You!");
}
}} else if (pinAns.pin != myPin) {
    console.log("Incorrect PIN code!");


};
