const express = require("express")
const router = express.Router()
const estados = require('../estados.json')
const cidadesRouter = require('./cidades')

router.get('/', (req, res) => {
    res.json(estados)
})

router.get('/:sigla', (req, res) => {
    const { sigla } = req.params
    const estado = estados.find(e => e.sigla === sigla.toUpperCase())
    if(estado) {
        res.json(estado)
    }else{
        res.sendStatus(404)
    }
})

router.use('/:sigla/cidades', (req, res, next) => {
    req.sigla = req.params.sigla
    next()
}, cidadesRouter)

module.exports = router