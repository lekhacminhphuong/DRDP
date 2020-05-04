import React, { useState } from "react";
import { GraphSpace } from './GraphSpace';
import { TableSpace } from './TableSpace';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export function GraphTab(props) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (event, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <div>
      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        indicatorColor="primary"
      >
        <Tab label="Graph" />
        <Tab label="Data" />
      </Tabs>
      <TabPanel value={currentTab} index={0}>
        <GraphSpace data={props.data} jurisdiction={props.jurisdiction} subReport={props.subReport} length={props.length} />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <TableSpace data={props.data} jurisdiction={props.jurisdiction} subReport={props.subReport} length={props.length} />
      </TabPanel>
    </div>
  )
}
