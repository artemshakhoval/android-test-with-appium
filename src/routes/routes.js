const app = require('express').Router()

const { service } = require('../services/services')

app.post('/sendMessage', async(req, res) => {
    try {
        const { phoneNumber, message } = req.body
        const response = await service(phoneNumber, message)

        res.send({ message: "Message was sent correctly" })

    } catch {
        return res.sendStatus(400).send( {message: "Message was not sent correctly!!!"} )
    }
})

module.exports = app