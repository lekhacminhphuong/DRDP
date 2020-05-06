import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(0.5)
  },
  title: {
    width: "85%"
  }
}));

export default function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        container
        justify="space-between"
      >
        <Grid item className={classes.title}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Gallery/CardName
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            Total Population Served
          </Typography>
          <Typography variant="subtitle1">
            This report shows the total number of people served by P&amp;As in the selected state for the selected years.<br/>
            The data comes from Part 1 Section A of the One PPR Report, dealing with Individuals Served.<br/>
          </Typography>
        </Grid>
        <Grid item>
          <Button
            component={RouterLink}
            variant="outlined"
            color="primary"
            endIcon={<ArrowBackIosIcon />}
            to="/gallery"
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

