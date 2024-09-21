// Configuración de Sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' // o 'sqlite', 'postgres', etc.
});

// Definición del modelo Usuario
const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'usuarios'
});

// Función para crear un usuario
async function crearUsuario(nombre, edad) {
  await sequelize.sync();  // Sincroniza el modelo con la base de datos
  const usuario = await Usuario.create({ nombre, edad });
  return usuario;
}

// Función para obtener todos los usuarios
async function obtenerUsuarios() {
  const usuarios = await Usuario.findAll();
  return usuarios;
}

// Uso de las funciones
crearUsuario('Juan', 30).then(usuario => console.log(usuario));
obtenerUsuarios().then(usuarios => console.log(usuarios));
