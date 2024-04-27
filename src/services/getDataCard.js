const getDataCard = async ({ client, idCard }) => {

    return client.cards.find(card => card.cardId === idCard)
}

const getMovsByCard = async ({ client, ibanCard }) => {

    return client.accounts.find(account => account.iban === ibanCard)
}

module.exports = {
    getDataCard,
    getMovsByCard
}