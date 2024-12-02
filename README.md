# Proyecto MOTORSNET

Proyecto de la pagina de venta de automoviles

## Integrantes Proyecto

JUAN PABLO HERRERA BAQUERO 2224512

WILMER ANDRES ROMERO CALA 2214102

JAIME STIVEN CABALLERO RODRIGUEZ 2221892

YEISON STEVEN OVALLE MANJARRES 2225115


## Base de datos - Use Xampp

### Start Apache | Start MySQL -> admin 
### `Crear Usuario` -> host: "localhost", user:"root" y password:"clavel", database: "MOTORSNET" (Todos los Privilegios globales)
### `Import DB` -> use MOTORSNET.sql (asegurese de que la DB se asociará al usuario creado) -> ir al servidor (Servidor: 127.0.0.1) -> cuentas de usario (user 'admin') -> Bases de datos  -> "Añadir privilegios a la o las base de datos siguientes:" - "MOTORSNET" (continuar -> seleccionar todo -> continuar) 
### `Datos predeterminados BD` -> use llenado.sql (seccion sql, ejecute insert por separado)

## Instrucciones para Correcta Ejecución - concesionario (FRONTEND)
Asegurese de estar en la ruta correcta (sobre la carpeta Client)

### `Instalar modulos de REACT`
#### npm install react react-dom 
### `Instalar react-bootstrap`
#### npm install react-bootstrap bootstrap
#### npm install --save sweetalert2 sweetalert2-react-content
### `Ejecutar concesionario`
#### npm start

## Instrucciones para Correcta Ejecución - Server (BACKEND)
Asegurese de estar en la ruta correcta (sobre la carpeta Server)
### `Instalar modulos`
#### npm install
#### npm install mysql express
#### npm install cors
### `Ejecutar Server`
#### node index.js

## Login
### `Credenciales`
#### user : 'usuario'
#### password : 'contraseña'
### `Nota`
#### La pestaña Reservas es de tipo privada, por lo que necesita del login para tener acceso a la misma.
