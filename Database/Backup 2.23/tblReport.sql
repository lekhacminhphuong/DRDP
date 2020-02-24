-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: custsql-ipg106.eigbox.net
-- Generation Time: Feb 23, 2020 at 07:09 PM
-- Server version: 5.6.41-84.1-log
-- PHP Version: 7.0.33-0ubuntu0.16.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newdb_capstone2020`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblReport`
--

CREATE TABLE `tblReport` (
  `ReportID` int(6) UNSIGNED NOT NULL,
  `ReportName` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblReport`
--

INSERT INTO `tblReport` (`ReportID`, `ReportName`) VALUES
(1, 'PADD'),
(2, 'PAAT'),
(3, 'PATBI'),
(4, 'PAVA');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblReport`
--
ALTER TABLE `tblReport`
  ADD PRIMARY KEY (`ReportID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblReport`
--
ALTER TABLE `tblReport`
  MODIFY `ReportID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
