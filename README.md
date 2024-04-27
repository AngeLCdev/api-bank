Moves Types:
    Cash Incomes: cashIncome
    Cash Expenses: cashExpense
    Transfers Incomes: transferIncome
    Transfers Expenses: transferExpense
    Fees: fee

PIN:
CARD: 4651213 --> 1234
CARD: 956123 --> 4321
CARD: 632541 --> 1324


POST DATA FOR TRANSFERS

{
	"data": {
			"iban": "ES4320809954097854576385",
			"amount": 250,
			"bic": "CAIXESBBXXX"
	}
}

http://localhost:3000/api/v1/transfers/4651213
http://localhost:3000/api/v1/moves/956123/transferExpense CARD IS NOT ACTIVATE
http://localhost:3000/api/v1/moves/632541/transferExpense

