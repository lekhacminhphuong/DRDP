import React, { Component } from "react";
import {Tabs, Tab} from 'react-bootstrap';
import GraphSpace from './GraphSpace';
import TableSpace from './TableSpace';

export default class GraphTab extends Component {

  render() {

    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Graph">
          <GraphSpace data={this.props.data}/>
        </Tab>
        <Tab eventKey="profile" title="Data">
          <TableSpace data={this.props.data}/>
        </Tab>
      </Tabs>
    )

  }

}
