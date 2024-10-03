let participants = [];
let expenses = [];

// Добавить участника
function addParticipant() {
    const participantInput = document.getElementById('participantName');
    const participantName = participantInput.value.trim();

    if (participantName && !participants.includes(participantName)) {
        participants.push(participantName);
        updateParticipantsList();
        participantInput.value = ''; // Очистить поле ввода
    }
}

// Обновить список участников
function updateParticipantsList() {
    const participantsContainer = document.getElementById('participantsContainer');
    participantsContainer.innerHTML = ''; // Очистить текущее содержимое

    participants.forEach(name => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.textContent = name;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => removeParticipant(name); // Удалить участника

        div.appendChild(removeBtn);
        participantsContainer.appendChild(div);
    });
}

// Удалить участника
function removeParticipant(name) {
    participants = participants.filter(participant => participant !== name);
    updateParticipantsList();
}

// Добавить название расхода
function addExpense() {
    const expenseInput = document.getElementById('expenseName');
    const expenseName = expenseInput.value.trim();

    if (expenseName && !expenses.includes(expenseName)) {
        expenses.push(expenseName);
        updateExpensesList();
        expenseInput.value = ''; // Очистить поле ввода
    }
}

// Обновить список расходов
function updateExpensesList() {
    const expensesContainer = document.getElementById('expensesContainer');
    expensesContainer.innerHTML = ''; // Очистить текущее содержимое

    expenses.forEach(name => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.textContent = name;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✖';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => removeExpense(name); // Удалить расход

        div.appendChild(removeBtn);
        expensesContainer.appendChild(div);
    });
}

// Удалить название расхода
function removeExpense(name) {
    expenses = expenses.filter(expense => expense !== name);
    updateExpensesList();
}

// Записать расход
function recordExpense() {
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
    
    if (isNaN(expenseAmount) || participants.length === 0 || expenses.length === 0) {
        alert('Please enter a valid amount and ensure you have participants and expenses added.');
        return;
    }

    const expenseName = expenses[expenses.length - 1];  // Последний добавленный расход
    const perPersonAmount = expenseAmount / participants.length;

    // Добавить в историю
    const historyList = document.getElementById('expenseHistory');
    const historyItem = document.createElement('li');
    historyItem.innerHTML = `
        Expense: ${expenseName}, Amount: ${expenseAmount}, Per Person: ${perPersonAmount.toFixed(2)}
        <button class="remove-btn" onclick="removeHistoryItem(this)">✖</button>
    `;
    historyList.appendChild(historyItem);

    // Очистить поле ввода для суммы
    document.getElementById('expenseAmount').value = '';
}

// Удалить элемент из истории
function removeHistoryItem(button) {
    const historyItem = button.parentElement;
    historyItem.remove();
}
