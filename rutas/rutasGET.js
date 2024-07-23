const express = require('express')
const router = express.Router()
const Paciente = require('../modelos/modeloPaciente')
const HistorialMedico = require('../modelos/modeloHistorialMedico')
const ArduinoData = require('../modelos/modeloArduino')

router.get('/', (req, res) => {
    res.send('Realizacion de Pruebas')
})

router.get('/pacientes', async (req, res) => {
    try {
        
        const pacientes = await Paciente.find({})
        res.status(200).json(pacientes);

    } catch (e) {
        console.log(e.message)
        res.status(500).json({Mensaje: e.message})
    }
})

module.exports = router;