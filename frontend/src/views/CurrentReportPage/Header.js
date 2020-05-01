import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  startDateButton: {
    marginRight: theme.spacing(1)
  },
  endDateButton: {
    marginLeft: theme.spacing(1)
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
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
        Card Name
      </Typography>
      <Typography variant="subtitle1">
        This graph shows the total number of people served in the selected state for the selected years.
        Select a state using the State filter.
        Select years with the Year filter.
      </Typography>
    </div>
  );
}

