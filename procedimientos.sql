-- Procedimiento para insertar un usuario
DELIMITER //
CREATE PROCEDURE insertarUsuario(IN p_nombre VARCHAR(255), IN p_edad INT)
BEGIN
  INSERT INTO usuarios (nombre, edad) VALUES (p_nombre, p_edad);
END //
DELIMITER ;

-- Procedimiento para obtener todos los usuarios
DELIMITER //
CREATE PROCEDURE obtenerUsuarios()
BEGIN
  SELECT * FROM usuarios;
END //
DELIMITER ;
