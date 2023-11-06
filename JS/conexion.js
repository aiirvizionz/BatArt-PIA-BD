const mysql = require('mysql2');

const con = {
    host: 'localhost',
    user: 'root',
    password: 'SAO12345',
    database: 'bd_pia',
    port: '3306'
};

const connection = mysql.createConnection(con);

// Conexión a la base de datos //
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Consultas a la base de datos //

// Consulta para leer un registro de la tabla login_Emp leyendo correo y contraseña de los inputs "user" y "password"
connection.query('SELECT * FROM login_Emp WHERE correo = ? AND contraseña = ?', ['user', 'password'], (err, rows, fields) => {
    if (err) {
        console.error('Error en la consulta:', err);
        return;
    }
    console.log('Consulta exitosa');
    console.log(rows);
});

connection.query('SELECT * FROM clientes', (err, rows, fields) => {
    if (err) {
        console.error('Error en la consulta:', err);
        return;
    }
    console.log('Consulta exitosa');
    console.log(rows);
});



//Cerrar conexión
connection.end((err) => {
    if (err) {
        console.error('Error al cerrar la conexión:', err);
    }
    console.log('Conexión cerrada');
});