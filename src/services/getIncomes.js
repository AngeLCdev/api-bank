const getIncomes = async ({ type, movesCard }) => {
    const incomes = movesCard.incomes

    const incomeTypes = {
        'cashIncome': 'cash',
        'transferIncome': 'transfer'
    };

    return incomes[incomeTypes[type]];

}

module.exports = getIncomes