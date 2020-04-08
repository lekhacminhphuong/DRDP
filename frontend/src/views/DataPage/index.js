import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import { DescriptionSpace } from './DescriptionSpace';
import { FilterSpace } from './FilterSpace';
import { GraphTab } from './GraphTab';
import mockdata from './mockupdata.json';

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

function DataPage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <Container maxWidth="lg">
        <DescriptionSpace />
        <FilterSpace />
        <div id='tabSpace'>
          <GraphTab dat={mockdata}/>
        </div>
      </Container>
    </Page>
  );
}

export default DataPage;
