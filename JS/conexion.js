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
/*document.getElementById('iniciarSesion').addEventListener('click', (event) => {
    event.preventDefault(); // Evita el envío automático del formulario

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Realiza la consulta y compara los datos (asegúrate de tener una conexión a la base de datos)
    connection.query('SELECT * FROM login_Emp WHERE correo = ? AND contraseña = ?', [usuario, contrasena], (err, rows, fields) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return;
        }

        if (rows.length > 0) {
            console.log('Usuario autenticado correctamente');
            // Realiza acciones adicionales como redirigir a otra página o mostrar un mensaje de éxito.
        } else {
            console.log('Credenciales incorrectas. No se pudo iniciar sesión.');
            // Muestra un mensaje de error o realiza otras acciones apropiadas.
        }
    });
});*/


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

/* EMPLEADOS */
// Query SELECT para comparar los datos de inicio de sesión del login de empleado

// Query INSERT para guardar los datos del registro en la tabla login_Emp y empleados

// Query DELETE para eliminar los datos del registro en la tabla empleados en el menu de ADMIN

// Query UPDATE para actualizar los datos del registro en la tabla empleados


/* PRODUCTOS */
// Query INSERT para guardar los datos del registro en la tabla productos

// Query DELETE para eliminar los datos del registro en la tabla productos en el menu de ADMIN

// Query UPDATE para actualizar los datos del registro en la tabla productos


/* CLIENTES */
// Query INSERT para guardar los datos del registro en la tabla clientes en el menu de EMPLEADO

// Query DELETE para eliminar los datos del registro en la tabla clientes en el menu de EMPLEADO

// Query UPDATE para actualizar los datos del registro en la tabla clientes en el menu de EMPLEADO


/* VENTA */
// Query INSERT para guardar los datos del registro en la tabla ventas en el menu de EMPLEADO

// Query DELETE para eliminar los datos del registro en la tabla ventas en el menu de EMPLEADO

// Query UPDATE para actualizar los datos del registro en la tabla ventas en el menu de EMPLEADO








//Cerrar conexión
connection.end((err) => {
    if (err) {
        console.error('Error al cerrar la conexión:', err);
    }
    console.log('Conexión cerrada');
});