-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: custsql-ipg106.eigbox.net
-- Generation Time: Feb 25, 2020 at 12:11 PM
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
-- Database: `beck_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `Answer`
--

CREATE TABLE `Answer` (
  `AnswerID` int(11) NOT NULL,
  `QuestionID` int(11) NOT NULL,
  `ReportInstanceID` int(11) NOT NULL,
  `IntAnswerValue` int(10) NOT NULL,
  `CharAnswerValue` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Jurisdiction`
--

CREATE TABLE `Jurisdiction` (
  `JurisdictionID` int(11) NOT NULL,
  `JurisdictionName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Organization`
--

CREATE TABLE `Organization` (
  `OrganizationID` int(11) NOT NULL,
  `OrganizationName` varchar(35) NOT NULL,
  `OrganizationDesc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Question`
--

CREATE TABLE `Question` (
  `QuestionID` int(11) NOT NULL,
  `ReportID` int(11) NOT NULL,
  `QuestionCode` varchar(35) NOT NULL,
  `QuestionDesc` varchar(100) NOT NULL,
  `QuestionType` enum('NUMBER','TEXT') NOT NULL DEFAULT 'TEXT'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Report`
--

CREATE TABLE `Report` (
  `ReportID` int(11) NOT NULL,
  `ReportParentID` int(11) NOT NULL,
  `ReportName` varchar(35) NOT NULL,
  `ReportDesc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ReportInstance`
--

CREATE TABLE `ReportInstance` (
  `ReportInstanceID` int(11) NOT NULL,
  `ReportID` int(11) NOT NULL,
  `JurisdictionID` int(11) NOT NULL,
  `OrganizationID` int(11) NOT NULL,
  `ReportInstanceYear` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Answer`
--
ALTER TABLE `Answer`
  ADD PRIMARY KEY (`AnswerID`),
  ADD UNIQUE KEY `QuestionID` (`QuestionID`),
  ADD UNIQUE KEY `ReportInstanceID` (`ReportInstanceID`);

--
-- Indexes for table `Jurisdiction`
--
ALTER TABLE `Jurisdiction`
  ADD PRIMARY KEY (`JurisdictionID`);

--
-- Indexes for table `Organization`
--
ALTER TABLE `Organization`
  ADD PRIMARY KEY (`OrganizationID`);

--
-- Indexes for table `Question`
--
ALTER TABLE `Question`
  ADD PRIMARY KEY (`QuestionID`),
  ADD UNIQUE KEY `ReportID` (`ReportID`);

--
-- Indexes for table `Report`
--
ALTER TABLE `Report`
  ADD PRIMARY KEY (`ReportID`),
  ADD UNIQUE KEY `ReportParentID` (`ReportParentID`);

--
-- Indexes for table `ReportInstance`
--
ALTER TABLE `ReportInstance`
  ADD PRIMARY KEY (`ReportInstanceID`),
  ADD UNIQUE KEY `ReportID` (`ReportID`),
  ADD UNIQUE KEY `JurisdictionID` (`JurisdictionID`),
  ADD UNIQUE KEY `OrganizationID` (`OrganizationID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Answer`
--
ALTER TABLE `Answer`
  ADD CONSTRAINT `Answer_ibfk_1` FOREIGN KEY (`QuestionID`) REFERENCES `Question` (`QuestionID`),
  ADD CONSTRAINT `Answer_ibfk_2` FOREIGN KEY (`ReportInstanceID`) REFERENCES `ReportInstance` (`ReportInstanceID`);

--
-- Constraints for table `Question`
--
ALTER TABLE `Question`
  ADD CONSTRAINT `Question_ibfk_1` FOREIGN KEY (`ReportID`) REFERENCES `Report` (`ReportID`);

--
-- Constraints for table `Report`
--
ALTER TABLE `Report`
  ADD CONSTRAINT `Report_ibfk_1` FOREIGN KEY (`ReportParentID`) REFERENCES `Report` (`ReportID`);

--
-- Constraints for table `ReportInstance`
--
ALTER TABLE `ReportInstance`
  ADD CONSTRAINT `ReportInstance_ibfk_1` FOREIGN KEY (`ReportID`) REFERENCES `Report` (`ReportID`),
  ADD CONSTRAINT `ReportInstance_ibfk_2` FOREIGN KEY (`JurisdictionID`) REFERENCES `Jurisdiction` (`JurisdictionID`),
  ADD CONSTRAINT `ReportInstance_ibfk_3` FOREIGN KEY (`OrganizationID`) REFERENCES `Organization` (`OrganizationID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
