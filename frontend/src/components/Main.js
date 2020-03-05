import React, { Component } from 'react';
import DataPage from './DataPage';

// render every component for the website
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: [],
            year: []
        }
    }

    componentDidMount() {
        fetch('../data.json').then((response) => {
            console.log(JSON.parse(response.json()))
        })
            .then((data) => {
                let newState = {
                    state: data.state,
                }
                this.setState(newState)
            })
            .catch((err) => {console.log(err)})
    }

    render() {       
        console.log(this.state) 
        return (
            <div>
                <DataPage />
            </div>
        )
    }
}