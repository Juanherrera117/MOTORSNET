const express = require("express"); // Importa el módulo Express, que facilita la creación de aplicaciones web en Node.js.
const app = express(); // Crea una instancia de la aplicación Express.
const mysql = require("mysql"); // Importa el módulo MySQL para conectar y ejecutar consultas en la base de datos MySQL.
const cors = require('cors'); // Importa el módulo CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde diferentes orígenes.

app.use(cors()); // Usa CORS para permitir que otros dominios realicen solicitudes a este servidor.
app.use(express.json()); // Middleware para que Express pueda parsear el cuerpo de las solicitudes en formato JSON.

const db = mysql.createConnection({
  host: "localhost", // Dirección del servidor de la base de datos (en este caso, localhost).
  user: "root", // Usuario de la base de datos.
  password: "clavel", // Contraseña del usuario de la base de datos.
  database: "motorsnet", // Nombre de la base de datos.
});

// Crear una nueva reserva
app.post('/create', (req, res) => {
  const { id_cliente, id_venta, fecha_reserva } = req.body; // Obtiene los datos del cuerpo de la solicitud.

  const query = `INSERT INTO reserva (id_cliente, id_venta, fecha_reserva) VALUES (?, ?, ?)`;
  // Consulta SQL para insertar una nueva reserva en la tabla `reserva`.

  db.query(query, [id_cliente, id_venta, fecha_reserva], (err, result) => {
    if (err) {
      console.error(err); // Imprime el error en la consola si ocurre.
      res.status(500).json({ error: 'Error al crear la reserva' }); // Responde con un error si la consulta falla.
      return;
    }
    res.status(201).json({ success: true, id: result.insertId }); // Responde con éxito si la reserva se crea correctamente.
  });
});

// Obtener todas las reservas
app.get('/reservas', (req, res) => {
  const query = `
    SELECT r.id_reserva, r.fecha_reserva, c.nombre AS cliente, m.nombre AS modelo, 
           v.costo_total, co.descripcion AS color
    FROM reserva r
    JOIN cliente c ON r.id_cliente = c.id_cliente
    JOIN venta v ON r.id_venta = v.id_venta
    JOIN modelo m ON v.id_modelo = m.id_modelo
    JOIN color co ON v.id_color = co.id_color
  `;
  // Consulta SQL para obtener todas las reservas, con información de cliente, modelo, venta y color.

  db.query(query, (err, result) => {
    if (err) {
      console.error(err); // Imprime el error si ocurre.
      res.status(500).json({ error: 'Error al obtener las reservas' }); // Responde con un error si la consulta falla.
      return;
    }
    res.status(200).json(result); // Responde con los resultados de la consulta.
  });
});

// Actualizar una reserva
app.put('/update', (req, res) => {
  const { id_reserva, id_cliente, id_venta, fecha_reserva } = req.body; // Obtiene los datos del cuerpo de la solicitud.

  const query = `
    UPDATE reserva 
    SET id_cliente = ?, id_venta = ?, fecha_reserva = ?
    WHERE id_reserva = ?
  `;
  // Consulta SQL para actualizar una reserva existente.

  db.query(query, [id_cliente, id_venta, fecha_reserva, id_reserva], (err) => {
    if (err) {
      console.error(err); // Imprime el error si ocurre.
      res.status(500).json({ error: 'Error al actualizar la reserva' }); // Responde con un error si la consulta falla.
      return;
    }
    res.status(200).json({ success: true }); // Responde con éxito si la reserva se actualiza correctamente.
  });
});

// Eliminar una reserva
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params; // Obtiene el id de la reserva desde los parámetros de la URL.

  const query = `DELETE FROM reserva WHERE id_reserva = ?`;
  // Consulta SQL para eliminar una reserva según su id.

  db.query(query, [id], (err) => {
    if (err) {
      console.error(err); // Imprime el error si ocurre.
      res.status(500).json({ error: 'Error al eliminar la reserva' }); // Responde con un error si la consulta falla.
      return;
    }
    res.status(200).json({ success: true }); // Responde con éxito si la reserva se elimina correctamente.
  });
});

// Login de usuario
app.post("/login", (req, res) => {
    const { username, password } = req.body; // Obtiene el nombre de usuario y la contraseña del cuerpo de la solicitud.
    const query = 'SELECT * FROM usuario WHERE usuario = ? AND contraseña = ?';
    // Consulta SQL para verificar las credenciales del usuario.

    db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error(err); // Imprime el error si ocurre.
      res.status(500).send({ error: "Error en la consulta" }); // Responde con un error si la consulta falla.
    } else {
      if (result.length > 0) {
        res.send({ success: true }); // Si el usuario existe y las credenciales son correctas, responde con éxito.
      } else {
        res.send({ success: false, message: 'Usuario o contraseña incorrectos' }); // Si las credenciales son incorrectas, responde con un mensaje de error.
      }
    }
  });
});

// Obtener todas las ventas
app.get("/ventas", (req, res) => {
  db.query('SELECT * FROM venta', (err, result) => {
    if (err) {
      console.log(err); // Imprime el error si ocurre.
      res.status(500).send({ error: "Error al obtener las ventas" }); // Responde con un error si la consulta falla.
    } else {
      res.send(result); // Responde con los resultados de la consulta (todas las ventas).
    }
  });
});

// Iniciar el servidor en el puerto 3001
app.listen(3001, () => {
  console.log("Servidor corriendo en el puerto 3001"); // Imprime un mensaje en la consola cuando el servidor está en funcionamiento.
});
