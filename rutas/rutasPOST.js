// Importamos Express para manejar las rutas y peticiones HTTP
const express = require('express');
// Creamos un enrutador de Express para definir rutas de forma modular
const router = express.Router();

// Importamos los modelos correspondientes a las colecciones de MongoDB
const Paciente = require('../modelos/modeloPaciente'); // Modelo del Paciente
const HistorialMedico = require('../modelos/modeloHistorialMedico'); // Modelo del Historial Médico
const ArduinoData = require('../modelos/modeloArduino'); // Modelo de datos capturados por Arduino

// Ruta POST para crear un nuevo paciente
router.post('/pacientes', async (req, res) => {
    try {
        // Creamos un nuevo paciente con los datos recibidos en el cuerpo de la solicitud (req.body)
        const paciente = await Paciente.create(req.body);
        // Devolvemos una respuesta con el objeto del paciente creado y un estado HTTP 200 (éxito)
        res.status(200).json(paciente);
    } catch (e) {
        // Capturamos cualquier error y lo registramos en la consola
        console.log(e.message);
        // Enviamos una respuesta de error al cliente con el estado 500 (Error interno del servidor)
        res.status(500).json({ Mensaje: e.message });
    }
});

// Ruta POST para registrar datos de ángulos capturados por Arduino
router.post('/angulos', async (req, res) => {
    try {
        // Código original comentado para pruebas futuras con la identificación del paciente

        /*
        const { cedula, cadera0, cadera1, rodilla0, rodilla1 } = req.body;
        
        // Verificamos si el paciente existe en la base de datos mediante la cédula
        if(!paciente) {
            return res.status(404).json({ mensaje: 'Paciente no encontrado' });
        }
        
        // Guardamos los datos del Arduino en la base de datos, vinculándolos con el paciente
        const data = await ArduinoData.create({ pacienteID: paciente._id, cadera0, cadera1, rodilla0, rodilla1 });
        */

        // Para pruebas: guardamos los datos del Arduino sin verificar el paciente (solo para pruebas iniciales)
        const { cadera0, cadera1, rodilla0, rodilla1 } = req.body;
        // Creamos un nuevo registro en la base de datos con los ángulos proporcionados
        const data = await ArduinoData.create({ cadera0, cadera1, rodilla0, rodilla1 });
        // Respondemos con los datos guardados y un estado 200
        res.status(200).json(data);

    } catch (e) {
        // Capturamos y mostramos cualquier error
        console.log(e.message);
        // Enviamos una respuesta con el estado 500 y el mensaje de error
        res.status(500).json({ Mensaje: e.message });
    }
});

// Ruta POST para registrar el historial médico de un paciente
router.post('/historiales', async (req, res) => {
    try {
        // Extraemos los datos relevantes del historial médico desde el cuerpo de la solicitud
        const { cedula, enfermedadesPrevias, alergias, cirugias, medicamentos } = req.body;
        
        // Buscamos al paciente en la base de datos mediante su cédula
        const paciente = await Paciente.findOne({ cedula });

        // Si no se encuentra al paciente, devolvemos un error 404 (No encontrado)
        if(!paciente) {
            return res.status(404).json({ Mensaje: 'Paciente no encontrado' });
        }

        // Si se encuentra el paciente, creamos un nuevo historial médico vinculado a su ID
        const historial = await HistorialMedico.create({ 
            pacienteID: paciente._id, 
            enfermedadesPrevias, 
            alergias, 
            cirugias, 
            medicamentos 
        });
        
        // Devolvemos el historial creado y el estado 200 (éxito)
        res.status(200).json(historial);

    } catch (e) {
        // Capturamos cualquier error y lo mostramos en la consola
        console.log(e.message);
        // Enviamos una respuesta de error al cliente con el estado 500
        res.status(500).json({ Mensaje: e.message });
    }
});

// Exportamos el enrutador para usarlo en otras partes de la aplicación
module.exports = router;