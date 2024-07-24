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

router.get('/pacientes/:cedula', async (req, res) => {
    try {
        const paciente = await Paciente.findOne({ cedula: req.params.cedula })

        if(!paciente) {
            return res.status(404).json({ Mensaje: 'Paciente no encontrado'})
        }

        res.status(200).json(paciente)

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ mensaje: e.message })
    }
})

router.get('/historiales/:cedula', async (req, res) => {
    try {

        const paciente = await Paciente.findOne({ cedula: req.params.cedula })

        if(!paciente) {
            return res.status(404).json({ Mensaje: 'Paciente no Encontrado'})
        }

        const historial = await HistorialMedico.find({ pacienteID: paciente._id})
        if(!historial) {
            return res.status(404).json({ Mensaje: 'Historial Medico no Encontrado'})
        }

        res.status(200).json(historial)
        
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ mensaje: e.message})
    }
})

module.exports = router;