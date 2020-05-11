import React, {useState, useContext} from 'react';
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
  const { report, actions } = useContext(Context);

  console.log(report)

  function handleReport(e){
    let val = e.target.value;
    let key = e.target.name;
    report[key] = val;
    console.log(report)
  }



  function constructReportSubmission(){
    return({
      'year': report.year,
      'jurisdiction': report.jurisdiction,
      "PADD": 
        {"A1": {"name": "Individuals served as of October 1 (carried over from previous FY).", "val": report['PADD-A1']}, 
          "A2": {"name": "Additional individuals served during the year.", "val": report['PADD-A2']}, 
          "A3": {"name": "Total individuals served during the year (A1 + A2).", "val": report['PADD-A3']}, 
          "A4": {"name": "Individuals with more than one (1) intervention opened/closed FY.", "val": report['PADD-A4']}, 
          "A5": {"name": "Individuals served as of September 30 (Carry over to next FY; <= A3)", "val": report['PAAD-A5']}, 
          "I1": {"name": "Hispanic/Latino", "val": report['PADD-I1']}, 
          "I2": {"name": "American Indian/Alaskan Native", "val": report['PADD-I2']}, 
          "I3": {"name": "Asian", "val": report['PADD-I3']}, 
          "I4": {"name": "Black/African American", "val": report['PADD-I4']}, 
          "I5": {"name": "Native Hawaiian/Other Pacific Islander", "val": report['PADD-I5']}, 
          "I6": {"name": "White", "val": report['PADD-I6']}}, 
      "PAAT": 
        {"A1": {"name": "Individuals served as of October 1 (carried over from previous FY).", "val": report['PAAT-A1']}, 
          "A2": {"name": "Additional individuals served during the year.", "val": report['PAAT-A2']}, 
          "A3": {"name": "Total individuals served during the year (A1 + A2).", "val": report['PAAT-A3']}, 
          "A4": {"name": "Individuals with more than one (1) intervention opened/closed FY.", "val": report['PAAT-A4']}, 
          "A5": {"name": "Individuals served as of September 30 (Carry over to next FY; <= A3)", "val": report['PAAT-A5']}, 
          "I1": {"name": "Hispanic/Latino", "val": report['PAAT-I1']}, 
          "I2": {"name": "American Indian/Alaskan Native", "val": report['PAAT-I2']}, 
          "I3": {"name": "Asian", "val": report['PAAT-I3']}, 
          "I4": {"name": "Black/African American", "val": report['PAAT-I4']}, 
          "I5": {"name": "Native Hawaiian/Other Pacific Islander", "val": report['PAAT-I5']}, 
          "I6": {"name": "White", "val": report['PAAT-I6']}}, 
      "PATBI": 
        {"A1": {"name": "Individuals served as of October 1 (carried over from previous FY).", "val": report['PATBI-A1']}, 
          "A2": {"name": "Additional individuals served during the year.", "val": report['PATBI-A2']},
          "A3": {"name": "Total individuals served during the year (A1 + A2).", "val": report['PATBI-A3']}, 
          "A4": {"name": "Individuals with more than one (1) intervention opened/closed FY.", "val": report['PATBI-A4']}, 
          "A5": {"name": "Individuals served as of September 30 (Carry over to next FY; <= A3)", "val": report['PATBI-A5']}, 
          "I1": {"name": "Hispanic/Latino", "val": report['PATBI-I1']}, 
          "I2": {"name": "American Indian/Alaskan Native", "val": report['PATBI-I2']}, 
          "I3": {"name": "Asian", "val": report['PATBI-I3']}, 
          "I4": {"name": "Black/African American", "val": report['PATBI-I4']}, 
          "I5": {"name": "Native Hawaiian/Other Pacific Islander", "val": report['PATBI-I5']}, 
          "I6": {"name": "White", "val": report['PATBI-I6']}}, 
      "PAVA": 
        {"A1": {"name": "Individuals served as of October 1 (carried over from previous FY).", "val": report['PAVA-A1']}, 
          "A2": {"name": "Additional individuals served during the year.", "val": report['PAVA-A2']}, 
          "A3": {"name": "Total individuals served during the year (A1 + A2).", "val": report['PAVA-A3']},  
          "A4": {"name": "Individuals with more than one (1) intervention opened/closed FY.", "val": report['PAVA-A4']}, 
          "A5": {"name": "Individuals served as of September 30 (Carry over to next FY; <= A3)", "val": report['PAVA-A5']}, 
          "I1": {"name": "Hispanic/Latino", "val": report['PAVA-I1']}, 
          "I2": {"name": "American Indian/Alaskan Native", "val": report['PAVA-I2']}, 
          "I3": {"name": "Asian", "val": report['PAVA-I3']}, 
          "I4": {"name": "Black/African American", "val": report['PAVA-I4']}, 
          "I5": {"name": "Native Hawaiian/Other Pacific Islander", "val": report['PAVA-I5']}, 
          "I6": {"name": "White", "val": report['PAVA-I6']}
        }
      }
    )
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
            <TextFields handleReport={handleReport}/>
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
            <Button
              onClick={()=>{console.log(constructReportSubmission())}}
              //component={RouterLink}
              variant="outlined"
              color="primary"
              endIcon={<CheckIcon />}
              //to="/reportentry"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default OnePPRReport;
