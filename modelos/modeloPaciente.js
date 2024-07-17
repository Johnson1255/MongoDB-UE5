const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const esquemaPaciente = mongoose.Schema({

    cedula: {
        type: Number,
        required: true
    },

    nombre: {
        type: String,
        required: true
    },

    edad: {
        type: Number,
        required: true
    },

    sexo: {
        type: String, //Importante resaltar que es para poner "M" (Masculino) o "F" (Femenino), ya que es el sexo. (No poner otras)
        required: true
    },

    telefono: {
        type: String,
        required: false
    },

    correoElectronico: {
        type: String,
        required: false
    },

    estatura: {
        type: Number,
        required: true 
    },

    peso: {
        type: Number,
        required: true
    },

    grupoSanguineo: {
        type: String,
        required: true
    }

},
    {
        timestamps: true
    }
)

const Paciente = mongoose.model('Paciente', esquemaPaciente);

module.exports = Paciente;