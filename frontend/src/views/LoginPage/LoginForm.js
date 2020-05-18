/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import fire from '../../config/Fire';
import clsx from 'clsx';
import validate from 'validate.js';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' }
  }
};

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
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  const [errorMessage, setErrorMessage] = useState("")
  const [showError, setShowError] = useState(false)
  const history = useHistory();

  const hasError = (field) => (!!(formState.touched[field] && formState.errors[field]));

  const handleChange = (event) => {
    event.persist();

    setFormState((prevFormState) => ({
      ...prevFormState,
      values: {
        ...prevFormState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...prevFormState.touched,
        [event.target.name]: true
      }
    }));
  };

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((prevFormState) => ({
      ...prevFormState,
      isValid: !errors,
      errors: errors || {}
    }));
  }, [formState.values]);

  function login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(formState.values.email, formState.values.password).then((u) => {
    }).catch((error) => {
      setErrorMessage(error.message)
      setShowError(true)
    })
    history.push('/');
  }
  
  let alert;
  if (showError) {
    alert = <Alert variant="outlined" severity="error">{errorMessage}</Alert>   
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
        <p>To login to our demo. Please Enter email: <b>user@user.com</b> and Enter password: <b>useruser</b></p>
        {alert}
        <TextField
          error={hasError('email')}
          fullWidth
          helperText={hasError('email') ? formState.errors.email[0] : null}
          label="Email address"
          name="email"
          onChange={handleChange}
          value={formState.values.email || ''}
          variant="outlined"
        />
        <TextField
          error={hasError('password')}
          fullWidth
          helperText={
            hasError('password') ? formState.errors.password[0] : null
          }
          label="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={formState.values.password || ''}
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
    </form>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
