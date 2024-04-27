const sample = require('../sample.json')

const getClient = async ({ idClient }) => {
    console.log(sample)
    return sample.find(client => client.id === idClient)
}

const getClientByCard = async ({ idCard }) => {

    return sample.find(client => {
        return client.cards.find(card => card.cardId === idCard)
    })


}

module.exports = {
    getClient,
    getClientByCard
}
