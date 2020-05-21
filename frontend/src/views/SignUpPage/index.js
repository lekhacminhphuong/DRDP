import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography, Link } from '@material-ui/core';
import Page from 'src/components/Page';
import img from 'src/imgs/working.svg'
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  filter: {
    marginTop: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(6),
  },
  working: {
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(33)
  },
  message1: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(22),
  },
  message2: {
    paddingTop: theme.spacing(0.5),
    paddingLeft: theme.spacing(22),
  },
  login: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(22),
  }
}));

function SignUpPage(props) {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="DRDP - SignUp"
    >
      <Container maxWidth="lg">
        <div className={classes.working}>
          <img src={img} height="400" />
          <Typography
            className={classes.message1}
            gutterBottom
            variant="subtitle1"
          >
            Sign Up feature is going to be introduced in the next version of DRDP
          </Typography>
          <Typography
            className={classes.message2}
            gutterBottom
            variant="subtitle1"
          >
            At present, if you want to create an account, <b>please email our developers:</b>
          </Typography>
          <Typography
            className={classes.message2}
            gutterBottom
            variant="subtitle1"
          >
            1. lkmp@uw.edu
          </Typography>
          <Typography
            className={classes.message2}
            gutterBottom
            variant="subtitle1"
          >
            2. jtcanton@gmail.com
          </Typography>
          <Link
            className={classes.login}
            color="primary"
            component={RouterLink}
            to="/login"
            underline="always"
            variant="subtitle2"
            onClick={() => props.setSignupClicked(false)}
          >
            Back to login
        </Link>
        </div>
      </Container>
    </Page>
  );
}

export default SignUpPage;
