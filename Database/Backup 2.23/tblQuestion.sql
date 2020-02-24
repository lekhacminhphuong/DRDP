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
-- Table structure for table `tblQuestion`
--

CREATE TABLE `tblQuestion` (
  `QuestionID` int(10) UNSIGNED NOT NULL,
  `QuestionTypeID` int(11) UNSIGNED NOT NULL,
  `VersionID` int(11) UNSIGNED NOT NULL,
  `OrganizationID` int(11) UNSIGNED NOT NULL,
  `QuestionDesc` varchar(200) NOT NULL,
  `QuestionCode` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblQuestion`
--
ALTER TABLE `tblQuestion`
  ADD PRIMARY KEY (`QuestionID`),
  ADD KEY `fk_questiontypeid` (`QuestionTypeID`),
  ADD KEY `fk_versionid` (`VersionID`),
  ADD KEY `fk_organizationid` (`OrganizationID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblQuestion`
--
ALTER TABLE `tblQuestion`
  MODIFY `QuestionID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tblQuestion`
--
ALTER TABLE `tblQuestion`
  ADD CONSTRAINT `fk_organizationid` FOREIGN KEY (`OrganizationID`) REFERENCES `tblOrganization` (`OrganizationID`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_questiontypeid` FOREIGN KEY (`QuestionTypeID`) REFERENCES `tblQuestionType` (`QuestionTypeID`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_versionid` FOREIGN KEY (`VersionID`) REFERENCES `tblVersion` (`VersionID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
