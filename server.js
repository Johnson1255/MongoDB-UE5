require('dotenv').config();

const express = require('express')
const app = express ()
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.send('HOLA REALIZANDO PRUEBAS')
})

app.listen(3000, ()=> {
    console.log('API corriendo en el puerto 3000')
})

mongoose.connect(process.env.DATABASE_PRUEBA)
.then(() => {
    console.log('Conectado a MongoDB')
}).catch(() => {
    console.log(e)
})