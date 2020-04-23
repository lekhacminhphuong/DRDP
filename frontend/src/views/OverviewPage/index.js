import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import Main from './Main';
import Statistics from './Statistics'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  statistics: {
    marginTop: theme.spacing(3),
  }
}));

function OverviewPage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="DRDP - Overview">
      <Container maxWidth="lg">
        <Main />
        <Statistics className={classes.statistics} />
      </Container>
    </Page>
  );
}

export default OverviewPage;
