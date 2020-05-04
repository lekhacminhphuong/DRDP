import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid
} from '@material-ui/core';
import Page from 'src/components/Page';
import LoginForm from './LoginForm';
import image from 'src/imgs/login_image.png'

function LoginPage() {

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
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <img src={image} height="500px"/>
          </Grid>
        </Grid>
    </Page>
  );
}

export default LoginPage;