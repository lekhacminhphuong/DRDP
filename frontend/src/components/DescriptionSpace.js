import React, { Component } from 'react';

// render every component for the website
export default class DescriptionSpace extends Component {
    render() {        
        return (
            <div id='descSpace'>
                <p>This graph shows the total number of people served in the selected state for the selected years.</p>
                <p>Select a state using the state filter.</p>
                <p>Select years with the Year filter.</p>
            </div>
        )
    }
}