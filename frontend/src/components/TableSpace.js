import React, { Component } from 'react';
import { JsonToTable } from "react-json-to-table";
import mockupdata from "../mockupdata"; 

// render every component for the website
export default class TableSpace extends Component {

    render() {  
        
        console.log("table space says: ")
        console.log(this.props.data)

        return (
            <div id='tableSpace'>
                <JsonToTable json={mockupdata} />
            </div>
        )
    }
}