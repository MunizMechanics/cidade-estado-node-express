const express = require("express")
const router = express.Router()
const CIDADES = require('../cidades.json')

router.get('/', (req, res) => {
    const { sigla } = req
    const cidades = CIDADES.filter( c => c.estado === sigla )
    res.json(cidades)
})

router.get('/:id', (req, res) => {
    const { sigla } = req
    const { id } = req.params
    const cidade = CIDADES.find(c => c.estado === sigla && c.id === id)
    if(cidade) {
        res.json(cidade)
    }else{
        res.sendStatus(404)
    }
})

router.post('/', (req, res) => {
    const { id, nome } = req.body
    const { sigla } = req
    const cidade = {
        id, 
        nome,
        estado: sigla
    }
    CIDADES.push(cidade)
    res.sendStatus(201)
})

module.exports = router