const mongoose = require('mongoose')

const esquemaArduino = new mongoose.Schema({
    pacienteID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    
    cadera: {
        type: Number,
        required: true
    },

    rodilla: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
})

const ArduinoData = mongoose.model('ArduinoData', esquemaArduino)

module.exports = ArduinoData