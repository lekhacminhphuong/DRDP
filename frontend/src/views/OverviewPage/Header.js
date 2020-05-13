import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';
import img from 'src/imgs/overview.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: img,
  },
  stats: {
    backgroundColor: "#FFD171",
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    paddingTop: 0
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
      <img src={img} width="1185" height="523" />
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
