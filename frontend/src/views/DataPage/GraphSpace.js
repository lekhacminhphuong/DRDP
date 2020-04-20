import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export function GraphSpace (props){
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

        //let filtData = props.dat.filter(d => d['State'] == 'Alaska');
        //console.log(filtData)

        return (
            <div id='graphSpace'>

            {/* UNCOMMENT THIS BEFORE BUILDING */}
            <LineChart
                width={800}
                height={600}
                //data={filtData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Fiscal Year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Total individuals served" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            </div>
        )
}