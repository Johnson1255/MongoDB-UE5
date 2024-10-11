// Importamos Mongoose para definir el esquema de la colección
const mongoose = require('mongoose');

// Definimos el esquema de Mongoose para la colección de "ArduinoData"
const esquemaArduino = new mongoose.Schema({

    // Identificador del paciente asociado, utiliza ObjectId que referencia al modelo "Paciente"
    // Actualmente es opcional (false) durante la fase de pruebas, pero debe cambiarse a "true" cuando esté en producción
    pacienteID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',  // Relaciona los datos con el paciente correspondiente
        required: false  // Cambiar a 'true' en la implementación final
    },

    // Ángulo medido en la cadera (posición inicial), es un campo obligatorio
    cadera0: {
        type: Number,
        required: true
    },

    // Ángulo medido en la cadera (posición final), es opcional durante las pruebas
    // Se recomienda hacer obligatorio en la implementación final
    cadera1: {
        type: Number,
        required: false  // Cambiar a 'true' en la implementación final
    },

    // Ángulo medido en la rodilla (posición inicial), es un campo obligatorio
    rodilla0: {
        type: Number,
        required: true
    },

    // Ángulo medido en la rodilla (posición final), es opcional durante las pruebas
    // Se recomienda hacer obligatorio en la implementación final
    rodilla1: {
        type: Number,
        required: false  // Cambiar a 'true' en la implementación final
    }

}, 
    {
        // Agregamos timestamps para rastrear las fechas de creación y actualización de cada documento
        timestamps: true
    }
);

// Creamos y exportamos el modelo "ArduinoData" basado en el esquema definido
const ArduinoData = mongoose.model('ArduinoData', esquemaArduino);

module.exports = ArduinoData;
