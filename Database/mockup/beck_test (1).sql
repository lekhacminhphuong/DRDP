-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: custsql-ipg106.eigbox.net
-- Generation Time: Feb 25, 2020 at 11:44 PM
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
  `IntAnswerValue` int(10) DEFAULT NULL,
  `CharAnswerValue` varchar(35) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Answer`
--

INSERT INTO `Answer` (`AnswerID`, `QuestionID`, `ReportInstanceID`, `IntAnswerValue`, `CharAnswerValue`) VALUES
(1, 1, 1, 8, NULL),
(2, 2, 1, 13, NULL),
(3, 3, 1, 21, NULL),
(4, 4, 1, 0, NULL),
(5, 5, 1, 13, NULL),
(6, 1, 2, 10, NULL),
(7, 2, 2, 21, NULL),
(8, 3, 2, 31, NULL),
(9, 4, 2, 0, NULL),
(10, 5, 2, 10, NULL),
(11, 1, 3, 3, NULL),
(12, 2, 3, 10, NULL),
(13, 3, 3, 13, NULL),
(14, 4, 3, 0, NULL),
(15, 5, 3, 6, NULL),
(16, 1, 4, 4, NULL),
(17, 2, 4, 24, NULL),
(18, 3, 4, 28, NULL),
(19, 4, 4, 0, NULL),
(20, 5, 4, 3, NULL),
(21, 1, 5, 4, NULL),
(22, 2, 5, 43, NULL),
(23, 3, 5, 47, NULL),
(24, 4, 5, 0, NULL),
(25, 5, 5, 13, NULL),
(26, 1, 6, 13, NULL),
(27, 2, 6, 31, NULL),
(28, 3, 6, 44, NULL),
(29, 4, 6, 0, NULL),
(30, 5, 6, 15, NULL),
(31, 1, 7, 13, NULL),
(32, 2, 7, 30, NULL),
(34, 3, 7, 43, NULL),
(35, 4, 7, 0, NULL),
(36, 5, 7, 6, NULL),
(37, 1, 8, 7, NULL),
(38, 2, 8, 12, NULL),
(39, 3, 8, 19, NULL),
(40, 4, 8, 0, NULL),
(41, 5, 8, 7, NULL),
(42, 1, 11, 29, NULL),
(43, 2, 11, 37, NULL),
(44, 3, 11, 66, NULL),
(45, 4, 11, 2, NULL),
(46, 5, 11, 17, NULL),
(47, 1, 12, 0, NULL),
(48, 2, 12, 35, NULL),
(49, 3, 12, 35, NULL),
(50, 4, 12, 1, NULL),
(51, 5, 12, 10, NULL),
(52, 1, 13, 10, NULL),
(53, 2, 13, 13, NULL),
(54, 3, 13, 23, NULL),
(55, 4, 13, 2, NULL),
(56, 5, 13, 10, NULL),
(57, 1, 14, 8, NULL),
(58, 2, 14, 16, NULL),
(59, 3, 14, 24, NULL),
(60, 4, 14, 0, NULL),
(61, 5, 14, 8, NULL),
(62, 1, 15, 7, NULL),
(63, 2, 15, 5, NULL),
(64, 3, 15, 12, NULL),
(65, 4, 15, 0, NULL),
(66, 5, 15, 3, NULL),
(67, 1, 16, 2, NULL),
(68, 2, 16, 3, NULL),
(69, 3, 16, 5, NULL),
(70, 4, 16, 1, NULL),
(71, 5, 16, 3, NULL),
(72, 1, 17, 2, NULL),
(73, 2, 17, 16, NULL),
(74, 3, 17, 18, NULL),
(75, 4, 17, 1, NULL),
(76, 5, 17, 2, NULL),
(77, 1, 18, 2, NULL),
(78, 2, 18, 10, NULL),
(79, 3, 18, 12, NULL),
(80, 4, 18, 0, NULL),
(81, 5, 18, 2, NULL),
(82, 1, 21, 8, NULL),
(83, 2, 21, 13, NULL),
(84, 3, 21, 21, NULL),
(85, 4, 21, 2, NULL),
(86, 5, 21, 2, NULL),
(87, 1, 22, 4, NULL),
(88, 2, 22, 9, NULL),
(89, 3, 22, 13, NULL),
(90, 4, 22, 4, NULL),
(91, 5, 22, 0, NULL),
(92, 1, 23, 0, NULL),
(93, 2, 23, 10, NULL),
(94, 3, 23, 10, NULL),
(95, 4, 23, 3, NULL),
(96, 5, 23, 2, NULL),
(97, 1, 24, 2, NULL),
(98, 2, 24, 8, NULL),
(99, 3, 24, 10, NULL),
(100, 4, 24, 3, NULL),
(101, 5, 24, 2, NULL),
(102, 1, 25, 0, NULL),
(103, 2, 25, 8, NULL),
(104, 3, 25, 8, NULL),
(105, 4, 25, 16, NULL),
(106, 5, 25, 1, NULL),
(107, 1, 26, 3, NULL),
(108, 2, 26, 18, NULL),
(109, 3, 26, 21, NULL),
(110, 4, 26, 4, NULL),
(111, 5, 26, 0, NULL),
(112, 1, 27, 2, NULL),
(113, 2, 27, 16, NULL),
(114, 3, 27, 18, NULL),
(115, 4, 27, 5, NULL),
(116, 5, 27, 1, NULL),
(117, 1, 28, 0, NULL),
(118, 2, 28, 20, NULL),
(119, 3, 28, 20, NULL),
(120, 4, 28, 3, NULL),
(121, 5, 28, 0, NULL),
(122, 1, 31, 35, NULL),
(123, 2, 31, 54, NULL),
(124, 3, 31, 89, NULL),
(125, 4, 31, 5, NULL),
(126, 5, 31, 50, NULL),
(127, 1, 32, 47, NULL),
(128, 2, 32, 88, NULL),
(129, 3, 32, 135, NULL),
(130, 4, 32, 1, NULL),
(131, 5, 32, 60, NULL),
(132, 1, 33, 55, NULL),
(133, 2, 33, 69, NULL),
(134, 3, 33, 124, NULL),
(135, 4, 33, 3, NULL),
(136, 5, 33, 28, NULL),
(137, 1, 34, 28, NULL),
(138, 2, 34, 97, NULL),
(139, 3, 34, 125, NULL),
(140, 4, 34, 7, NULL),
(141, 5, 34, 51, NULL),
(142, 1, 35, 50, NULL),
(143, 2, 35, 74, NULL),
(144, 3, 35, 124, NULL),
(145, 4, 35, 7, NULL),
(146, 5, 35, 39, NULL),
(147, 1, 36, 38, NULL),
(148, 2, 36, 84, NULL),
(149, 3, 36, 122, NULL),
(150, 4, 36, 2, NULL),
(151, 5, 36, 56, NULL),
(152, 1, 37, 56, NULL),
(153, 2, 37, 79, NULL),
(154, 3, 37, 135, NULL),
(155, 4, 37, 8, NULL),
(156, 5, 37, 44, NULL),
(157, 1, 38, 42, NULL),
(158, 2, 38, 88, NULL),
(159, 3, 38, 130, NULL),
(160, 4, 38, 7, NULL),
(161, 5, 38, 21, NULL),
(162, 1, 41, 11, NULL),
(163, 2, 41, 26, NULL),
(164, 3, 41, 37, NULL),
(165, 4, 41, 1, NULL),
(166, 5, 41, 4, NULL),
(167, 1, 42, 4, NULL),
(168, 2, 42, 29, NULL),
(169, 3, 42, 33, NULL),
(170, 4, 42, 1, NULL),
(171, 5, 42, 8, NULL),
(172, 1, 43, 8, NULL),
(173, 2, 43, 39, NULL),
(174, 3, 43, 47, NULL),
(175, 4, 43, 5, NULL),
(176, 5, 43, 5, NULL),
(177, 1, 44, 5, NULL),
(178, 2, 44, 26, NULL),
(179, 3, 44, 31, NULL),
(180, 4, 44, 3, NULL),
(181, 5, 44, 5, NULL),
(182, 1, 45, 10, NULL),
(183, 2, 45, 21, NULL),
(184, 3, 45, 31, NULL),
(185, 4, 45, 1, NULL),
(186, 5, 45, 4, NULL),
(187, 1, 46, 4, NULL),
(188, 2, 46, 18, NULL),
(189, 3, 46, 22, NULL),
(190, 4, 46, 3, NULL),
(191, 5, 46, 4, NULL),
(192, 1, 47, 4, NULL),
(193, 2, 47, 32, NULL),
(194, 3, 47, 36, NULL),
(195, 4, 47, 3, NULL),
(196, 5, 47, 10, NULL),
(197, 1, 48, 10, NULL),
(198, 2, 48, 24, NULL),
(199, 3, 48, 34, NULL),
(200, 4, 48, 0, NULL),
(201, 5, 48, 5, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Jurisdiction`
--

