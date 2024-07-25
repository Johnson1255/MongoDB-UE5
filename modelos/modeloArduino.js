const mongoose = require('mongoose')

const esquemaArduino = new mongoose.Schema({
    pacienteID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    
    cadera0: {
        type: Number,
        required: true
    },

    cadera1: {
        type: Number,
        required: true
    },

    rodilla0: {
        type: Number,
        required: true
    },

    rodilla1: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
})

const ArduinoData = mongoose.model('ArduinoData', esquemaArduino)

module.exports = ArduinoData