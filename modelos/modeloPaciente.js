// Importamos el objeto Timestamp de MongoDB y Mongoose para crear el esquema del modelo
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

// Definimos el esquema de Mongoose para la colección de "Pacientes"
const esquemaPaciente = mongoose.Schema({

    // Campo para la cédula del paciente, de tipo Number y obligatorio
    cedula: {
        type: Number,
        required: true
    },

    // Campo para el nombre del paciente, de tipo String y obligatorio
    nombre: {
        type: String,
        required: true
    },

    // Campo para la edad del paciente, de tipo Number y obligatorio
    edad: {
        type: Number,
        required: true
    },

    /* 
    Campo para el sexo del paciente, de tipo String y obligatorio
    Se sugiere ingresar "M" para Masculino o "F" para Femenino
    Nota: En sistemas médicos, es importante mantener un formato claro y estandarizado 
    Esto fue comentado detalladamente por los médicos presentes en las revisiones de los prototipos
    */
    sexo: {
        type: String,
        required: true
    },

    // Campo opcional para el teléfono del paciente, de tipo String
    telefono: {
        type: String,
        required: false
    },

    // Campo opcional para el correo electrónico del paciente, de tipo String
    correoElectronico: {
        type: String,
        required: false
    },

    // Campo para la estatura del paciente, de tipo Number y obligatorio
    estatura: {
        type: Number,
        required: true 
    },

    // Campo para el peso del paciente, de tipo Number y obligatorio
    peso: {
        type: Number,
        required: true
    },

    // Campo para el grupo sanguíneo del paciente, de tipo String y obligatorio
    grupoSanguineo: {
        type: String,
        required: true
    }

}, 
    {
        // Opciones de esquema: Agrega campos 'createdAt' y 'updatedAt' automáticamente
        timestamps: true
    }
);

// Creamos y exportamos el modelo "Paciente" basado en el esquema definido
const Paciente = mongoose.model('Paciente', esquemaPaciente);

module.exports = Paciente;