// //  WE start by declaring a function
// function goToCoffeeShop() {                 // what is within the curly braces is a code block 
//     alert('your coffee is on the way');
// }
// goToCoffeeShop(); //to activate the programming inside a function you call the function

// function alertRandom() {
//     const randomNumber = Math.floor(Math.random() * 6) + 1; // I want to generate a random number every time i call this function
//     alert(randomNumber);
// }
// alertRandom();

// function getRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber; //returns the value stored in random number
// }
// alertRandom();       //return exits a function and sends a value back to the spot in the program where the function was called

// function getYear() {
//     const year = new Date().getFullYear();
//     return year;
// }
// getYear();
// const yearToday = getYear();

// function isFieldEmpty() {
//     const field = document.querySelector("#info");
//     //now testing the value of the Field using a conditional statement//

//     if (field.value === '') {  // if the field is empty the function will return true//
//         return true;
//     } else {
//         return false;
//     }
//     /* now the function has two return statements but remember that a conditional statement only follows one path so the function will 
//     run one of the return statements */
// }

// const fieldTest = isFieldEmpty();
// if (fieldTest === true) {
//     alert("Please provide your Information");
// }
// /* we can simplify  the if (!field.value === '')
// by using a logical not operator*/

// //Functions often need specific information to perform a task. In addition to getting information from a function, you can send information to a function to change how that function works.
// function getDrink(drink) {
//     alert('your ${drink} is on the way');
// }
// getDrink('Espresso');

// function example(parameter) {      //A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
//     console.log(parameter); // Output = foo
// }
// const argument = "foo";
// example(argument);

// function sum(a, b) {
//     return a + b;
// }

// sum(5, 7)

// function using parameter
// function helloWorld(name) {
//     console.log(`Hello ${name}`)
// }
// const femaleName = "Marta";
// helloWorld(femaleName)

// helloWorld("Johan")

// // function returning value
// function randomNumber(isNumber) {
//     const random = Math.random()
//     if (isNumber === true) {
//         return random
//     }
//     return `this is a string; ${random}`;
// }

// const myRandomNumber = randomNumber(true)
// console.log(myRandomNumber)

// console.log(randomNumber(true))
// console.log(randomNumber(false))

const myAccounts = {
    main: 10000,
    saving: 8000,
    secondary: 0,
    
}

function addAccountsToTable() {
    const table = document.getElementById("accounts");
    // Clear existing rows except the header row (index 0).
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    for (const account in myAccounts) {
      if (myAccounts.hasOwnProperty(account)) {
        const row = table.insertRow(-1); // Insert a new row at the end of the table.
        const cell1 = row.insertCell(0); // Insert a cell for the account name.
        const cell2 = row.insertCell(1); // Insert a cell for the balance.

        cell1.innerHTML = account;
        cell2.innerHTML = myAccounts[account];
      }
    }
  }
  // Call the function when the page loads to populate the table.
  window.onload = addAccountsToTable;

  function resetTable() {
    addAccountsToTable(); // Update the table with the current balances.
  }

//type in terms of main ,saving and secondary
function accountBalance(type) {
    //if the account type 
    if (myAccounts[type]) {
        return myAccounts[type]
    }
    throw new Error('this account does not exists')
}
// function moveMoneyFromMainToSavings(amountToMove) {
//     let { main, saving } = myAccounts;
//     main = main - amountToMove;
//     saving = saving + amountToMove;

//     myAccounts.main = main
//     myAccounts.saving = saving
// }
function passMoneyBetweenAccounts(amountToMove, from, to) {
    if ((myAccounts[from] - amountToMove) < 0) {
        return "You don't have enought money to transfer";
    }
    myAccounts[from] = myAccounts[from] - amountToMove
    myAccounts[to] = myAccounts[to] + amountToMove
    resetTable();
    return myAccounts;
}

function widthdrawMoneyFromAccount(amount,account) {
   const balanceAfterWidthdraw = myAccounts[account] - amount
    const hasEnoughMoney = balanceAfterWidthdraw >= 0
    if (hasEnoughMoney === true) {
        myAccounts[account] = balanceAfterWidthdraw
        return myAccounts
    } else{
        return "Sorry you dont have enough money"
    }
}

const myMainAccountBalance = accountBalance('main')
console.log(`my main account balance is ${myMainAccountBalance}`)



