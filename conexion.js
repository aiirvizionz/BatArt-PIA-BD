const mysql = require("mysql");

// Configura los parámetros de conexión a tu base de datos MySQL
const con = mysql.createConnection({
    host: 'localhost',
    database: 'bd_pia',
    user: 'root',
    password: ''
});

con.connect(function (err) {
    if (err) {
        console.log("Error al conectarse a la base de datos");
        return;
    } else {
        console.log("Conexión exitosa a la base de datos");
    }
});