const express = require('express')
const ruta = express.Router()
const Paciente = require('../modelos/paciente')

//Conseguir totods
ruta.get('/', async (req, res) => {
    try{
        const datosPacientes = await Paciente.find()
        res.json(datosPacientes)

    } catch (e) {
        res.status(500).json({MensajeError: e.message}) //Estado 500 significa que hay un error en el servidor (Nuestra culpa)
    }
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