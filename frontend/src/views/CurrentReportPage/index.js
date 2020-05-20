import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import { FilterSpace } from './FilterSpace';
import { GraphTab } from './GraphTab';
import Context from '../../globalStore/context';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  filter: {
    marginTop: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(6),
  },
}));

function DataPage() {

  const { state, actions } = useContext(Context);
  const [filterState, setFilterState] = useState({
    jurisdiction: 'Alabama',
    subReport: 'One PPR'
  });
  const [filteredData, setFilteredData] = useState();
  const [propLength, setPropLength] = useState();
  const classes = useStyles();

  //function for the filters
  const handleChange = name => event => {
    setFilterState({
      ...filterState,
      [name]: event.target.value,
    })
  };

  function filterData() {
    let filtData = []
    for (let i = 0; i < state.length; i++) {
      if (state[i].jurisdiction == filterState.jurisdiction) {
        filtData.push(state[i])
      }
    }
    setFilteredData(filtData)
    setPropLength(filtData.length)
  }

  useEffect(() => {
    filterData();
  }, [filterState])
  

  return (
    <Page className={classes.root} title="DRDP - Total Population Served">
      <Container maxWidth="lg">
        <Header className={classes.header} />
        <FilterSpace handleChange={handleChange} />
        <div>
          <GraphTab data={filteredData} jurisdiction={filterState.jurisdiction} subReport={filterState.subReport} length={propLength}/>
        </div>
      </Container>
    </Page>
  );
}

export default DataPage;
