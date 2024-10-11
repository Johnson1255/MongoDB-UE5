// Cargamos las variables de entorno desde el archivo .env
require('dotenv').config();

// Importamos el framework Express para crear y manejar el servidor
const express = require('express');
const app = express(); // Inicializamos la aplicación de Express
// Importamos Mongoose para conectarnos y gestionar la base de datos MongoDB
const mongoose = require('mongoose');

// Importamos las rutas GET y POST desde los archivos separados para una mejor organización del código
const rutasGET = require('./rutas/rutasGET');
const rutasPOST = require('./rutas/rutasPOST');

// Middleware de Express para parsear las solicitudes entrantes con JSON
app.use(express.json());

// Definimos las rutas para las peticiones GET y POST bajo el mismo prefijo '/api'
// Esto permite que todas las rutas GET y POST estén bajo una única ruta base
app.use('/api', rutasGET);
app.use('/api', rutasPOST);

// Establecemos la conexión a la base de datos MongoDB usando las credenciales del archivo .env
// El uso de 'useNewUrlParser' y 'useUnifiedTopology' mejora la compatibilidad y estabilidad de la conexión
mongoose.connect(process.env.DATABASE_PRUEBA, {
    useNewUrlParser: true,   // Utiliza el nuevo analizador de URL para evitar advertencias de deprecación
    useUnifiedTopology: true // Usa el nuevo motor de administración de conexiones
})
.then(() => {
    // Si la conexión es exitosa, mostramos un mensaje en la consola
    console.log('Conectado a MongoDB');

    /* 
    Iniciamos el servidor escuchando en el puerto 3000 y en todas las interfaces de red ('0.0.0.0')
    Nota: Esto permite que el servidor sea accesible desde cualquier red, útil en entornos de desarrollo
    pero debe manejarse con precaución en producción por razones de seguridad
    */
    app.listen(3000, '0.0.0.0', () => {
        console.log('API Corriendo en el Puerto 3000');
    });

})
// Si ocurre un error en la conexión a MongoDB, lo capturamos y mostramos el mensaje de error
.catch((e) => {
    console.log('Error al conectar a MongoDB', e.message);
});
