-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 06-05-2025 a las 01:55:14
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gimnasio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Francisco Solís obtuvo bronce en el Torneo Panamericano y de Oceanía de Judo', 'Chile sumó su segunda presea en el certamen.', 'El nacional Francisco Solís conquistó la medalla de bronce de la categoría masculina +100 kilos en el Torneo Panamericano y de Oceanía de Judo, que se desarrolla en el Centro de Deportes de Contacto del Estadio Nacional.\r\n\r\nSolís derrotó con un ippon al dominicano José Nova Alcántara, compartiendo el tercer puesto con el cubano Jonathan Loynaz. El oro fue para el cubano Andy Granda y el brasileño Rafael Buzacarini se quedó con la plata.\r\n\r\nLa presea de Solís se sumó al bronce de Mary Dee Vargas en la competencia femenina -48 kilos, siendo los únicos podios nacionales en el certamen.', NULL),
(2, 'El brutal nocaut del peleador argentino Esteban Ribovics en la UFC que revolucionó las redes sociales', 'El luchador argentino se impuso ante Terrance McKinney y se convirtió en la sensación de las artes marciales mixtas. Sumó su triunfo número 13 como profesional.', 'El talento argentino en las artes marciales mixtas no para de crecer. Este sábado, el deporte nacional volvió a ser noticia después de la tremenda actuación de Esteban “El Gringo” Ribovics en el UFC de Saint Louis: noqueó a su rival de manera espectacular en solo 37 segundos de combate.\r\n\r\nLeé también: Es argentino, emigró a España con su hermano en 2001 y se convirtió en entrenador de un campeón de la UFC\r\n\r\nEl peleador argentino se midió ante el estadounidense Terrance McKinney y lo terminó con una impresionante patada que hizo estallar las redes sociales. El deportista salteño de 27 años tiene un récord de 13 victorias, con 12 finalizaciones, y una sola derrota en su carrera profesional.\r\n\r\nSu rendimiento este sábado sacudió al mundo de las MMA y se volvió viral en cuestión de segundos.', NULL),
(4, 'Prueba 2 Modificada', 'Prueba2 Modificada', 'prueba2 Modificada', NULL),
(7, 'Prueba con Imagen', 'Nueva Imagen', 'Nueva Imagen', 'hodycbdpfxtikl2fuscr'),
(6, 'prueba sin img', 'prueba sin img', 'prueba sin img', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'felipe', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'gabriel', '2f23fa3579f3f75175793649115c1b25');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
