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

module.exports = router;