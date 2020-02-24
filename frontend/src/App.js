import React, { Component } from 'react';
import NavBar from './components/NavBar';

// render every component for the website
export default class App extends Component {
    render() {        
        return (
            <div>
                <NavBar />
            </div>
        )
    }
}