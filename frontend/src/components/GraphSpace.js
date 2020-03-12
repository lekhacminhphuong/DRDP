import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import mockdata from '../mockupdata.json'

// render every component for the website
export default class GraphSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            State: '',
            GraphData: []
        };
    }

    componentDidMount() {
        this.setState({ State: "Alabama" });
    }

    render() {
        // UNCOMMENT THIS BEFORE BUIDLING
        // let filtData = this.props.data.filter(d => d['JurisdictionName'] == this.state.State &&
        //     d['QuestionDesc'] == "Total individuals served during the year (A1 + A2).");

        // if (this.props.data.length == 0) {
        //     return null;
        // }

        // let gData = [{ "x": filtData[0]["ReportInstanceYear"], "y": filtData[0]["IntAnswerValue"] },
        // { "x": filtData[1]["ReportInstanceYear"], "y": filtData[1]["IntAnswerValue"] },
        // { "x": filtData[2]["ReportInstanceYear"], "y": filtData[2]["IntAnswerValue"] },
        // { "x": filtData[3]["ReportInstanceYear"], "y": filtData[3]["IntAnswerValue"] },
        // { "x": filtData[4]["ReportInstanceYear"], "y": filtData[4]["IntAnswerValue"] },
        // { "x": filtData[5]["ReportInstanceYear"], "y": filtData[5]["IntAnswerValue"] },
        // { "x": filtData[6]["ReportInstanceYear"], "y": filtData[6]["IntAnswerValue"] },
        // { "x": filtData[7]["ReportInstanceYear"], "y": filtData[7]["IntAnswerValue"] }
        // ]


        return (
            <div id='graphSpace'>


            {/* UNCOMMENT THIS BEFORE BUILDING */}
            {/* <LineChart
                width={800}
                height={600}
                data={gData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart> */}
            </div>
        )
    }
}