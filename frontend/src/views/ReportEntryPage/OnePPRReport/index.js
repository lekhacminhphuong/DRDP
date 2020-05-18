import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import Page from 'src/components/Page';
import { Typography, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CheckIcon from '@material-ui/icons/Check';
import { Link as RouterLink } from 'react-router-dom';
import Questions from './Questions';
import TextFields from './TextFields'
import Context from '../../../globalStore/context';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6),
    paddingTop: theme.spacing(8)
  },
  header: {
    marginBottom: theme.spacing(8),
  },
  dropdown: {
    width: "70%",
    paddingBottom: theme.spacing(6),
    paddingRight: theme.spacing(10)
  },
  button: {
    paddingTop: theme.spacing(2)
  }
}));

function OnePPRReport() {
  const classes = useStyles();
  const { report, submission, actions } = useContext(Context);
  const [fields, setFields] = useState({
    'PADD-A1': '', 'PAAT-A1': '', 'PATBI-A1': '', 'PAVA-A1': '',
    'PADD-A2': '', 'PAAT-A2': '', 'PATBI-A2': '', 'PAVA-A2': '',
    'PADD-A3': '', 'PAAT-A3': '', 'PATBI-A3': '', 'PAVA-A3': '',
    'PADD-A4': '', 'PAAT-A4': '', 'PATBI-A4': '', 'PAVA-A4': '',
    'PADD-A5': '', 'PAAT-A5': '', 'PATBI-A5': '', 'PAVA-A5': '',
    'PADD-I1': '', 'PAAT-I1': '', 'PATBI-I1': '', 'PAVA-I1': '',
    'PADD-I2': '', 'PAAT-I2': '', 'PATBI-I2': '', 'PAVA-I2': '',
    'PADD-I3': '', 'PAAT-I3': '', 'PATBI-I3': '', 'PAVA-I3': '',
    'PADD-I4': '', 'PAAT-I4': '', 'PATBI-I4': '', 'PAVA-I4': '',
    'PADD-I5': '', 'PAAT-I5': '', 'PATBI-I5': '', 'PAVA-I5': '',
    'PADD-I6': '', 'PAAT-I6': '', 'PATBI-I6': '', 'PAVA-I6': ''
  });
  const [allFilled, setAllFilled] = useState(false);

  function handleReport(e) {
    setFields({ ...fields, [e.target.name]: [e.target.value] })
    let val = e.target.value;
    let key = e.target.name;
    report[key] = val;
    checkIfAllFieldsFilled(fields)
  }

  function constructSubmissionObject() {
    return ({
      'year': report.year,
      'jurisdiction': report.jurisdiction,
      "PADD":
      {
        "A1": { "name": "Individuals served as of October 1 (carried over from previous FY).", "val": report['PADD-A1'] },
        "A2": { "name": "Additional individuals served during the year.", "val": report['PADD-A2'] },
        "A3": { "name": "Total individuals served during the year (A1 + A2).", "val": report['PADD-A3'] },
        "A4": { "name": "Individuals with more than one (1) intervention opened/closed FY.", "val": report['PADD-A4'] },
        "A5": { "name": "Individuals served as of September 30 (Carry over to next FY; <= A3)", "val": report['PADD-A5'] },
        "I1": { "name": "Hispanic/Latino", "val": report['PADD-I1'] },
        "I2": { "name": "American Indian/Alaskan Native", "val": report['PADD-I2'] },
        "I3": { "name": "Asian", "val": report['PADD-I3'] },
        "I4": { "name": "Black/African American", "val": report['PADD-I4'] },
        "I5": { "name": "Native Hawaiian/Other Pacific Islander", "val": report['PADD-I5'] },
        "I6": { "name": "White", "val": report['PADD-I6'] }
      },
      "PAAT":
      {
        "A1": { "name": "Individuals served as of October 1 (carried over from previous FY).", "val": report['PAAT-A1'] },
        "A2": { "name": "Additional individuals served during the year.", "val": report['PAAT-A2'] },
        "A3": { "name": "Total individuals served during the year (A1 + A2).", "val": report['PAAT-A3'] },
        "A4": { "name": "Individuals with more than one (1) intervention opened/closed FY.", "val": report['PAAT-A4'] },
        "A5": { "name": "Individuals served as of September 30 (Carry over to next FY; <= A3)", "val": report['PAAT-A5'] },
        "I1": { "name": "Hispanic/Latino", "val": report['PAAT-I1'] },
        "I2": { "name": "American Indian/Alaskan Native", "val": report['PAAT-I2'] },
        "I3": { "name": "Asian", "val": report['PAAT-I3'] },
        "I4": { "name": "Black/African American", "val": report['PAAT-I4'] },
        "I5": { "name": "Native Hawaiian/Other Pacific Islander", "val": report['PAAT-I5'] },
        "I6": { "name": "White", "val": report['PAAT-I6'] }
      },
      "PATBI":
      {
        "A1": { "name": "Individuals served as of October 1 (carried over from previous FY).", "val": report['PATBI-A1'] },
        "A2": { "name": "Additional individuals served during the year.", "val": report['PATBI-A2'] },
        "A3": { "name": "Total individuals served during the year (A1 + A2).", "val": report['PATBI-A3'] },
        "A4": { "name": "Individuals with more than one (1) intervention opened/closed FY.", "val": report['PATBI-A4'] },
        "A5": { "name": "Individuals served as of September 30 (Carry over to next FY; <= A3)", "val": report['PATBI-A5'] },
        "I1": { "name": "Hispanic/Latino", "val": report['PATBI-I1'] },
        "I2": { "name": "American Indian/Alaskan Native", "val": report['PATBI-I2'] },
        "I3": { "name": "Asian", "val": report['PATBI-I3'] },
        "I4": { "name": "Black/African American", "val": report['PATBI-I4'] },
        "I5": { "name": "Native Hawaiian/Other Pacific Islander", "val": report['PATBI-I5'] },
        "I6": { "name": "White", "val": report['PATBI-I6'] }
      },
      "PAVA":
      {
        "A1": { "name": "Individuals served as of October 1 (carried over from previous FY).", "val": report['PAVA-A1'] },
        "A2": { "name": "Additional individuals served during the year.", "val": report['PAVA-A2'] },
        "A3": { "name": "Total individuals served during the year (A1 + A2).", "val": report['PAVA-A3'] },
        "A4": { "name": "Individuals with more than one (1) intervention opened/closed FY.", "val": report['PAVA-A4'] },
        "A5": { "name": "Individuals served as of September 30 (Carry over to next FY; <= A3)", "val": report['PAVA-A5'] },
        "I1": { "name": "Hispanic/Latino", "val": report['PAVA-I1'] },
        "I2": { "name": "American Indian/Alaskan Native", "val": report['PAVA-I2'] },
        "I3": { "name": "Asian", "val": report['PAVA-I3'] },
        "I4": { "name": "Black/African American", "val": report['PAVA-I4'] },
        "I5": { "name": "Native Hawaiian/Other Pacific Islander", "val": report['PAVA-I5'] },
        "I6": { "name": "White", "val": report['PAVA-I6'] }
      }
    }
    )
  }

  function createSubmission() {
    actions({ type: 'setSubmission', payload: constructSubmissionObject() });
  }

  function checkIfAllFieldsFilled(obj) {
    //assume true
    let res = true
    for (var key in obj) {
      if (obj[key][0] == undefined) {
        if (obj[key] == '') {
          res = false
        }
      } else {
        if (obj[key][0] == '') {
          res = false
        }
      }
    }
    setAllFilled(res);
    return res;
  }

  let button;
  if(allFilled){
    button = <Button
            onClick={createSubmission}
            component={RouterLink}
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
            to="/reportentry/confirmation"
          >
            Confirm
          </Button>
  } else {
    button = <Button
            //onClick={createSubmission}
            //component={RouterLink}
            variant="outlined"
            color="primary"
            disabled
            endIcon={<ArrowForwardIosIcon />}
            //to="/reportentry/confirmation"
          >
            Confirm
          </Button>
  }

  return (
    <Page className={classes.root} title="DRDP - Cencus Report">
      <Container maxWidth="lg">
        <div className={classes.header}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Report Entry/One PPR
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            Part 1: Demographics
          </Typography>
          <Typography variant="h6">
            Enter the numbers from the corresponding fields on the One PPR Report into the boxes
          </Typography>
        </div>

        <Grid
          container
          spacing={10}>
          <Grid item>
            <Questions />
          </Grid>
          <Grid item>
            <TextFields handleReport={handleReport} fields={fields} />
          </Grid>
        </Grid>

        <Grid
          className={classes.button}
          container
          spacing={3}>
          <Grid item>
            <Button
              component={RouterLink}
              variant="outlined"
              color="primary"
              endIcon={<ArrowBackIosIcon />}
              to="/reportentry"
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            {button}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default OnePPRReport;
