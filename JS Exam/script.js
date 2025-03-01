document.addEventListener("DOMContentLoaded", () => {
    let loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        showBudgetTracker();
    }
});

function signup() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!username || !password) {
        showMessage("Please fill in all fields.");
        return;
    }

    if (localStorage.getItem(username)) {
        showMessage("User already exists!");
        return;
    }

    localStorage.setItem(username, JSON.stringify({ password, expenses: [], budget: 0 }));
    showMessage("Sign-up successful! Please log in.");
}




function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!username || !password) {
        showMessage("Please fill in all fields.");
        return;
    }

    let userData = JSON.parse(localStorage.getItem(username));
    if (!userData || userData.password !== password) {
        showMessage("Invalid login credentials!");
        return;
    }

    localStorage.setItem("loggedInUser", username);
    localStorage.setItem("autoLogin", "true");
    showBudgetTracker();
}

function showBudgetTracker() {
    document.getElementById("auth-container").style.display = "none";
    document.getElementById("budget-container").style.display = "block";
    loadExpenses();
    updateSummary();
}

function logout() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("autoLogin");
    location.reload();
}

function setBudget() {
    let budget = parseFloat(document.getElementById("budget-amount").value);
    if (isNaN(budget)) {
        showMessage("Please enter a valid budget.");
        return;
    }
    let username = localStorage.getItem("loggedInUser");
    let userData = JSON.parse(localStorage.getItem(username));
    userData.budget = budget;
    localStorage.setItem(username, JSON.stringify(userData));
    updateSummary();
}

function addExpense() {
    let expenseName = document.getElementById("expense-name").value.trim();
    let expenseAmount = parseFloat(document.getElementById("expense-amount").value);

    if (!expenseName || isNaN(expenseAmount)) {
        showMessage("Please fill all fields correctly.");
        return;
    }

    let username = localStorage.getItem("loggedInUser");
    let userData = JSON.parse(localStorage.getItem(username));
    userData.expenses.push({ name: expenseName, amount: expenseAmount });
    localStorage.setItem(username, JSON.stringify(userData));
    loadExpenses();
    updateSummary();
}

function resetAll() {
    let username = localStorage.getItem("loggedInUser");
    let userData = JSON.parse(localStorage.getItem(username));
    userData.expenses = [];
    userData.budget = 0;
    localStorage.setItem(username, JSON.stringify(userData));
    loadExpenses();
    updateSummary();
}

function loadExpenses() {
    let username = localStorage.getItem("loggedInUser");
    let userData = JSON.parse(localStorage.getItem(username));
    let expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";
    userData.expenses.forEach((expense, index) => {
        expenseList.innerHTML += `
            <tr>
                <td>${expense.name}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>
                    <button onclick="editExpense(${index})" class=" btn btn-success ">Edit</button>
                    <button onclick="deleteExpense(${index})" class=" btn btn-danger ">Remove</button>
                </td>
            </tr>`;
    });

}

function editExpense(index) {
    let username = localStorage.getItem("loggedInUser");
    let userData = JSON.parse(localStorage.getItem(username));
    let expense = userData.expenses[index];

    let newName = prompt("Enter new expense name:", expense.name);
    let newAmount = parseFloat(prompt("Enter new expense amount:", expense.amount));

    

    if (newName && !isNaN(newAmount)) {
        expense.name = newName;
        expense.amount = newAmount;
        localStorage.setItem(username, JSON.stringify(userData));
        loadExpenses(); 
        updateSummary(); 
    } else {
        alert("Please enter valid details.");
    }
}

function deleteExpense(index) {
    let username = localStorage.getItem("loggedInUser");
    let userData = JSON.parse(localStorage.getItem(username));
    userData.expenses.splice(index, 1);
    localStorage.setItem(username, JSON.stringify(userData));
    loadExpenses();
    updateSummary();
}

function updateSummary() {
    let username = localStorage.getItem("loggedInUser");
    let userData = JSON.parse(localStorage.getItem(username));
    let budget = userData.budget || 0;
    let totalExpense = userData.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById("total-budget").innerText = budget.toFixed(2);
    document.getElementById("total-expense").innerText = totalExpense.toFixed(2);
    document.getElementById("budget-left").innerText = (budget - totalExpense).toFixed(2);
}

function showMessage(message) {
    document.getElementById("auth-message").innerText = message;
}