GO
create database db_stage_1
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[tblOrganization]
(
  [OrganizationID] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  [OrganizationName] NVARCHAR(50) NOT NULL,
  [OrganizationDesc] NVARCHAR(200) NULL
);
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[tblQuestionType]
(
  [QuestionTypeID] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  [QuestionTypeName] NVARCHAR(35) NOT NULL,
);
GO

-- Create the table in the specified schema
CREATE TABLE [dbo].[tblYear]
(
  [YearID] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  [Year] INT NOT NULL,
);
GO

-- Create the table in the specified schema
CREATE TABLE [dbo].[tblJurisdiction]
(
  [JurisdictionID] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  [JurisdictionName] NVARCHAR(35) NOT NULL,

);
GO

-- Create the table in the specified schema
CREATE TABLE [dbo].[tblReport]
(
  [ReportID] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  [ReportName] NVARCHAR(35) NOT NULL,

);
GO

-- Create the table in the specified schema
CREATE TABLE [dbo].[tblQuestion]
(
  [QuestionID] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  [QuestionTypeID] INT FOREIGN KEY REFERENCES tblQuestionType (QuestionTypeID) NOT NULL,
  [QuestionDesc] NVARCHAR(200) NOT NULL,
  [QuestionCode] NVARCHAR(15) NOT NULL

);
GO

-- Create the table in the specified schema
CREATE TABLE [dbo].[tblAnswer]
(
  [AnswerID] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  [QuestionID] INT FOREIGN KEY REFERENCES tblQuestion (QuestionID) NOT NULL,
  [ReportID] INT FOREIGN KEY REFERENCES tblReport (ReportID) NOT NULL,
  [YearID] INT FOREIGN KEY REFERENCES tblYear (YearID) NOT NULL,
  [JurisdictionID] INT FOREIGN KEY REFERENCES tblJurisdiction (JurisdictionID) NOT NULL,
  [AnswerValue] VARCHAR(15) NOT NULL
);
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[tblVersion]
(
  [VersionID] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  [AnswerID] INT FOREIGN KEY REFERENCES tblAnswer (AnswerID) NOT NULL,
  [OrganizationID] INT FOREIGN KEY REFERENCES tblOrganization (OrganizationID) NOT NULL,
  [VersionName] NVARCHAR(35) NOT NULL,
  [VersionDesc] NVARCHAR(100) NULL
);
GO
