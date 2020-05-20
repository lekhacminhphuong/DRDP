import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import Page from 'src/components/Page';
import Header from './Header';
import FAQ from './FAQ';
import Approach from './Approach';
import Solution from './Solution';
import Challenge from './Challenge';
import Context from '../../globalStore/context';

const useStyles = makeStyles(() => ({
  root: {}
}));

function OverviewPage() {
  const classes = useStyles();
  const { state, favorites, actions } = useContext(Context);

  //console.log(state)

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
