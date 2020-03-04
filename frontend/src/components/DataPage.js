import React, { Component, handleChange, value } from 'react';
import FilterSpace from './FilterSpace';
import GraphSpace from './GraphSpace';
import DescriptionSpace from './DescriptionSpace';
import TableSpace from './TableSpace';
import * as $ from 'jquery';
import TabPanel from './TabPanel';




// render every component for the website
export default class DataPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dat: []
        };
    }

    componentDidMount() {
        $.ajax({
            url: './getdata.php',
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log('success');
                this.setState({ dat: data });
                //console.log("state set"); // will print "message"
            }.bind(this),
            error: function (xhr, status, err) {
                console.log('error: ' + err);
                this.setState({ dat: 'bleh' });
            }.bind(this)
        });
    }

    render() {

        //console.log("state contents:");
        //console.log(this.state.dat);

        return (
            <div>
                <DescriptionSpace />
                <FilterSpace />

                <div id='tabSpace'>
                <TabPanel data={this.state.dat}/>
                </div>

                {/* <GraphSpace data={this.state.dat} />
                <TableSpace data={this.state.dat}/> */}
            </div>
        )
    }
}