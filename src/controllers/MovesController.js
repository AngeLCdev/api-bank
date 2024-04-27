const existsMove = require('../utils/existsMove')

const movesController = {}


movesController.getMoves = async (req, res) => {
    const { idCard, typeMove } = req.params

    if (!existsMove(typeMove)) return res.status(404).json({ message: 'Move not found' })

    const { getClientByCard } = require('../services/getClient')
    const { getDataCard, getMovsByCard } = require('../services/getDataCard')
    const dataClient = await getClientByCard({ idCard })

    if (!dataClient) return res.status(404).json({ message: 'Client not found' })
    const dataCard = await getDataCard({ client: dataClient, idCard })
    if (!dataCard.isActive) return res.status(400).json({ message: 'Card is not activate.' })

    const movesCard = await getMovsByCard({ client: dataClient, ibanCard: dataCard.ibanAssociate })
    let data = {}

    switch (typeMove) {
        case 'cashIncome':
        case 'transferIncome':
            const getIncomes = require('../services/getIncomes')
            data = await getIncomes({ type: typeMove, movesCard })
            break;
        case 'cashExpense':
        case 'transferExpense':
            const getExpense = require('../services/getExpenses')
            data = await getExpense({ type: typeMove, movesCard })
            break;
        case 'fee':
            const getFees = require('../services/getFees')
            data = await getFees({ movesCard })
            break;

        default:
            break;
    }

    /*
    const { hashPassword } = require('../utils/bcrypt')
    const pin = await hashPassword('1324')
    console.log(pin)
    */

    res.status(200).json(data)
}


module.exports = movesController