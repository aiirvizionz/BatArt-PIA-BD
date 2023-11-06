const express = require('express');
const mysql = require('mysql2');

const app = express();

// Configura la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SAO12345',
    database: 'bd_pia',
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

//Cerrar conexión
db.end((err) => {
    if (err) {
        console.error('Error al cerrar la conexión:', err);
    }
    console.log('Conexión cerrada');
});


const nombreRegistro = document.getElementById('nombreRegistro');
const apPatRegistro = document.getElementById('apPatRegistro');
const apMatRegistro = document.getElementById('apMatRegistro');
const telefonoRegistro = document.getElementById('telRegistro');
const correoRegistro = document.getElementById('correoRegistro');
const passwordRegistro = document.getElementById('passRegistro');
const aceptarRegistro = document.getElementById('aceptarRegistro');

const empleadoData = {
    nombres: nombreRegistro.value,
    apellido_paterno: apPatRegistro.value,
    apellido_materno: apMatRegistro.value,
    telefono_movil: telefonoRegistro.value,
};

const insertQuery = 'INSERT INTO empleado (nombres, apellido_paterno, apellido_materno, telefono_movil) VALUES (?, ?, ?, ?)';

aceptarRegistro.addEventListener('click', () => {
connection.query(insertQuery, [empleadoData.nombres, empleadoData.apellido_paterno, empleadoData.apellido_materno, empleadoData.telefono_movil], (err, results) => {
    if (err) {
        console.error('Error al insertar datos del empleado:', err);
    } else {
        console.log('Registro de empleado insertado correctamente');
    }
});
}); 


// Rutas para manejar la autenticación
app.get('/auth', (req, res) => {
    // Realiza la consulta a la base de datos aquí
    // Devuelve una respuesta al cliente
});

app.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});
