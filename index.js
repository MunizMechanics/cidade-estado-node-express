const express = require('express')
const bodyParsers = require('body-parser')
const estadosRouter = require('./routes/estados')
const authMiddleware = require('./middlewares/auth')

const app = express()
app.use(express.static('public'))
app.use(bodyParsers.json())

app.use(authMiddleware)

app.get('/', (req, res) => {
    res.send('Hello from GEO API!')
})

app.use('/estados', estadosRouter)

app.listen(8080, () => console.log('server running...'))