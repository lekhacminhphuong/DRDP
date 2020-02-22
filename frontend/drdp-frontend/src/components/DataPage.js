import React, { Component } from 'react';
import FilterSpace from './FilterSpace';
import GraphSpace from './GraphSpace';
import DescriptionSpace from './DescriptionSpace';
import TableSpace from './TableSpace';

// render every component for the website
export default class DataPage extends Component {
    render() {        
        return (
            <div>
                <FilterSpace />
                <GraphSpace />
                <DescriptionSpace />
                <TableSpace />
            </div>
        )
    }
}