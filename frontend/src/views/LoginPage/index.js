import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid, 
  Link 
} from '@material-ui/core';
import Page from 'src/components/Page';
import LoginForm from './LoginForm';
import { Link as RouterLink } from 'react-router-dom';
import image from 'src/imgs/login_image.png'

const useStyles = makeStyles((theme) => ({
  signup: {
    paddingLeft: theme.spacing(20),
  },
}));

function LoginPage() {
  const classes = useStyles();

  return (
    <Page title="DRDP - Login">
      <Grid
        alignItems="center"
        container
        style={{ minHeight: "100vh" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
        >
          <LoginForm />
          <Link
            className={classes.signup}
            color="secondary"
            component={RouterLink}
            to="/signup"
            underline="always"
            variant="subtitle2"
          >
            Don&apos;t have an account?
        </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <img src={image} height="500px" />
        </Grid>
      </Grid>
    </Page>
  );
}

export default LoginPage;