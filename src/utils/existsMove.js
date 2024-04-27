const existsMove = (move) => {
    const moves = ["cashIncome", "cashExpense", "transferIncome", "transferExpense", "fee"]
    return moves.includes(move)
}

module.exports = existsMove;