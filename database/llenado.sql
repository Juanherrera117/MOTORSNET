-- -----------------------------------------------------
-- LLENADO 
-- -----------------------------------------------------

-- Insertar usuarios
INSERT INTO usuario(usuario, contraseña) VALUES 
('usuario1', 'contraseña1'),
('usuario2', 'contraseña2'),
('usuario3', 'contraseña3'),
('usuario4', 'contraseña4'),
('usuario5', 'contraseña5'),
('usuario6', 'contraseña6'),
('usuario7', 'contraseña7'),
('usuario8', 'contraseña8'),
('usuario9', 'contraseña9'),
('usuario10', 'contraseña10');

-- Insertar modelos de automóviles
INSERT INTO modelo(id_modelo, nombre, precio_base) VALUES 
(null, 'Toyota Corolla', 800000),
(null, 'Honda Civic', 850000),
(null, 'Ford Focus', 780000),
(null, 'Chevrolet Spark', 600000),
(null, 'BMW X5', 1200000),
(null, 'Audi A4', 1000000),
(null, 'Mercedes-Benz Clase C', 1100000),
(null, 'Nissan Altima', 700000),
(null, 'Hyundai Elantra', 650000),
(null, 'Mazda 3', 750000);

-- Insertar colores de automóviles
INSERT INTO color(id_color, descripcion) VALUES
(null, 'Rojo'),
(null, 'Negro'),
(null, 'Blanco'),
(null, 'Azul'),
(null, 'Gris'),
(null, 'Plata'),
(null, 'Verde'),
(null, 'Amarillo'),
(null, 'Naranja'),
(null, 'Vino');

-- Insertar características adicionales de los autos
INSERT INTO caracteristica(id_caracteristica, descripcion, costo_adicional) VALUES
(null, 'Aire acondicionado', 20000),
(null, 'Sistema de navegación', 30000),
(null, 'Cámara de reversa', 15000),
(null, 'Asientos de cuero', 25000),
(null, 'Sistema de sonido premium', 35000),
(null, 'Techo solar', 45000),
(null, 'Asistencia en frenado', 20000),
(null, 'Sensores de estacionamiento', 12000),
(null, 'Control de velocidad adaptativo', 28000),
(null, 'Sistema de monitoreo de presión de llantas', 8000);

-- Insertar ventas realizadas
INSERT INTO venta(id_venta, id_modelo, id_color, id_caracteristicas, fecha_venta, cantidad, costo_total) 
VALUES 
(NULL, 1, 1, 1, '2024-07-10', 1, 820000),
(NULL, 2, 2, 2, '2024-07-12', 1, 880000),
(NULL, 3, 3, 3, '2024-07-15', 1, 790000),
(NULL, 4, 4, 4, '2024-07-18', 2, 1200000),
(NULL, 5, 5, 5, '2024-07-20', 1, 1245000),
(NULL, 6, 6, 6, '2024-07-22', 1, 1030000),
(NULL, 7, 7, 7, '2024-07-25', 1, 1080000),
(NULL, 8, 8, 8, '2024-07-27', 1, 740000),
(NULL, 9, 9, 9, '2024-07-30', 1, 720000),
(NULL, 10, 10, 10, '2024-08-02', 1, 770000);

-- Insertar clientes
INSERT INTO cliente(id_cliente, nombre, direccion, telefono) VALUES
(null, 'Juan Pérez', 'Calle 123, Bogotá', '3001234567'),
(null, 'Ana Martínez', 'Carrera 45, Medellín', '3107654321'),
(null, 'Carlos Gómez', 'Avenida 10, Cali', '3209876543'),
(null, 'María Rodríguez', 'Calle 15, Quito', '3301234567'),
(null, 'Luis González', 'Calle 20, Lima', '3407654321'),
(null, 'Sofía López', 'Carrera 25, Bogotá', '3509876543'),
(null, 'Pedro Torres', 'Avenida 30, Medellín', '3601234567'),
(null, 'Laura Pérez', 'Calle 35, Cali', '3707654321'),
(null, 'Mario Ramírez', 'Calle 40, Quito', '3801234567'),
(null, 'Gabriela Martínez', 'Carrera 45, Lima', '3907654321');

-- Insertar tipos de financiamiento
INSERT INTO financiamiento(id_financiamiento, descripcion, tasa_interes) VALUES
(null, 'Crédito estándar', 0.05),
(null, 'Crédito con tasa especial', 0.03),
(null, 'Leasing con opción de compra', 0.04),
(null, 'Crédito automotriz con seguro', 0.06),
(null, 'Crédito a 48 meses', 0.05),
(null, 'Crédito a 24 meses', 0.04),
(null, 'Financiamiento con enganche del 20%', 0.03),
(null, 'Crédito sin intereses por 12 meses', 0.00),
(null, 'Crédito con tasa fija', 0.05),
(null, 'Crédito rápido', 0.07);

-- Insertar reservas realizadas por los clientes
INSERT INTO reserva(id_reserva, id_cliente, id_venta, fecha_reserva) 
VALUES 
(NULL, 1, 1, '2024-07-05'),
(NULL, 2, 2, '2024-07-08'),
(NULL, 3, 3, '2024-07-12'),
(NULL, 4, 4, '2024-07-14'),
(NULL, 5, 5, '2024-07-18'),
(NULL, 6, 6, '2024-07-20'),
(NULL, 7, 7, '2024-07-22'),
(NULL, 8, 8, '2024-07-25'),
(NULL, 9, 9, '2024-07-27'),
(NULL, 10, 10, '2024-08-01');
