import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';

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
}));

function HomePage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <Container maxWidth="lg">
        <p>This is Admin Page</p>
      </Container>
    </Page>
  );
}

export default HomePage;
