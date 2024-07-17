require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Conectado a la Base de Batos'));

app.use(express.json());

const pacientesRuta = require('./ruta/pacientes');
app.use('/pacientes', pacientesRuta);

app.listen(3000, () => console.log('Servidor Iniciado'));