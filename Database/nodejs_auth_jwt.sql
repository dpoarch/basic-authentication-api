-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2022 at 02:03 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_auth_jwt`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_login` datetime NOT NULL,
  `isActive` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `last_login`, `isActive`, `created_at`) VALUES
(1, 'johnsmith', '$2a$10$6PWAmibUcQlDVdix0rHIq.MV4gL.Q77gxZv251oh5..dXqFymgNla', '2022-03-09 20:48:45', 0, '2022-03-09 20:28:14'),
(2, 'admin', '$2a$10$LVjAy5ynXk9lkzvXOCkmYOgXZJg1Gp5JE08R2w6GygbEQf.kdpvVS', '0000-00-00 00:00:00', 0, '2022-03-09 20:53:14'),
(3, 'testuser', '$2a$10$iV5aWXm0n/cqAQGLbSwyEu.Dt.zBSxFaQRUsQkaNMccdfj5Dk.3yi', '0000-00-00 00:00:00', 0, '2022-03-09 20:54:17'),
(4, 'testuser00', '$2a$10$j3ua4huZHGjB0wXREgdz1uvMR.WMJRyjSxDWVXUXUP04GMA3ZtUv.', '0000-00-00 00:00:00', 0, '2022-03-09 20:54:28'),
(5, 'testuser01', '$2a$10$uGTeWziIiOWaWjwvkhAYbeau888K5sLKIEznzQL.BoPrNLmsaC3qa', '0000-00-00 00:00:00', 0, '2022-03-09 20:54:31'),
(6, 'testuser02', '$2a$10$u3.s4Kd3ccbg2lg6sog5bOhLZF9ZXSollqPLzZgsNoOeVMB.tnzjK', '0000-00-00 00:00:00', 0, '2022-03-09 20:54:34'),
(7, 'testuser03', '$2a$10$z81mimhtODQvfhbhTEN10u2LH1DGRl6L.zn2scDsYg5XEoqRnKrSi', '0000-00-00 00:00:00', 0, '2022-03-09 20:54:37'),
(8, 'testuser04', '$2a$10$9YSwSzQpE..mjDv/638hge9fSjGMmSyqV6ZQliDGh8F7lo.1YSnEu', '0000-00-00 00:00:00', 0, '2022-03-09 20:54:40'),
(9, 'testuser05', '$2a$10$e27MrY/bsA0kd3l6hBgEi.J6VgoMRkcLfeDdQPvaG1Tgpf9gxoiY2', '0000-00-00 00:00:00', 0, '2022-03-09 20:54:43'),
(10, 'testuser06', '$2a$10$ajkHbgVIimncr3ihw.XC5eXyBvYoMJlGzkD3PIn/bz7.h8RrRX4yy', '0000-00-00 00:00:00', 0, '2022-03-09 20:57:09'),
(11, 'testuser07', '$2a$10$QSD6hAiJ8hNKckejpSuQ/ec6oOislileFTQooIywp4O.KWtQ41PHm', '2022-03-09 20:58:55', 1, '2022-03-09 20:57:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
