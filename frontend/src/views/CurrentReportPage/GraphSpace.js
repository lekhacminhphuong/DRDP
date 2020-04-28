import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

export function GraphSpace(props) {
    
    console.log(props.mockdata.length)

    let filtData = []
    for (let i = 0; i < props.mockdata.length; i++) {
        if (props.mockdata[i].jurisdiction == props.jurisdiction) {
            filtData.push(props.mockdata[i])
        }
    }
    console.log(filtData)

    //get years
    let vals = []
    let years = []
    for (let j = 0; j < filtData.length; j++) {
        years.push(filtData[j].year)
        vals.push(filtData[j].PAAT.A3.val + filtData[j].PADD.A3.val + filtData[j].PATBI.A3.val + filtData[j].PAVA.A3.val)
    }

    const graphData = []
    for (let i = 0; i < years.length; i++) {
        graphData.push({Year: years[i], ['Total Served']: vals[i]})
    }

    console.log(graphData)



    return (
        <div id='graphSpace'>

            <LineChart
                width={900}
                height={500}
                data={graphData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Total Served" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    )
}