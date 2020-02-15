USE db_stage_1;

CREATE TABLE tblOrganization (
OrganizationID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
OrganizationName VARCHAR(35) NOT NULL,
OrganizationDesc VARCHAR(100) NOT NULL);
USE db_stage_1;

CREATE TABLE tblQuestionType (
QuestionTypeID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
QuestionTypeName VARCHAR(35) NOT NULL);

CREATE TABLE tblYear (
YearID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`Year` INT NOT NULL);

CREATE TABLE tblJurisdiction (
JurisdictionID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
JurisdictionName varchar(35) NOT NULL);

CREATE TABLE tblReport  (
ReportID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
ReportName varchar(35) NOT NULL);

CREATE TABLE tblQuestion  (
QuestionID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
QuestionTypeID INT,
    CONSTRAINT fk_questiontype
    FOREIGN KEY (QuestionTypeID) 
        REFERENCES tblQuestionType(QuestionTypeID),
QuestionDesc varchar(200) NOT NULL,
QuestionCode varchar(10) NOT NULL
);

CREATE TABLE tblAnswer	(
AnswerID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
QuestionID INT,
    CONSTRAINT fk_question
    FOREIGN KEY (QuestionID) 
        REFERENCES tblQuestion(QuestionID),
ReportID INT,
    CONSTRAINT fk_report
    FOREIGN KEY (ReportID) 
        REFERENCES tblReport(ReportID),
YearID INT,
    CONSTRAINT fk_year
    FOREIGN KEY (YearID) 
        REFERENCES tblYear(YearID),
JurisdictionID INT,
    CONSTRAINT fk_jurisdiction
    FOREIGN KEY (JurisdictionID) 
        REFERENCES tblJurisdiction(JurisdictionID),
AnswerValue varchar(15) NOT NULL);

CREATE TABLE tblVersion	(
VersionID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
AnswerID INT,
    CONSTRAINT fk_answer
    FOREIGN KEY (AnswerID)
        REFERENCES tblAnswer(AnswerID),
OrganizationID INT,
    CONSTRAINT fk_organization
    FOREIGN KEY (OrganizationID)
        REFERENCES tblOrganization(OrganizationID),
VersionName varchar(35) NOT NULL,
VersionDesc varchar(100) NULL);