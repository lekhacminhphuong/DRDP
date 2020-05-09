import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  media: {
    '& img': {
      width: '100%',
      height: 'auto'
    }
  }
}));

function Challenge({ className, ...rest }) {
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
              Challenge
            </Typography>
            <Typography variant="subtitle2">
              People want to answer questions with data, but they don’t have the skills to process or harness the data themselves.
            </Typography>
          </Grid>
          <Grid
            className={classes.media}
            item
            lg={4}
            md={6}
            xs={12}
          >
            <img
              alt="User flows"
              src="/images/presentation/user_flows.png"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Challenge.propTypes = {
  className: PropTypes.string
};

export default Challenge;
