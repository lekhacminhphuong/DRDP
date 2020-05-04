import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import General from './General';
import Security from './Security';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(4)
  }
}));

function ProfilePage({ match, history }) {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="DRDP - Profile"
    >
      <Container maxWidth="lg">
        <General />
        <Security className={classes.content} />
      </Container>
    </Page>
  );
}

export default ProfilePage;
