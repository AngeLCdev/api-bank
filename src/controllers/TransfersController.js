const existsMove = require('../utils/existsMove')

const transfersController = {}


transfersController.setTransfer = async (req, res) => {
    const { idCard } = req.params
    const { data: { iban, amount, bic } } = req.body
    const checkIban = require('../utils/checkIban')
    if (!checkIban(iban)) return res.status(400).json({ message: 'Invalid IBAN' })

    const { getClientByCard } = require('../services/getClient')
    const { getDataCard, getMovsByCard } = require('../services/getDataCard')
    const dataClient = await getClientByCard({ idCard })
    if (!dataClient) return res.status(404).json({ message: 'Client not found' })
    const dataCard = await getDataCard({ client: dataClient, idCard })
    if (!dataCard.isActive) return res.status(400).json({ message: 'Card is not activate.' })
    const dataAccount = await getMovsByCard({ client: dataClient, ibanCard: dataCard.ibanAssociate })

    //Add commision if the bic is different
    if (dataAccount.bic !== bic) {
        let commisionRate = 0.05
        amount = amount * commisionRate
    }

    if (dataAccount.balance < amount) return res.status(400).json({ message: 'Insufficient funds' })

    dataAccount.balance -= amount


    res.status(200).json({ message: 'Transfer completed' })
}



module.exports = transfersController