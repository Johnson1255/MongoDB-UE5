const express = require('express')
const router = express.Router()
const Paciente = require('../modelos/modeloPaciente')
const HistorialMedico = require('../modelos/modeloHistorialMedico')
const ArduinoData = require('../modelos/modeloArduino')

router.post('/pacientes', async (req, res) => {
    try {
        const paciente = await Paciente.create(req.body)
        res.status(200).json(paciente)
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ Mensaje: e.message })
    }
});

router.post('/angulos', async (req, res) => {
    try {

        const { cedula, cadera, rodilla } = req.body
        const paciente = await Paciente.findOne({ cedula })

        if(!paciente) {
            return res.status(404).json({ mensaje: 'Paciente no encontrado'})
        }

        const data = await ArduinoData.create({ pacienteID: paciente._id, cadera, rodilla})
        res.status(200).json(data)

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ Mensaje: e.message })
    }
});

router.post('/historiales', async (req, res) => {
    try {
        
        const { cedula, enfermedadesPrevias, alergias, cirugias, medicamentos } = req.body
        const paciente = await Paciente.findOne({ cedula })

        if(!paciente) {
            return res.status(404).json({ Mensaje: 'Paciente no encontrado'})
        }

        const historial = await HistorialMedico.create({ pacienteID: paciente._id, enfermedadesPrevias, alergias, cirugias, medicamentos})
        res.status(200).json(historial)

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ Mensaje: e.message})
    }
})

module.exports = router;