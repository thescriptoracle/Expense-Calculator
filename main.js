const expenseInput = document.getElementById('expenseInput');
const amountInput = document.getElementById('amountInput');
const dateInput = document.getElementById('dateInput');
const addBtn = document.getElementById('addBtn');
const expensesList = document.getElementById('expensesList');
const totalExpensesElement = document.getElementById('totalExpenses');

let totalExpenses = 0;

// Add click event listener to the button
addBtn.addEventListener('click', () => {
  const expense = expenseInput.value.trim();
  const amount = Number(amountInput.value.trim());
  const date = dateInput.value;

  if (expense && amount && date) {
    // Update the total expenses
    totalExpenses += amount;

    // Update the total expenses on the page and it make it add two digit after decimals
    totalExpensesElement.textContent = `Total Expenses: $${totalExpenses.toFixed(
      2
    )}`;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'expense-item';
    listItem.innerHTML = `
                    <span>${expense} - $${amount.toFixed(2)}</span>
                    <span>${new Date(date).toLocaleDateString()}</span>
                `;

    // close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.className = 'close-btn';

    // Add click event listener to the close button
    closeBtn.addEventListener('click', () => {
      // Remove the expense from the total
      totalExpenses -= amount;
      totalExpensesElement.textContent = `Total Expenses: $${totalExpenses.toFixed(
        2
      )}`;

      // Remove the list item
      expensesList.removeChild(listItem);
    });

    listItem.appendChild(closeBtn);
    expensesList.appendChild(listItem);

    expenseInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
  } else {
    alert('Please fill in all fields correctly.');
  }
});
