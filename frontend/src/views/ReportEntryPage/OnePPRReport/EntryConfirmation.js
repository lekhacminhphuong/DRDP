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
import ConfirmationValues from './ConfirmationValues';
import { db } from '../../../config/Fire';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6),
    paddingTop: theme.spacing(8),
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

function EntryConfirmation() {
  const classes = useStyles();
  const { report, submission } = useContext(Context);

  console.log(submission)

  const handleSubmit = (e) => {
    db.collection('testy23423')
      .add(submission);
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
            Report Entry / One PPR / CONFIRM
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            Part 1: Demographics
          </Typography>
          <Typography variant="h6">
            Please ensure all values are correctly entered<br/><br/>
          </Typography>
          <Typography variant="h4">
            Jurisdiction: {report.jurisdiction}
          </Typography>
          <Typography variant="h4">
            Year: {report.year}
          </Typography>
        </div>

        <Grid
          container
          spacing={10}>
          <Grid item>
            <Questions />
          </Grid>
          <Grid item>
            <ConfirmationValues/>
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
              onClick={handleSubmit}
              component={RouterLink}
              variant="outlined"
              color="primary"
              endIcon={<CheckIcon />}
              to="/reportentry/success"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default EntryConfirmation;
