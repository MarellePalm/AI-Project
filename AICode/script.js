let participants = JSON.parse(localStorage.getItem('participants')) || [];
let expenses = [];

function addParticipant() {
    const participantName = document.getElementById('participantName').value.trim();
    if (participantName && !participants.includes(participantName)) {
        participants.push(participantName);
        localStorage.setItem('participants', JSON.stringify(participants));
        document.getElementById('participantName').value = '';
        renderParticipants();
    }
}

function renderParticipants() {
    const participantCheckboxes = document.getElementById('participantCheckboxes');
    participantCheckboxes.innerHTML = '';
    participants.forEach(participant => {
        const checkbox = document.createElement('div');
        checkbox.innerHTML = `
            <input type="checkbox" value="${participant}" id="${participant}">
            <label for="${participant}">${participant}</label>
        `;
        participantCheckboxes.appendChild(checkbox);
    });
}

function addExpense() {
    const description = document.getElementById('expenseDescription').value.trim();
    const amount = parseFloat(document.getElementById('expenseAmount').value.trim());
    const selectedParticipants = Array.from(document.querySelectorAll('#participantCheckboxes input:checked')).map(el => el.value);

    if (description && !isNaN(amount) && amount > 0 && selectedParticipants.length > 0) {
        const splitAmount = (amount / selectedParticipants.length).toFixed(2);
        const expenseDetails = {
            description,
            amount,
            participants: selectedParticipants,
            splitAmount
        };

        expenses.push(expenseDetails);
        document.getElementById('expenseDescription').value = '';
        document.getElementById('expenseAmount').value = '';
        renderExpenses();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function renderExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.style.marginBottom = '10px'; // Add some space between expenses

        // Create a div for the total amount
        const totalAmountDiv = document.createElement('div');
        totalAmountDiv.textContent = `${expense.description} - Total Amount: €${expense.amount.toFixed(2)}`;
        totalAmountDiv.style.fontWeight = 'bold'; // Make the total amount bold

        // Create a div for individual payments
        const individualPaymentsDiv = document.createElement('div');
        const individualPayments = expense.participants.map(participant => `${participant}: €${expense.splitAmount}`).join(', ');
        individualPaymentsDiv.textContent = `Payments: ${individualPayments}`;
        individualPaymentsDiv.style.fontStyle = 'italic'; // Make individual payments italic

        // Append both divs to the list item
        listItem.appendChild(totalAmountDiv);
        listItem.appendChild(individualPaymentsDiv);
        
        // Append the list item to the expense list
        expenseList.appendChild(listItem);
    });
}

// Initial render of participants
renderParticipants();
