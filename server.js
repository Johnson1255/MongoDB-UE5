require('dotenv').config();

const express = require('express')
const app = express ()
const mongoose = require('mongoose')
const Paciente = require('./modelos/modeloPaciente')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('HOLA REALIZANDO PRUEBAS')
})

app.post('/pacientes', async (req, res) => {
    try {
        
        const paciente = await Paciente.create(req.body)
        res.status(200).json(paciente);

    } catch (e) {
        console.log(e.message)
        res.status(500).json({Mensaje: e.message})
    }
})

app.get('/pacientes', async (req, res) => {
    try {
        
        const pacientes = await Paciente.find({})
        res.status(200).json(pacientes);

    } catch (e) {
        console.log(e.message)
        res.status(500).json({Mensaje: e.message})
    }
})

mongoose.connect(process.env.DATABASE_PRUEBA)
.then(() => {

    console.log('Conectado a MongoDB')

    app.listen(3000, ()=> {
        console.log('API Corriendo en el Puerto 3000')
    })

}).catch(() => {
    console.log(e)
})