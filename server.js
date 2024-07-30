require('dotenv').config();

const express = require('express')
const app = express ()
const mongoose = require('mongoose')

const rutasGET = require('./rutas/rutasGET')
const rutasPOST = require('./rutas/rutasPOST')

app.use(express.json())

app.use('/api', rutasGET)
app.use('/api', rutasPOST)

mongoose.connect(process.env.DATABASE_PRUEBA, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {

    console.log('Conectado a MongoDB')

    app.listen(3000, ()=> {
        console.log('API Corriendo en el Puerto 3000')
    })

}).catch(() => {
    console.log('Error al conectar a MongoDB', e.message)
})