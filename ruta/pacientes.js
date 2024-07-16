const express = require('express')
const ruta = express.Router()

//Conseguir totods
ruta.get('/', (req, res) => {
    res.send('Probando')
})

//Conseguir uno
ruta.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//Crear
ruta.post('/', (req, res) => {
    
})

//Actualizar
ruta.patch('/:id', (req, res) => {
    
})

//Eliminar
ruta.delete('/:id', (req, res) => {
    
})

module.exports = ruta