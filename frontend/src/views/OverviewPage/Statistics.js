import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card, 
  Typography, 
  Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function Statistics({ className, ...rest }) {
  const classes = useStyles();
  const numbers = {
    year: '2020',
    database: '2',
    visualization: '2',
    reportEntry: '1'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="center"
        container
        justify="space-between"
      >
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            YEAR ESTABLISHED
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h2">
              {numbers.year}
            </Typography>
          </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            DATABASE
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h2">
              {numbers.database}
            </Typography>
          </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            VISUALIZATION
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h2">
              {numbers.visualization}
            </Typography>
          </div>
        </Grid>
        <Grid
          className={classes.item}
          item
          md={3}
          sm={6}
          xs={12}
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            REPORT ENTRY
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h2">
              {numbers.reportEntry}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

Statistics.propTypes = {
  className: PropTypes.string
};

export default Statistics;
