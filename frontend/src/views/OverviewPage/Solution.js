import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import img from '../../imgs/solution.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  media: {
    '& img': {
      width: '60%',
      height: 'auto'
    }
  }
}));

function Solution({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          justify="space-between"
        >
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              gutterBottom
              variant="h3"
            >
              Solution
            </Typography>
            <Typography variant="subtitle2">
              An easy to use format with a tailored interface for answering specific questions, without data skills. Any question we’ve built into the website can be answered in less than three mouse clicks.             </Typography>
          </Grid>
          <Grid
            className={classes.media}
            item
            lg={4}
            md={6}
            xs={12}
          >
            <img
              alt="solution"
              src={img}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Solution.propTypes = {
  className: PropTypes.string
};

export default Solution;
