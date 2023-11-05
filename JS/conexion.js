const mysql = require('mysql2');

const con = {
    host: 'localhost',
    user: 'root',
    password: 'SAO12345',
    database: 'bd_pia',
    port: '3306'
};

const connection = mysql.createConnection(con);

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Consultas a la base de datos //

connection.query('SELECT * FROM clientes', (err, rows, fields) => {
    if (err) {
        console.error('Error en la consulta:', err);
        return;
    }
    console.log('Consulta exitosa');
    console.log(rows);
});




connection.end((err) => {
    if (err) {
        console.error('Error al cerrar la conexión:', err);
    }
    console.log('Conexión cerrada');
});