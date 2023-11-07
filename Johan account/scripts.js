const myProfile = {
    firstname: "Marta",
    lastname: "Jäkel",
    age: 25,
    country: "Germany"
}
//ways to access object property
console.log(myProfile.firstname)
console.log(myProfile["firstname"])

const accountType = ["main", "saving", "secondary", "terciary"]
// ways to acccess array values
console.log(accountType[0])
console.log(accountType[1])
console.log(accountType[2])
// array made of objects
const profiles = [
    myProfile,
    {
        firstname: "Johan",
        lastname: "Corrales",
        age: 27,
        country: "Germany"
    }, {
        firstname: "Joe",
        lastname: "Doe",
        age: 27,
        country: "Colombia"
    }]

console.log(profiles)
console.log(profiles[1].firstname)

const firstProfile = profiles[0]
const fullname = `${firstProfile.firstname} ${firstProfile.lastname}`

console.log(fullname)

const myAccounts = {
    main: 10000,
    saving: 8000,
    secondary: 0,
    terciary: 400
}

function transferMoney() {
    // Get the selected values from the form
    const amountToMove = parseFloat(document.getElementById('amount').value);
    const fromAccount = document.getElementById('fromAccount').value;
    const toAccount = document.getElementById('toAccount').value;

    // Check if there's enough money in the source account
    if (myAccounts[fromAccount] - amountToMove < 0) {
        alert("You don't have enough money to transfer.");
    } else {
        // Update account balances
        myAccounts[fromAccount] -= amountToMove;
        myAccounts[toAccount] += amountToMove;

        // Refresh the table with the updated balances
        updateAccountTable();
    }
}

function updateAccountTable() {
    const table = document.getElementById("accounts");

    // Clear existing rows except the header row
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Populate the table with the updated balances
    for (const account in myAccounts) {
        if (myAccounts.hasOwnProperty(account)) {
            const row = table.insertRow(-1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);

            cell1.innerHTML = account;
            cell2.innerHTML = myAccounts[account];
        }
    }
}

// Initialize the table when the page loads
updateAccountTable();


function add3Numbers(first,second,third) {
    const sum = first + second + third;
    console.log(sum)
    return sum
}
add3Numbers(3,4,5)
const add6Numbers = add3Numbers(2,4,5) + add6Numbers(3,5,7);
console.log(`the sum is ${add6Numbers}`)