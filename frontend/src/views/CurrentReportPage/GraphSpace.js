import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Text
} from 'recharts';

export function GraphSpace(props) {

    if (props.data != undefined) {

        // format the data specific to this graph:
        //get years
        let vals = []
        let years = []
        for (let j = 0; j < 11; j++) {
            years.push(props.data[j].year)
            if (props.subReport == 'One PPR') {
                vals.push(props.data[j].PAAT.A3.val + props.data[j].PADD.A3.val + props.data[j].PATBI.A3.val + props.data[j].PAVA.A3.val)
            } else if (props.subReport == 'PAAT') {
                vals.push(props.data[j].PAAT.A3.val)
            } else if (props.subReport == 'PADD') {
                vals.push(props.data[j].PADD.A3.val)
            } else if (props.subReport == 'PATBI') {
                vals.push(props.data[j].PATBI.A3.val)
            } else if (props.subReport == 'PAVA') {
                vals.push(props.data[j].PAVA.A3.val)
            }
        }
        //format for the graph
        const graphData = []
        for (let i = 0; i < years.length; i++) {
            graphData.push({ Year: years[i], ['Total Served']: vals[i] })
        }

        return (
            <LineChart
                width={900}
                height={500}
                data={graphData}
                margin={{
                    top: 15, right: 30, left: 10, bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Year" label={{ value: 'Year', offset: '-4', position: 'insideBottom' }} />
                <YAxis label={{ value: 'Total number of people served by P&As', angle: -90, position: 'insideBottomLeft', textAnchor: 'middle' }}  />
                <Tooltip />
                <Line type="monotone" dataKey="Total Served" stroke="#12384E" activeDot={{ r: 8 }} />
            </LineChart>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}