import '../Estilos/Reserva.css'; // Importa los estilos de la página
import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect
import Axios from 'axios'; // Importa Axios para hacer peticiones HTTP
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas

function Reserva() {
  // Declaración de estados para los datos de la reserva y el formulario
  const [idReserva, setIdReserva] = useState(null);
  const [idCliente, setIdCliente] = useState('');
  const [idVenta, setIdVenta] = useState('');
  const [fechaReserva, setFechaReserva] = useState('');
  const [reservasList, setReservasList] = useState([]); // Lista de reservas
  const [editar, setEditar] = useState(false); // Estado para saber si estamos editando una reserva

  // useEffect para obtener las reservas al cargar el componente
  useEffect(() => {
    getReservas(); // Llama a la función que obtiene las reservas
  }, []);

  // Función para obtener todas las reservas desde el servidor
  const getReservas = () => {
    Axios.get('http://localhost:3001/reservas')
      .then((response) => {
        setReservasList(response.data); // Actualiza el estado con las reservas obtenidas
      })
      .catch((err) => console.error('Error al obtener reservas:', err)); // Maneja errores
  };

  // Función para agregar una nueva reserva
  const addReserva = () => {
    Axios.post('http://localhost:3001/create', {
      id_cliente: idCliente,
      id_venta: idVenta,
      fecha_reserva: fechaReserva,
    })
      .then(() => {
        getReservas(); // Vuelve a obtener las reservas después de agregar una nueva
        resetForm(); // Resetea el formulario
        Swal.fire('¡Reserva creada!', 'La reserva ha sido registrada con éxito.', 'success'); // Muestra una alerta de éxito
      })
      .catch((err) => {
        console.error(err);
        Swal.fire('Error', 'No se pudo crear la reserva.', 'error'); // Muestra una alerta de error si no se puede agregar
      });
  };

  // Función para actualizar una reserva existente
  const updateReserva = () => {
    Axios.put('http://localhost:3001/update', {
      id_reserva: idReserva,
      id_cliente: idCliente,
      id_venta: idVenta,
      fecha_reserva: fechaReserva,
    })
      .then(() => {
        getReservas(); // Vuelve a obtener las reservas después de actualizar
        resetForm(); // Resetea el formulario
        Swal.fire('¡Reserva actualizada!', 'Los datos de la reserva han sido actualizados.', 'success'); // Muestra una alerta de éxito
      })
      .catch((err) => {
        console.error(err);
        Swal.fire('Error', 'No se pudo actualizar la reserva.', 'error'); // Muestra una alerta de error si no se pudo actualizar
      });
  };

  // Función para eliminar una reserva
  const deleteReserva = (id) => {
    Swal.fire({
      title: '¿Estás seguro?', // Título de la alerta
      text: 'Esta acción no se puede deshacer.', // Texto de la alerta
      icon: 'warning', // Tipo de alerta
      showCancelButton: true, // Muestra botón para cancelar
      confirmButtonText: 'Sí, eliminar', // Texto del botón de confirmación
      cancelButtonText: 'Cancelar', // Texto del botón de cancelación
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/delete/${id}`) // Hace la petición de eliminación
          .then(() => {
            getReservas(); // Actualiza la lista de reservas
            Swal.fire('¡Eliminado!', 'La reserva ha sido eliminada.', 'success'); // Muestra una alerta de éxito
          })
          .catch((err) => {
            console.error(err);
            Swal.fire('Error', 'No se pudo eliminar la reserva.', 'error'); // Muestra una alerta de error si no se pudo eliminar
          });
      }
    });
  };

  // Función para resetear el formulario
  const resetForm = () => {
    setIdReserva(null);
    setIdCliente('');
    setIdVenta('');
    setFechaReserva('');
    setEditar(false); // Cambia el estado de editar a falso
  };

  // Función para cargar los datos de una reserva en el formulario para editarla
  const loadReserva = (reserva) => {
    setIdReserva(reserva.id_reserva);
    setIdCliente(reserva.id_cliente);
    setIdVenta(reserva.id_venta);
    setFechaReserva(reserva.fecha_reserva);
    setEditar(true); // Establece que estamos en modo de edición
  };

  return (
    <div className="container">
      <h2>Reservas de Citas</h2>
      <form>
        {/* Formulario de entrada para los detalles de la reserva */}
        <div className="form-group">
          <label>Cliente</label>
          <input
            type="text"
            className="form-control"
            value={idCliente}
            onChange={(e) => setIdCliente(e.target.value)} // Actualiza el estado de idCliente
          />
        </div>
        <div className="form-group">
          <label>Venta</label>
          <input
            type="text"
            className="form-control"
            value={idVenta}
            onChange={(e) => setIdVenta(e.target.value)} // Actualiza el estado de idVenta
          />
        </div>
        <div className="form-group">
          <label>Fecha de Reserva</label>
          <input
            type="date"
            className="form-control"
            value={fechaReserva}
            onChange={(e) => setFechaReserva(e.target.value)} // Actualiza el estado de fechaReserva
          />
        </div>
        {/* Botón para agregar o actualizar la reserva */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={editar ? updateReserva : addReserva} // Llama a la función adecuada según el estado de 'editar'
        >
          {editar ? 'Actualizar' : 'Registrar'}
        </button>
        {/* Botón para cancelar */}
        <button type="button" className="btn btn-secondary" onClick={resetForm}>
          Cancelar
        </button>
      </form>
      {/* Tabla que muestra las reservas */}
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Modelo</th>
            <th>Color</th>
            <th>Costo</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservasList.map((reserva) => (
            <tr key={reserva.id_reserva}>
              <td>{reserva.id_reserva}</td>
              <td>{reserva.cliente}</td>
              <td>{reserva.modelo}</td>
              <td>{reserva.color}</td>
              <td>{reserva.costo_total}</td>
              <td>{reserva.fecha_reserva}</td>
              <td>
                {/* Botones de editar y eliminar */}
                <button className="btn btn-info" onClick={() => loadReserva(reserva)}>
                  Editar
                </button>
                <button className="btn btn-danger" onClick={() => deleteReserva(reserva.id_reserva)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reserva;
