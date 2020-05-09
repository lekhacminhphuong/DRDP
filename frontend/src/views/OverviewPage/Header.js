import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white
  },
  header: {
    backgroundImage: 'url("src/imgs/overview.jpg")',
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto',
    padding: '80px 24px',
    [theme.breakpoints.up('md')]: {
      padding: '160px 24px'
    }
  },
  mediaContainer: {
    margin: '0 auto',
    maxWidth: 1600,
    padding: theme.spacing(0, 2),
    overflow: 'hidden'
  },
  media: {
    width: '100%'
  },
  stats: {
    backgroundColor: "#FFD171",
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1)
  },
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

function Header({ className, ...rest }) {
  const classes = useStyles();
  const numbers = {
    year: '2020',
    database: '2',
    visualization: '2',
    reportEntry: '1'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.header}>
        <Typography
          align="left"
          gutterBottom
          variant="h1"
        >
          Disability Rights Data Portal - DRDP
        </Typography>
        <Typography
          align="left"
          component="h2"
          variant="subtitle1"
        >
          We dealt with a classic information problem: “how to convert data into information?”. 
          We built a portal in which the end-users could consume visualizations 
          that clearly addressed each high-level “question” in the form of a report. This portal was tailored for 
          those with the most rudimentary data skills, and a very few, but highly designed, use cases. 
          The portal also has a data entry page, designed with similarly strict usability standards, 
          that allows low friction loading into the consolidated database. 
        </Typography>
      </div>
      <div className={classes.stats}>
        <Grid
          alignItems="center"
          className={classes.statsInner}
          container
          justify="center"
          spacing={3}
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
      </div>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
