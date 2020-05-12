import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography, Button } from '@material-ui/core';
import formData from './data';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link as RouterLink } from 'react-router-dom';
import Context from '../../globalStore/context';

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

function ReportEntryPage() {
  const classes = useStyles();

  const { report, actions } = useContext(Context);

  const [reportName, setReportName] = React.useState('One PPR');
  const [reportYear, setReportYear] = React.useState('');
  const [reportState, setReportState] = React.useState('');

  function handleReport(e){
    let val = e.target.value;
    let key = e.target.name;
    switch(key){
      case 'year':
        report[key] = val;
        setReportYear(val);
        break
      case 'jurisdiction':
        report[key] = val;
        setReportState(val);
        break
    }
  }

  //alert if jurisdiction or year is empty
  function alertEmptyField() {
    alert('Please select a Jurisdiction and/or Year to continue')
  }

  //error handling to prevent empty jurisdiction and year fields
  let button;
  if (reportYear == '' || reportState == '') {      
    button = <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
            onClick={alertEmptyField}
          >
            Next
        </Button> 
  } else {      
    button = <Button
            component={RouterLink}
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
            to="/reportentry/oneppr"
          >
            Next
        </Button>  
  }

  return (
    <Page className={classes.root} title="DRDP - Report Entry">
      <Container maxWidth="lg">
        <div className={classes.header}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Report Entry
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            Report Entry
          </Typography>
          <Typography variant="h6">
            Please select from the following options to Add/Modify a report
          </Typography>
        </div>

        <TextField
          select
          className={classes.dropdown}
          required
          label="Report Name"
          value={reportName}
          onChange={handleReport}
          name='reportName'
          helperText="Please select report name"
        >
          {formData.reportName.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          className={classes.dropdown}
          label="Report Year"
          name='year'
          value={reportYear}
          onChange={handleReport}
          helperText="Please select report year"
        >
          {formData.reportYear.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          className={classes.dropdown}
          label="Jurisdiction Name"
          name='jurisdiction'
          value={reportState}
          onChange={handleReport}
          helperText="Please select jurisdiction name"
        >
          {formData.reportState.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className={classes.button}>
          {button}
        </div>
      </Container>
    </Page>
  );
}

export default ReportEntryPage;
