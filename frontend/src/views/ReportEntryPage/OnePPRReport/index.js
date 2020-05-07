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
              component={RouterLink}
              variant="outlined"
              color="primary"
              endIcon={<CheckIcon />}
              to="/reportentry"
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
