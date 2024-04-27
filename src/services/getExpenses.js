const getExpenses = async ({ type, movesCard }) => {
    const expenses = movesCard.expenses

    const expenseTypes = {
        'cashExpense': 'cash',
        'transferExpense': 'transfer'
    };

    return expenses[expenseTypes[type]];

}

module.exports = getExpenses