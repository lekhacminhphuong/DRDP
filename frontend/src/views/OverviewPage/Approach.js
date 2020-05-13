import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import img from '../../imgs/approach.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
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

function Approach({ className, ...rest }) {
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
              Approach
            </Typography>
            <Typography variant="subtitle2">
              Pilot the format with data and users from 
            </Typography>   
            <Typography variant="subtitle2">
              <a href="https://www.ndrn.org/">National Disability Rights Network (NDRN)</a>
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
              alt="approach"
              src={img}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Approach.propTypes = {
  className: PropTypes.string
};

export default Approach;
