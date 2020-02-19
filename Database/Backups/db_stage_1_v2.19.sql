-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: custsql-ipg106.eigbox.net
-- Generation Time: Feb 19, 2020 at 03:49 PM
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
-- Database: `db_stage_1`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblJurisdiction`
--

CREATE TABLE `tblJurisdiction` (
  `JurisdictionID` int(6) UNSIGNED NOT NULL,
  `JurisdictionName` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblJurisdiction`
--

INSERT INTO `tblJurisdiction` (`JurisdictionID`, `JurisdictionName`) VALUES
(2, 'Alabama'),
(3, 'Alaska'),
(4, 'American Samoa'),
(5, 'Arizona'),
(6, 'Arkansas'),
(7, 'California'),
(8, 'Colorado'),
(9, 'Connecticut'),
(10, 'Delaware'),
(11, 'District of Columbia'),
(12, 'Florida'),
(13, 'Georgia'),
(14, 'Guam'),
(15, 'Hawaii'),
(16, 'Idaho'),
(17, 'Illinois'),
(18, 'Indiana'),
(19, 'Iowa'),
(20, 'Kansas'),
(21, 'Kentucky'),
(22, 'Louisiana'),
(23, 'Maine'),
(24, 'Maryland'),
(25, 'Massachusetts'),
(26, 'Michigan'),
(27, 'Minnesota'),
(28, 'Minor Outlying Islands'),
(29, 'Mississippi'),
(30, 'Missouri'),
(31, 'Montana'),
(32, 'Nebraska'),
(33, 'Nevada'),
(34, 'New Hampshire'),
(35, 'New Jersey'),
(36, 'New Mexico'),
(37, 'New York'),
(38, 'North Carolina'),
(39, 'North Dakota'),
(40, 'Northern Mariana Islands'),
(41, 'Ohio'),
(42, 'Oklahoma'),
(43, 'Oregon'),
(44, 'Pennsylvania'),
(45, 'Puerto Rico'),
(46, 'Rhode Island'),
(47, 'South Carolina'),
(48, 'South Dakota'),
(49, 'Tennessee'),
(50, 'Texas'),
(51, 'U.S. Virgin Islands'),
(52, 'Utah'),
(53, 'Vermont'),
(54, 'Virginia'),
(55, 'Washington'),
(56, 'West Virginia'),
(57, 'Wisconsin'),
(58, 'Wyoming');

-- --------------------------------------------------------

--
-- Table structure for table `tblOrganization`
--

CREATE TABLE `tblOrganization` (
  `OrganizationID` int(6) UNSIGNED NOT NULL,
  `OrganizationName` varchar(35) NOT NULL,
  `OrganizationDesc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblOrganization`
--

INSERT INTO `tblOrganization` (`OrganizationID`, `OrganizationName`, `OrganizationDesc`) VALUES
(1, 'National Disability Rights Network', '');

-- --------------------------------------------------------

--
-- Table structure for table `tblQuestion`
--

CREATE TABLE `tblQuestion` (
  `QuestionID` int(10) UNSIGNED NOT NULL,
  `QuestionTypeID` int(11) UNSIGNED NOT NULL,
  `QuestionDesc` varchar(200) NOT NULL,
  `QuestionCode` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblQuestionType`
--

CREATE TABLE `tblQuestionType` (
  `QuestionTypeID` int(6) UNSIGNED NOT NULL,
  `QuestionTypeName` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblQuestionType`
--

INSERT INTO `tblQuestionType` (`QuestionTypeID`, `QuestionTypeName`) VALUES
(1, 'Integer'),
(2, 'Character');

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

-- --------------------------------------------------------

--
-- Table structure for table `tblYear`
--

CREATE TABLE `tblYear` (
  `YearID` int(6) UNSIGNED NOT NULL,
  `Year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblYear`
--

INSERT INTO `tblYear` (`YearID`, `Year`) VALUES
(8, 2020),
(9, 2021),
(10, 2022),
(11, 2024),
(12, 2025),
(13, 2026),
(14, 2027),
(15, 2028),
(16, 2029),
(17, 2030);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblJurisdiction`
--
ALTER TABLE `tblJurisdiction`
  ADD PRIMARY KEY (`JurisdictionID`);

--
-- Indexes for table `tblOrganization`
--
ALTER TABLE `tblOrganization`
  ADD PRIMARY KEY (`OrganizationID`);

--
-- Indexes for table `tblQuestion`
--
ALTER TABLE `tblQuestion`
  ADD PRIMARY KEY (`QuestionID`),
  ADD KEY `fk_questiontypeid` (`QuestionTypeID`);

--
-- Indexes for table `tblQuestionType`
--
ALTER TABLE `tblQuestionType`
  ADD PRIMARY KEY (`QuestionTypeID`);

--
-- Indexes for table `tblReport`
--
ALTER TABLE `tblReport`
  ADD PRIMARY KEY (`ReportID`);

--
-- Indexes for table `tblYear`
--
ALTER TABLE `tblYear`
  ADD PRIMARY KEY (`YearID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblJurisdiction`
--
ALTER TABLE `tblJurisdiction`
  MODIFY `JurisdictionID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `tblOrganization`
--
ALTER TABLE `tblOrganization`
  MODIFY `OrganizationID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tblQuestion`
--
ALTER TABLE `tblQuestion`
  MODIFY `QuestionID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblQuestionType`
--
ALTER TABLE `tblQuestionType`
  MODIFY `QuestionTypeID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tblReport`
--
ALTER TABLE `tblReport`
  MODIFY `ReportID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tblYear`
--
ALTER TABLE `tblYear`
  MODIFY `YearID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblQuestion`
--
ALTER TABLE `tblQuestion`
  ADD CONSTRAINT `fk_questiontypeid` FOREIGN KEY (`QuestionTypeID`) REFERENCES `tblQuestionType` (`QuestionTypeID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
