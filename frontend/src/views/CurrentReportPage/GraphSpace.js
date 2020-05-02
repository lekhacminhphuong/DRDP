import React, { useEffect } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
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
            }else if (props.subReport == 'PAVA') {
                vals.push(props.data[j].PAVA.A3.val)
            }
        }
        //format for the graph
        const graphData = []
        for (let i = 0; i < years.length; i++) {
            graphData.push({ Year: years[i], ['Total Served']: vals[i] })
        }

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
                    <Line type="monotone" dataKey="Total Served" stroke="#12384E" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}