let participants = [];
let expenses = [];

// Add user
function addParticipant() {
    const participantInput = document.getElementById('participantName');
    const participantName = participantInput.value.trim();

    if (participantName && !participants.includes(participantName)) {
        participants.push(participantName);
        updateParticipantsList();
        participantInput.value = ''; // clear input field
    }
}

// refresh name list
function updateParticipantsList() {
    const participantsContainer = document.getElementById('participantsContainer');
    participantsContainer.innerHTML = ''; // clear current content

    participants.forEach(name => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.textContent = name;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => removeParticipant(name); // remove name 

        div.appendChild(removeBtn);
        participantsContainer.appendChild(div);
    });
}

// remove name 
function removeParticipant(name) {
    participants = participants.filter(participant => participant !== name);
    updateParticipantsList();
}

// add expense name
function addExpense() {
    const expenseInput = document.getElementById('expenseName');
    const expenseName = expenseInput.value.trim();

    if (expenseName && !expenses.includes(expenseName)) {
        expenses.push(expenseName);
        updateExpensesList();
        expenseInput.value = ''; // clear input field
    }
}

// update expense list
function updateExpensesList() {
    const expensesContainer = document.getElementById('expensesContainer');
    expensesContainer.innerHTML = ''; // Clear current content

    expenses.forEach(name => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.textContent = name;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => removeExpense(name); // Delete expense

        div.appendChild(removeBtn);
        expensesContainer.appendChild(div);
    });
}

// Delete expense name
function removeExpense(name) {
    expenses = expenses.filter(expense => expense !== name);
    updateExpensesList();
}

// record the expense
function recordExpense() {
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    // Check if the amount has been entered
    if (isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense amount.');
        return;
    }

    // Check if members have been added
    if (participants.length === 0) {
        alert('Please add at least one participant.');
        return;
    }

    // Check if expenses have been added
    if (expenses.length === 0) {
        alert('Please add at least one expense.');
        return;
    }

    const expenseName = expenses[expenses.length - 1];  // Last added expense
    const perPersonAmount = (expenseAmount / participants.length).toFixed(2); // Share per person

    // Comma separated list of participants
    const participantsList = participants.join(', ');

    // Add to history
    const historyList = document.getElementById('expenseHistory');
    const historyItem = document.createElement('li');
    historyItem.classList.add('list-item');
    historyItem.innerHTML = `
    <div>
        <strong>Expense:</strong> <strong>${expenseName}</strong><br>
        <strong>Amount:</strong> ${expenseAmount.toFixed(2)}€<br>
        <strong>Between ${participants.length} people (${participantsList})</strong><br>
        <strong>Per person:</strong> ${perPersonAmount}€
        </div>
        <button class="remove-btn" onclick="removeHistoryItem(this)">✖</button>
    `;
    historyList.appendChild(historyItem);

    // Clear input field for amount
    document.getElementById('expenseAmount').value = '';
}


// Remove item from history
function removeHistoryItem(button) {
    const historyItem = button.parentElement;
    historyItem.remove();
}
//enter input capability
document.getElementById('participantName').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addParticipant();
    }
});

document.getElementById('expenseName').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addExpense();
    }
}); 
document.getElementById('expenseAmount').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        recordExpense();
    }
}); 
