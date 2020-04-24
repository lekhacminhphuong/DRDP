/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import fire from '../../config/Fire';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    paddingLeft: theme.spacing(20),
  },
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

function LoginForm({ className, ...rest }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
    }).catch((error) => {
      console.log(error);
    })
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={login}
    >
      <Typography
        gutterBottom
        variant="h2"
        className="title"
      >
        Sign in
      </Typography>
      <div className={classes.fields}>
        <p>(Enter email: user@user.com; Enter password: useruser)</p>
        <TextField
          fullWidth
          label="Email address"
          name="email"
          onChange={handleEmail}
          value={email}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          onChange={handlePassword}
          type="password"
          value={password}
          variant="outlined"
        />
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        size="large"
        type="submit"
        variant="contained"
      >
        Sign in
      </Button>
      <Link
        align="center"
        color="secondary"
        component={RouterLink}
        to="/auth/register"
        underline="always"
        variant="subtitle2"
      >
        Don&apos;t have an account?
      </Link>
      <br />
      <Link
        align="center"
        color="secondary"
        component={RouterLink}
        to="/auth/register"
        underline="always"
        variant="subtitle2"
      >
        Forget Password?
      </Link>
    </form>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
