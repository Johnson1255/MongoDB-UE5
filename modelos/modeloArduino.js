const mongoose = require('mongoose')

const esquemaArduino = new mongoose.Schema({
    pacienteID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: false
    },
    
    cadera0: {
        type: Number,
        required: true
    },

    cadera1: {
        type: Number,
        required: false
    },

    rodilla0: {
        type: Number,
        required: true
    },

    rodilla1: {
        type: Number,
        required: false
    }

}, {
    timestamps: true
})

const ArduinoData = mongoose.model('ArduinoData', esquemaArduino)

module.exports = ArduinoData