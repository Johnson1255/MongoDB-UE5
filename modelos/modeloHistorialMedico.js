const mongoose = require('mongoose')

const esquemaHistorialMedico = new mongoose.Schema({
    pacienteID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },

    enfermedadesPrevias: {
        type: [String],
        required: false
    },

    alergias: {
        type: [String],
        required: false
    },

    cirugias: {
        type: [String],
        required: false
    },

    medicamentos: {
        type: [String],
        required: false
    }

}, {
    timestamps: true
})

const HistorialMedico = mongoose.model('HistorialMedico', esquemaHistorialMedico);

module.exports = HistorialMedico;