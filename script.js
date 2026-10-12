
let expenses = [];

function addExpense() {

    let name = document.getElementById("expenseName").value.trim();
    let amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || amount <= 0 || !Number.isFinite(amount)) {
        alert("Please enter a valid name and amount!");
        return;
    }

    let expense = {
        name: name,
        amount: amount
    };

    expenses.push(expense);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";

    showExpenses();
}

function showExpenses() {

    let list = document.getElementById("expenseList");
    let total = 0;

    list.innerHTML = "";

    expenses.forEach(function(expense, index) {

        let item = document.createElement("li");
        item.textContent = expense.name + " - ₹" + expense.amount.toFixed(2) + " ";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.onclick = function() {
            expenses.splice(index, 1);
            showExpenses();
        };

        item.appendChild(deleteButton);
        list.appendChild(item);

        total = total + expense.amount;
    });

    document.getElementById("total").textContent = total.toFixed(2);
}
