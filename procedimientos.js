const mysql = require('mysql2/promise');

// Conexión a la base de datos
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'username',
  database: 'database',
  password: 'password'
});

// Función para crear un usuario
async function crearUsuario(nombre, edad) {
  const [results] = await connection.execute('CALL insertarUsuario(?, ?)', [nombre, edad]);
  return results;
}

// Función para obtener todos los usuarios
async function obtenerUsuarios() {
  const [rows] = await connection.execute('CALL obtenerUsuarios()');
  return rows;
}

// Uso de las funciones
crearUsuario('Juan', 30).then(result => console.log(result));
obtenerUsuarios().then(usuarios => console.log(usuarios));
