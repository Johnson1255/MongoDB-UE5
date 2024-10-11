// Importamos Mongoose para definir el esquema de la colección
const mongoose = require('mongoose');

// Definimos el esquema de Mongoose para la colección de "Historial Médico"
const esquemaHistorialMedico = new mongoose.Schema({

    // Referencia al ID del paciente asociado, es un campo obligatorio
    // Este campo utiliza ObjectId que referencia al modelo "Paciente"
    pacienteID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',  // Establece la relación con la colección "Paciente"
        required: true
    },

    // Lista de enfermedades previas del paciente, no es un campo obligatorio
    // Se almacena como un array de strings
    enfermedadesPrevias: {
        type: [String],
        required: false
    },

    // Lista de alergias del paciente, no es un campo obligatorio
    // Se almacena como un array de strings
    alergias: {
        type: [String],
        required: false
    },

    // Lista de cirugías que el paciente ha tenido, no es un campo obligatorio
    // Se almacena como un array de strings
    cirugias: {
        type: [String],
        required: false
    },

    // Lista de medicamentos que el paciente está tomando o ha tomado, no es un campo obligatorio
    // Se almacena como un array de strings
    medicamentos: {
        type: [String],
        required: false
    }

}, 
    {
        // Opción para agregar automáticamente los campos 'createdAt' y 'updatedAt'
        timestamps: true
    }
);

// Creamos y exportamos el modelo "HistorialMedico" basado en el esquema definido
const HistorialMedico = mongoose.model('HistorialMedico', esquemaHistorialMedico);

module.exports = HistorialMedico;