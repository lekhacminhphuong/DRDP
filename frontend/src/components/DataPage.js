import React, { Component } from 'react';
import FilterSpace from './FilterSpace';
import DescriptionSpace from './DescriptionSpace';
import * as $ from 'jquery';
import GraphTab from './GraphTab';




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

        return (
            <div id='dataPage'>
                <DescriptionSpace />
                <FilterSpace />
                <div id='tabSpace'>
                    <GraphTab data={this.state.dat}/>
                    <button id='dl-button'>Download</button>
                </div>
            </div>
        )
    }
}