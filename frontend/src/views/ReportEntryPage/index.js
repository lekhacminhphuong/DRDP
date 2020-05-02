import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography, Button } from '@material-ui/core';
import formData from './data';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link as RouterLink } from 'react-router-dom';

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
  const [reportName, setReportName] = React.useState('One PPR');
  const [reportYear, setReportYear] = React.useState('2020');
  const [reportState, setReportState] = React.useState('Alabama');

  const handleReportName = (event) => {
    setReportName(event.target.value);
  };

  const handleReportYear = (event) => {
    setReportYear(event.target.value);
  };

  const handleReportState = (event) => {
    setReportState(event.target.value);
  };

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
          onChange={handleReportName}
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
          value={reportYear}
          onChange={handleReportYear}
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
          value={reportState}
          onChange={handleReportState}
          helperText="Please select jurisdiction name"
        >
          {formData.reportState.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className={classes.button}>
          <Button
            component={RouterLink}
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
            to="/reportentry/oneppr"
          >
            Next
        </Button>
        </div>
      </Container>
    </Page>
  );
}

export default ReportEntryPage;
