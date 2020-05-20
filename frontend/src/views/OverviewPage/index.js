import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Page from 'src/components/Page';
import Header from './Header';
import FAQ from './FAQ';
import Approach from './Approach';
import Solution from './Solution';
import Challenge from './Challenge';

const useStyles = makeStyles(() => ({
  root: {}
}));

function OverviewPage() {
  const classes = useStyles();

  return (
      <Page
        className={classes.root}
        title="DRDP - Overview"
      >
        <Header />
        <Challenge />
        <Approach />
        <Solution />
        <FAQ />
      </Page>
  );
}

export default OverviewPage;
