//CREAR UNA BASE DE DATOS

CREATE DATABASE nombre_de_tu_base_de_datos;

//CREACIÓN DE TABLA

CREATE TABLE nombre_de_tu_tabla (
  columna_1 tipo_de_dato_1,
  columna_2 tipo_de_dato_2,
  columna_3 tipo_de_dato_3,
  ...
);

CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  email VARCHAR(50)
);

//INSERT DE TABLA

INSERT INTO nombre_de_tu_tabla (columna_1, columna_2, columna_3, ...) 
VALUES (valor_1, valor_2, valor_3, ...);

INSERT INTO usuarios (id, nombre, email) 
VALUES (1, 'Juan', 'juan@example.com');

//UPDATE DE TABLA

UPDATE nombre_de_tu_tabla 
SET columna_1 = valor_1, columna_2 = valor_2, columna_3 = valor_3, ...
WHERE condicion;

UPDATE usuarios 
SET email = 'nuevo_email@example.com' 
WHERE id = 1;

//DELETED DE TABLA

DELETE FROM nombre_de_tu_tabla WHERE condicion;

DELETE FROM usuarios WHERE id = 1;

//QUERYS DE TABLA

SELECT nombre, email FROM usuarios;
SELECT id, nombre FROM usuarios WHERE email = 'correo_electronico';