CREATE TABLE `Jurisdiction` (
  `JurisdictionID` int(11) NOT NULL,
  `JurisdictionName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Jurisdiction`
--

INSERT INTO `Jurisdiction` (`JurisdictionID`, `JurisdictionName`) VALUES
(1, 'Alabama'),
(2, 'Alaska'),
(3, 'American Samoa'),
(4, 'Arizona'),
(5, 'Arkansas');

-- --------------------------------------------------------

--
-- Table structure for table `Organization`
--

CREATE TABLE `Organization` (
  `OrganizationID` int(11) NOT NULL,
  `OrganizationName` varchar(35) NOT NULL,
  `OrganizationDesc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Organization`
--

INSERT INTO `Organization` (`OrganizationID`, `OrganizationName`, `OrganizationDesc`) VALUES
(1, 'NDRN', 'National Disability Rights Network');

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

--
-- Dumping data for table `Question`
--

INSERT INTO `Question` (`QuestionID`, `ReportID`, `QuestionCode`, `QuestionDesc`, `QuestionType`) VALUES
(1, 2, 'A1', 'Individuals served as of October 1 (carried over from previous FY).', 'NUMBER'),
(2, 2, 'A2', 'Additional individuals served during the year.', 'NUMBER'),
(3, 2, 'A3', 'Total individuals served during the year (A1 + A2).', 'NUMBER'),
(4, 2, 'A4', 'Individuals with more than one (1) intervention opened/closed FY.', 'NUMBER'),
(5, 2, 'A5', 'Individuals served as of September 30 (Carry over to next FY; <= A3)', 'NUMBER');

-- --------------------------------------------------------

--
-- Table structure for table `Report`
--

CREATE TABLE `Report` (
  `ReportID` int(11) NOT NULL,
  `ReportParentID` int(11) DEFAULT NULL,
  `ReportName` varchar(35) NOT NULL,
  `ReportDesc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Report`
--

INSERT INTO `Report` (`ReportID`, `ReportParentID`, `ReportName`, `ReportDesc`) VALUES
(1, NULL, 'One PPR', 'program full name'),
(2, 1, 'PAAD', 'program full name'),
(3, 1, 'PAAT', 'program full name'),
(4, 1, 'PATBI', 'program full name'),
(5, 1, 'PAVA', 'program full name');

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
-- Dumping data for table `ReportInstance`
--

INSERT INTO `ReportInstance` (`ReportInstanceID`, `ReportID`, `JurisdictionID`, `OrganizationID`, `ReportInstanceYear`) VALUES
(1, 2, 1, 1, 2011),
(2, 2, 1, 1, 2012),
(3, 2, 1, 1, 2013),
(4, 2, 1, 1, 2014),
(5, 2, 1, 1, 2015),
(6, 2, 1, 1, 2016),
(7, 2, 1, 1, 2017),
(8, 2, 1, 1, 2018),
(9, 2, 1, 1, 2019),
(10, 2, 1, 1, 2020),
(11, 2, 2, 1, 2011),
(12, 2, 2, 1, 2012),
(13, 2, 2, 1, 2013),
(14, 2, 2, 1, 2014),
(15, 2, 2, 1, 2015),
(16, 2, 2, 1, 2016),
(17, 2, 2, 1, 2017),
(18, 2, 2, 1, 2018),
(19, 2, 2, 1, 2019),
(20, 2, 2, 1, 2020),
(21, 2, 3, 1, 2011),
(22, 2, 3, 1, 2012),
(23, 2, 3, 1, 2013),
(24, 2, 3, 1, 2014),
(25, 2, 3, 1, 2015),
(26, 2, 3, 1, 2016),
(27, 2, 3, 1, 2017),
(28, 2, 3, 1, 2018),
(29, 2, 3, 1, 2019),
(30, 2, 3, 1, 2020),
(31, 2, 4, 1, 2011),
(32, 2, 4, 1, 2012),
(33, 2, 4, 1, 2013),
(34, 2, 4, 1, 2014),
(35, 2, 4, 1, 2015),
(36, 2, 4, 1, 2016),
(37, 2, 4, 1, 2017),
(38, 2, 4, 1, 2018),
(39, 2, 4, 1, 2019),
(40, 2, 4, 1, 2020),
(41, 2, 5, 1, 2011),
(42, 2, 5, 1, 2012),
(43, 2, 5, 1, 2013),
(44, 2, 5, 1, 2014),
(45, 2, 5, 1, 2015),
(46, 2, 5, 1, 2016),
(47, 2, 5, 1, 2017),
(48, 2, 5, 1, 2018),
(49, 2, 5, 1, 2019),
(50, 2, 5, 1, 2020);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Answer`
--
ALTER TABLE `Answer`
  ADD PRIMARY KEY (`AnswerID`),
  ADD KEY `QuestionID` (`QuestionID`) USING BTREE,
  ADD KEY `ReportInstanceID` (`ReportInstanceID`) USING BTREE;

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
  ADD KEY `ReportID` (`ReportID`) USING BTREE;

--
-- Indexes for table `Report`
--
ALTER TABLE `Report`
  ADD PRIMARY KEY (`ReportID`) USING BTREE,
  ADD KEY `ReportParentID` (`ReportParentID`) USING BTREE;

--
-- Indexes for table `ReportInstance`
--
ALTER TABLE `ReportInstance`
  ADD PRIMARY KEY (`ReportInstanceID`),
  ADD KEY `ReportID` (`ReportID`) USING BTREE,
  ADD KEY `OrganizationID` (`OrganizationID`) USING BTREE,
  ADD KEY `JurisdictionID` (`JurisdictionID`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Answer`
--
ALTER TABLE `Answer`
  MODIFY `AnswerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

--
-- AUTO_INCREMENT for table `Jurisdiction`
--
ALTER TABLE `Jurisdiction`
  MODIFY `JurisdictionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Organization`
--
ALTER TABLE `Organization`
  MODIFY `OrganizationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Question`
--
ALTER TABLE `Question`
  MODIFY `QuestionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Report`
--
ALTER TABLE `Report`
  MODIFY `ReportID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ReportInstance`
--
ALTER TABLE `ReportInstance`
  MODIFY `ReportInstanceID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

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
-- Constraints for table `ReportInstance`
--
ALTER TABLE `ReportInstance`
  ADD CONSTRAINT `ReportInstance_ibfk_2` FOREIGN KEY (`JurisdictionID`) REFERENCES `Jurisdiction` (`JurisdictionID`),
  ADD CONSTRAINT `ReportInstance_ibfk_3` FOREIGN KEY (`OrganizationID`) REFERENCES `Organization` (`OrganizationID`),
  ADD CONSTRAINT `ReportInstance_ibfk_4` FOREIGN KEY (`ReportID`) REFERENCES `Report` (`ReportID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
