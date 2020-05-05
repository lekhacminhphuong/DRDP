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
            Gallery / Ethnicity Ratios
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
          >
            Ethnicity Ratios
          </Typography>
          <Typography variant="subtitle1">
            This report shows number of people served by ethnicity in the selected state for the selected year.
            Select a state using the State filter.
            Select years with the Year filter.
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
