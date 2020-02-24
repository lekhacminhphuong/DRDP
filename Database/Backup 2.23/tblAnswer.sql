-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: custsql-ipg106.eigbox.net
-- Generation Time: Feb 23, 2020 at 07:10 PM
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
-- Table structure for table `tblAnswer`
--

CREATE TABLE `tblAnswer` (
  `AnswerID` int(10) UNSIGNED NOT NULL,
  `QuestionID` int(11) UNSIGNED NOT NULL,
  `ReportID` int(11) UNSIGNED NOT NULL,
  `YearID` int(11) UNSIGNED NOT NULL,
  `JurisdictionID` int(11) UNSIGNED NOT NULL,
  `AnswerValue` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblAnswer`
--
ALTER TABLE `tblAnswer`
  ADD PRIMARY KEY (`AnswerID`),
  ADD KEY `fk_questionid` (`QuestionID`),
  ADD KEY `fk_reportid` (`ReportID`),
  ADD KEY `fk_jurisdictionid` (`JurisdictionID`),
  ADD KEY `fk_yearid` (`YearID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblAnswer`
--
ALTER TABLE `tblAnswer`
  MODIFY `AnswerID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblAnswer`
--
ALTER TABLE `tblAnswer`
  ADD CONSTRAINT `fk_jurisdictionid` FOREIGN KEY (`JurisdictionID`) REFERENCES `tblJurisdiction` (`JurisdictionID`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_questionid` FOREIGN KEY (`QuestionID`) REFERENCES `tblQuestion` (`QuestionID`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_reportid` FOREIGN KEY (`ReportID`) REFERENCES `tblReport` (`ReportID`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_yearid` FOREIGN KEY (`YearID`) REFERENCES `tblYear` (`YearID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
