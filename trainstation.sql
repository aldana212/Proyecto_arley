-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2022 a las 01:58:26
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trainstation`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id_reservas` int(11) NOT NULL,
  `cupos` int(30) NOT NULL,
  `fecha_salidad` datetime NOT NULL DEFAULT current_timestamp(),
  `cedula2` int(11) DEFAULT NULL,
  `codigo_servicio2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id_reservas`, `cupos`, `fecha_salidad`, `cedula2`, `codigo_servicio2`) VALUES
(162, 5, '2022-12-14 16:13:50', 1094884731, 95),
(163, 5, '2022-12-14 16:13:59', 1094884731, 95),
(164, 40, '2022-12-14 16:15:05', 1094884731, 94),
(165, 5, '2022-12-14 16:15:17', 1094884731, 94),
(223, 5, '2022-12-14 19:53:51', 1094884731, 94),
(224, 30, '2022-12-14 19:55:03', 1094884731, 93);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `descripicion` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `descripicion`) VALUES
(1, 'administrador'),
(2, 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trenes`
--

CREATE TABLE `trenes` (
  `codigo_servicio` int(11) NOT NULL,
  `aforo` int(30) NOT NULL,
  `hora_salidad` time NOT NULL,
  `origen` varchar(30) NOT NULL,
  `destino` varchar(30) NOT NULL,
  `precio` decimal(10,3) NOT NULL,
  `url_image` varchar(300) NOT NULL,
  `CloudinaryId` varchar(100) NOT NULL,
  `estado` varchar(15) NOT NULL,
  `numero_tren` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trenes`
--

INSERT INTO `trenes` (`codigo_servicio`, `aforo`, `hora_salidad`, `origen`, `destino`, `precio`, `url_image`, `CloudinaryId`, `estado`, `numero_tren`) VALUES
(93, 30, '10:53:00', 'pereira', 'medellin', '17.000', 'http://res.cloudinary.com/dhvwprrzn/image/upload/v1671036880/Online-trains31/v7rathjwvsbpmv5kg9a3.jpg', 'Online-trains31/v7rathjwvsbpmv5kg9a3', 'activo', 15),
(94, 50, '08:56:00', 'armenia', 'medellin', '15.500', 'http://res.cloudinary.com/dhvwprrzn/image/upload/v1670853236/Online-trains31/ttidmmo8thwbok0dirpe.jpg', 'Online-trains31/ttidmmo8thwbok0dirpe', 'activo', 122),
(95, 10, '08:58:00', 'sass', 'medellin', '15.000', 'http://res.cloudinary.com/dhvwprrzn/image/upload/v1670853259/Online-trains31/kkoxnfmyukerjouudub4.jpg', 'Online-trains31/kkoxnfmyukerjouudub4', 'activo', 122),
(96, 70, '23:53:00', 'cali', 'medellin', '15.000', 'http://res.cloudinary.com/dhvwprrzn/image/upload/v1670907004/Online-trains31/ec0grx8fd4krht43qnyv.jpg', 'Online-trains31/ec0grx8fd4krht43qnyv', 'activo', 1),
(97, 12, '01:13:00', 'cali', 'medellin', '15.000', 'http://res.cloudinary.com/dhvwprrzn/image/upload/v1670998323/Online-trains31/xzk2xes5lfvl4ka1i4sw.jpg', 'Online-trains31/xzk2xes5lfvl4ka1i4sw', 'activo', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `cedula` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `mail` varchar(30) DEFAULT NULL,
  `contraseña` varchar(300) DEFAULT NULL,
  `url_image` varchar(3000) NOT NULL DEFAULT 'https://res.cloudinary.com/dhvwprrzn/image/upload/v1670625716/Online-trains31/noprofil_dwbknx.jpg',
  `CloudinaryId` varchar(300) NOT NULL,
  `id_rol1` int(11) DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`cedula`, `name`, `mail`, `contraseña`, `url_image`, `CloudinaryId`, `id_rol1`) VALUES
(1234, 'daniel aldana', 'daniel212@gmail.com', '$2a$10$DE1JjgN.UwjNQ//9aoKQmOfXrMj7urpRpEMjtysoSluftYuCk2bge', 'http://res.cloudinary.com/dhvwprrzn/image/upload/v1671048757/Online-trains31/ige8qlyt2zj8mgos1c53.jpg', 'Online-trains31/ige8qlyt2zj8mgos1c53', 1),
(12345, 'nano', 'nano98@gmail.com', '$2a$10$DaulhL21u..c/3/VzDkkjObnk6pD06I17j6BHCXG0PJh6DwjXPp/C', 'http://res.cloudinary.com/dhvwprrzn/image/upload/v1671048806/Online-trains31/amirdev6akyrlubvvcnu.jpg', 'Online-trains31/amirdev6akyrlubvvcnu', 2),
(1094884731, 'ana  ', 'anamaria@gmail.com', '$2a$10$mBydLiP/qHE0oGPKMwTwC.rOyAMhiBXhH8vsAew4Z5vl6y5E8IjNy', 'http://res.cloudinary.com/dhvwprrzn/image/upload/v1671048775/Online-trains31/ja3o9gnexge9srg32zuk.jpg', 'Online-trains31/ja3o9gnexge9srg32zuk', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_trenes`
--

CREATE TABLE `usuario_trenes` (
  `cedula1` int(11) NOT NULL,
  `codigo_servicio1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id_reservas`),
  ADD KEY `codigo_servicio2` (`codigo_servicio2`),
  ADD KEY `cedula2` (`cedula2`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `trenes`
--
ALTER TABLE `trenes`
  ADD PRIMARY KEY (`codigo_servicio`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`cedula`),
  ADD KEY `id_rol1` (`id_rol1`);

--
-- Indices de la tabla `usuario_trenes`
--
ALTER TABLE `usuario_trenes`
  ADD KEY `cedula1` (`cedula1`),
  ADD KEY `codigo_servicio1` (`codigo_servicio1`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id_reservas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=225;

--
-- AUTO_INCREMENT de la tabla `trenes`
--
ALTER TABLE `trenes`
  MODIFY `codigo_servicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`codigo_servicio2`) REFERENCES `trenes` (`codigo_servicio`),
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`cedula2`) REFERENCES `usuario` (`cedula`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_rol1`) REFERENCES `rol` (`id_rol`);

--
-- Filtros para la tabla `usuario_trenes`
--
ALTER TABLE `usuario_trenes`
  ADD CONSTRAINT `usuario_trenes_ibfk_1` FOREIGN KEY (`cedula1`) REFERENCES `usuario` (`cedula`),
  ADD CONSTRAINT `usuario_trenes_ibfk_2` FOREIGN KEY (`codigo_servicio1`) REFERENCES `trenes` (`codigo_servicio`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
