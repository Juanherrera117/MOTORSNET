-- -----------------------------------------------------
-- Schema MOTORSNET
-- -----------------------------------------------------
CREATE DATABASE MOTORSNET;
USE MOTORSNET;

-- -----------------------------------------------------
-- Tabla usuario
-- -----------------------------------------------------
CREATE TABLE usuario (
  usuario VARCHAR(50) NOT NULL,
  contraseña VARCHAR(60) NOT NULL,
  PRIMARY KEY (usuario));

-- -----------------------------------------------------
-- Tabla modelo (automóviles)
-- -----------------------------------------------------
CREATE TABLE modelo (
  id_modelo INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(60) NOT NULL,
  precio_base DOUBLE NOT NULL,
  PRIMARY KEY (id_modelo));

-- -----------------------------------------------------
-- Tabla color (colores de los automóviles)
-- -----------------------------------------------------
CREATE TABLE color (
  id_color INT(11) NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(20) NOT NULL,
  PRIMARY KEY (id_color));

-- -----------------------------------------------------
-- Tabla caracteristica (características adicionales)
-- -----------------------------------------------------
CREATE TABLE caracteristica (
  id_caracteristica INT(11) NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(60) NOT NULL,
  costo_adicional DOUBLE NOT NULL,
  PRIMARY KEY (id_caracteristica));

-- -----------------------------------------------------
-- Tabla venta (ventas realizadas)
-- -----------------------------------------------------
CREATE TABLE venta (
  id_venta INT(11) NOT NULL AUTO_INCREMENT,
  id_modelo INT(11) NOT NULL,
  id_color INT(11) NOT NULL,
  id_caracteristicas INT(11) NOT NULL,
  fecha_venta DATE NOT NULL,
  cantidad INT NOT NULL,
  costo_total DOUBLE NOT NULL,
  PRIMARY KEY (id_venta),
  CONSTRAINT fk_venta_modelo
    FOREIGN KEY (id_modelo)
    REFERENCES modelo (id_modelo)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_venta_color
    FOREIGN KEY (id_color)
    REFERENCES color (id_color)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_venta_caracteristica
    FOREIGN KEY (id_caracteristicas)
    REFERENCES caracteristica (id_caracteristica)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Tabla cliente (clientes de la empresa)
-- -----------------------------------------------------
CREATE TABLE cliente (
  id_cliente INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(60) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  telefono VARCHAR(15) NOT NULL,
  PRIMARY KEY (id_cliente));

-- -----------------------------------------------------
-- Tabla financiamiento (tipos de financiamiento)
-- -----------------------------------------------------
CREATE TABLE financiamiento (
  id_financiamiento INT(11) NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(60) NOT NULL,
  tasa_interes DOUBLE NOT NULL,
  PRIMARY KEY (id_financiamiento));

-- -----------------------------------------------------
-- Tabla reserva (reservas de automóviles)
-- -----------------------------------------------------
CREATE TABLE reserva (
  id_reserva INT(11) NOT NULL AUTO_INCREMENT,
  id_cliente INT(11) NOT NULL,
  id_venta INT(11) NOT NULL,
  fecha_reserva DATE NOT NULL,
  PRIMARY KEY (id_reserva),
  CONSTRAINT fk_reserva_cliente
    FOREIGN KEY (id_cliente)
    REFERENCES cliente (id_cliente),
  CONSTRAINT fk_reserva_venta
    FOREIGN KEY (id_venta)
    REFERENCES venta (id_venta));