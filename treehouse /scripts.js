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