import React, { Component } from 'react';
import { JsonToTable } from "react-json-to-table";
import mockupdata from "../mockupdata"; 

// render every component for the website
export default class TableSpace extends Component {
    render() {  
        console.log('tablespace data >>>');
        console.log(this.props.dat);
        console.log('tablespace data >>>');      
        return (
            <div>
                <JsonToTable json={mockupdata} />
            </div>
        )
    }
}