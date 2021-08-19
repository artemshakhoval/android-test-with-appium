const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const routes = require('./routes/routes')

const port = 3000

app.use(bodyParser.json())

app.use('/whatsapp', routes)

app.listen(port, () => {
    console.log(`We are working on port: ${port}`);
})