-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: custsql-ipg106.eigbox.net
-- Generation Time: Feb 23, 2020 at 07:16 PM
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
-- Table structure for table `tblAnswer`
--

CREATE TABLE `tblAnswer` (
  `AnswerID` int(10) UNSIGNED NOT NULL,
  `QuestionID` int(10) UNSIGNED NOT NULL,
  `ReportID` int(6) UNSIGNED NOT NULL,
  `YearID` int(6) UNSIGNED NOT NULL,
  `JurisdictionID` int(6) UNSIGNED NOT NULL,
  `AnswerValue` int(6) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(1, 'Alabama'),
(2, 'Alaska'),
(3, 'American Samoa'),
(4, 'Arizona'),
(5, 'Arkansas'),
(6, 'California'),
(7, 'Colorado'),
(8, 'Connecticut'),
(9, 'Delaware'),
(10, 'District of Columbia'),
(11, 'Florida'),
(12, 'Georgia'),
(13, 'Guam'),
(14, 'Hawaii'),
(15, 'Idaho'),
(16, 'Illinois'),
(17, 'Indiana'),
(18, 'Iowa'),
(19, 'Kansas'),
(20, 'Kentucky'),
(21, 'Louisiana'),
(22, 'Maine'),
(23, 'Maryland'),
(24, 'Massachusetts'),
(25, 'Michigan'),
(26, 'Minnesota'),
(27, 'Minor Outlying Islands'),
(28, 'Mississippi'),
(29, 'Missouri'),
(30, 'Montana'),
(31, 'Nebraska'),
(32, 'Nevada'),
(33, 'New Hampshire'),
(34, 'New Jersey'),
(35, 'New Mexico'),
(36, 'New York'),
(37, 'North Carolina'),
(38, 'North Dakota'),
(39, 'Northern Mariana Islands'),
(40, 'Ohio'),
(41, 'Oklahoma'),
(42, 'Oregon'),
(43, 'Pennsylvania'),
(44, 'Puerto Rico'),
(45, 'Rhode Island'),
(46, 'South Carolina'),
(47, 'South Dakota'),
(48, 'Tennessee'),
(49, 'Texas'),
(50, 'U.S. Virgin Islands'),
(51, 'Utah'),
(52, 'Vermont'),
(53, 'Virginia'),
(54, 'Washington'),
(55, 'West Virginia'),
(56, 'Wisconsin'),
(57, 'Wyoming');

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
  `QuestionTypeValue` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblQuestionType`
--

INSERT INTO `tblQuestionType` (`QuestionTypeID`, `QuestionTypeValue`) VALUES
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
-- Table structure for table `tblVersion`
--

CREATE TABLE `tblVersion` (
  `VersionID` int(9) NOT NULL,
  `AnswerID` int(9) UNSIGNED NOT NULL,
  `OrganizationID` int(6) UNSIGNED NOT NULL,
  `VersionName` varchar(35) NOT NULL,
  `VersionDesc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(1, 2020),
(2, 2021),
(3, 2022),
(4, 2024),
(5, 2025),
(6, 2026),
(7, 2027),
(8, 2028),
(9, 2029),
(10, 2030);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblAnswer`
--
ALTER TABLE `tblAnswer`
  ADD PRIMARY KEY (`AnswerID`),
  ADD UNIQUE KEY `QuestionID` (`QuestionID`),
  ADD UNIQUE KEY `ReportID` (`ReportID`),
  ADD UNIQUE KEY `YearID` (`YearID`),
  ADD UNIQUE KEY `JurisdictionID` (`JurisdictionID`);

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
-- Indexes for table `tblVersion`
--
ALTER TABLE `tblVersion`
  ADD PRIMARY KEY (`VersionID`),
  ADD UNIQUE KEY `AnswerID` (`AnswerID`),
  ADD UNIQUE KEY `OrganizationID` (`OrganizationID`);

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
  MODIFY `JurisdictionID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=173;

--
-- AUTO_INCREMENT for table `tblOrganization`
--
ALTER TABLE `tblOrganization`
  MODIFY `OrganizationID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tblQuestion`
--
ALTER TABLE `tblQuestion`
  MODIFY `QuestionID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblQuestionType`
--
ALTER TABLE `tblQuestionType`
  MODIFY `QuestionTypeID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tblReport`
--
ALTER TABLE `tblReport`
  MODIFY `ReportID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tblYear`
--
ALTER TABLE `tblYear`
  MODIFY `YearID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblAnswer`
--
ALTER TABLE `tblAnswer`
  ADD CONSTRAINT `tblAnswer_ibfk_1` FOREIGN KEY (`QuestionID`) REFERENCES `tblQuestion` (`QuestionID`),
  ADD CONSTRAINT `tblAnswer_ibfk_2` FOREIGN KEY (`ReportID`) REFERENCES `tblReport` (`ReportID`),
  ADD CONSTRAINT `tblAnswer_ibfk_3` FOREIGN KEY (`YearID`) REFERENCES `tblYear` (`YearID`),
  ADD CONSTRAINT `tblAnswer_ibfk_4` FOREIGN KEY (`JurisdictionID`) REFERENCES `tblJurisdiction` (`JurisdictionID`);

--
-- Constraints for table `tblQuestion`
--
ALTER TABLE `tblQuestion`
  ADD CONSTRAINT `fk_questiontypeid` FOREIGN KEY (`QuestionTypeID`) REFERENCES `tblQuestionType` (`QuestionTypeID`) ON DELETE CASCADE;

--
-- Constraints for table `tblVersion`
--
ALTER TABLE `tblVersion`
  ADD CONSTRAINT `tblVersion_ibfk_1` FOREIGN KEY (`AnswerID`) REFERENCES `tblAnswer` (`AnswerID`),
  ADD CONSTRAINT `tblVersion_ibfk_2` FOREIGN KEY (`OrganizationID`) REFERENCES `tblOrganization` (`OrganizationID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
