use master
drop database _testDB
create database _testDB
use _testDB

CREATE TABLE tblOrganization (
  OrganizationID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
  OrganizationName varchar(35) NOT NULL,
  OrganizationDesc varchar(100) NULL
) 

CREATE TABLE tblJurisdiction (
  JurisdictionID int  IDENTITY(1,1) NOT NULL PRIMARY KEY,
  JurisdictionName varchar(35) NOT NULL
)

CREATE TABLE tblYear (
  YearID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
  [Year] int NOT NULL
)

CREATE TABLE tblReport (
  ReportID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
  ReportName varchar(35) NOT NULL
)

CREATE TABLE tblQuestionType (
  QuestionTypeID int Identity(1,1) NOT NULL PRIMARY KEY,
  QuestionTypeName varchar(35) NOT NULL
) 

CREATE TABLE tblVersion (
  VersionID int Identity(1,1) NOT NULL PRIMARY KEY,
  OrganizationID int FOREIGN KEY REFERENCES tblOrganization (OrganizationID) NOT NULL,
  VersionName varchar(35) NOT NULL
)

CREATE TABLE tblQuestion (
  QuestionID int Identity(1,1) NOT NULL PRIMARY KEY,
  QuestionTypeID int FOREIGN KEY REFERENCES tblQuestionType (QuestionTypeID) NOT NULL,
  OrganizationID int FOREIGN KEY REFERENCES tblOrganization (OrganizationID) NOT NULL,
  VersionID int FOREIGN KEY REFERENCES tblVersion (VersionID) NOT NULL,
  QuestionDesc varchar(100) NOT NULL,
  QuestionCode varchar(10) NOT NULL
)

CREATE TABLE tblAnswer (
  AnswerID int Identity(1,1) NOT NULL PRIMARY KEY,
  QuestionID int FOREIGN KEY REFERENCES tblQuestion (QuestionID) NOT NULL,
  YearID int FOREIGN KEY REFERENCES tblYear (YearID) NOT NULL,
  JurisdictionID int FOREIGN KEY REFERENCES tblJurisdiction (JurisdictionID) NOT NULL,
  ReportID int FOREIGN KEY REFERENCES tblReport (ReportID) NOT NULL,
  QuestionCode varchar(35) NOT NULL
)




INSERT INTO tblJurisdiction (JurisdictionName)
Values ('Alabama'), ('Alaska'),('American Samoa'),('Arizona'),('Arkansas'),('California'),('Colorado'),('Connecticut'),('Delaware'),('District of Columbia')


INSERT INTO tblOrganization (OrganizationName) 
VALUES ('NDRN')


INSERT INTO tblYear ([Year]) 
VALUES (2020),(2021),(2022),(2024),(2025),(2026),(2027),(2028),(2029),(2030);

INSERT INTO tblReport (ReportName) 
VALUES ('PADD'),('PAAT'),('PATBI'),('PAVA');

INSERT INTO tblQuestionType (QuestionTypeName)
VALUES ('Integer'),('Character');

-->
-->INSERT INTO tblQuestion (QuestionTypeID, QuestionDesc, QuestionCode)
-->VALUES 
-->((SELECT QuestionTypeID FROM tblQuestionType WHERE QuestionTypeName = 'Integer'), 'Individuals who are still being served as of October 1', '1.A.1'),
-->((SELECT QuestionTypeID FROM tblQuestionType WHERE QuestionTypeName = 'Integer'),'Additional individuals who were served during the year', '1.A.2'),
-->((SELECT QuestionTypeID FROM tblQuestionType WHERE QuestionTypeName = 'Integer'), 'Total individuals served', '1.A.3'),
-->((SELECT QuestionTypeID FROM tblQuestionType WHERE QuestionTypeName = 'Integer'), 'Individuals with more than one intervention opened/closed FY', '1.A.4'),
-->((SELECT QuestionTypeID FROM tblQuestionType WHERE QuestionTypeName = 'Integer'), 'Individual still being served as of September 30', '1.A.5')