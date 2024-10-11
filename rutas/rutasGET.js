// Importamos Express para manejar las rutas y peticiones HTTP
const express = require('express');
// Creamos un enrutador de Express para organizar las rutas
const router = express.Router();

// Importamos los modelos de la base de datos que se utilizarán
const Paciente = require('../modelos/modeloPaciente'); // Modelo del Paciente
const HistorialMedico = require('../modelos/modeloHistorialMedico'); // Modelo del Historial Médico
const ArduinoData = require('../modelos/modeloArduino'); // Modelo de datos de Arduino (no utilizado en este fragmento se espera implementación futura)

// Ruta GET básica para pruebas iniciales
router.get('/', (req, res) => {
    // Respuesta de prueba para verificar que el servidor está funcionando
    res.send('Realización de Pruebas');
});

// Ruta GET para obtener la lista de todos los pacientes
router.get('/pacientes', async (req, res) => {
    try {
        // Obtenemos todos los registros de pacientes en la base de datos
        const pacientes = await Paciente.find({});

        // Respondemos con un estado 200 y enviamos la lista de pacientes en formato JSON
        res.status(200).json(pacientes);

    } catch (e) {
        // Capturamos y registramos cualquier error
        console.log(e.message);

        // Enviamos una respuesta de error con un estado 500 y el mensaje de error
        res.status(500).json({ Mensaje: e.message });
    }
});

// Ruta GET para obtener la información de un paciente específico por su cédula
router.get('/pacientes/:cedula', async (req, res) => {
    try {
        // Buscamos un paciente en la base de datos mediante la cédula proporcionada en los parámetros de la URL
        const paciente = await Paciente.findOne({ cedula: req.params.cedula });

        // Si no se encuentra el paciente, devolvemos un estado 404 y un mensaje de error
        if (!paciente) {
            return res.status(404).json({ Mensaje: 'Paciente no encontrado' });
        }

        // Si se encuentra el paciente, devolvemos su información con un estado 200
        res.status(200).json(paciente);

    } catch (e) {
        // Capturamos y registramos cualquier error
        console.log(e.message);

        // Enviamos una respuesta de error con un estado 500 y el mensaje de error
        res.status(500).json({ mensaje: e.message });
    }
});

// Ruta GET para obtener el historial médico de un paciente por su cédula
router.get('/historiales/:cedula', async (req, res) => {
    try {
        // Buscamos al paciente en la base de datos mediante su cédula
        const paciente = await Paciente.findOne({ cedula: req.params.cedula });

        // Si no se encuentra el paciente, devolvemos un estado 404 y un mensaje de error
        if (!paciente) {
            return res.status(404).json({ Mensaje: 'Paciente no Encontrado' });
        }

        // Si el paciente existe, buscamos su historial médico en la base de datos usando su ID
        const historial = await HistorialMedico.find({ pacienteID: paciente._id });

        // Si no se encuentra el historial médico, devolvemos un estado 404 y un mensaje de error
        if (!historial) {
            return res.status(404).json({ Mensaje: 'Historial Médico no Encontrado' });
        }

        // Si se encuentra el historial médico, lo devolvemos con un estado 200
        res.status(200).json(historial);

    } catch (e) {
        // Capturamos y registramos cualquier error
        console.log(e.message);

        // Enviamos una respuesta de error con un estado 500 y el mensaje de error
        res.status(500).json({ mensaje: e.message });
    }
});

// Exportamos el enrutador para que pueda ser utilizado en otras partes de la aplicación
module.exports = router;
