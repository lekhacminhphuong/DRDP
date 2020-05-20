import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Text
} from 'recharts';

export function GraphSpace(props) {

    if (props.data != undefined) {

        // format the data specific to this graph:

        let graphData = []

        for (let j = 0; j < props.length; j++) {
            let year = props.data[j].year;
            let val;

            if (props.subReport == 'One PPR') {
                val = props.data[j].PAAT.A3.val + props.data[j].PADD.A3.val + props.data[j].PATBI.A3.val + props.data[j].PAVA.A3.val
            } else if (props.subReport == 'PAAT') {
                val = props.data[j].PAAT.A3.val
            } else if (props.subReport == 'PADD') {
                val = props.data[j].PADD.A3.val
            } else if (props.subReport == 'PATBI') {
                val = props.data[j].PATBI.A3.val
            } else if (props.subReport == 'PAVA') {
                val = props.data[j].PAVA.A3.val
            }

            graphData.push({ Year: year, ['Total Served']: val })
        }

        function compare(obj1, obj2){
            const a = obj1.Year;
            const b = obj2.Year;
            let comparison = 0;
            if (a > b){
                comparison = 1;
            } else if (a < b){
                comparison = -1;
            }
            return comparison;
        }

        graphData.sort(compare)

        console.log(graphData)

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
                {/* <YAxis label={{ value: 'Total number of people served by P&As', angle: -90, position: 'insideBottomLeft', textAnchor: 'middle' }} */}
                <YAxis label={{ value: 'Total number of people served by P&As', angle: -90, position: 'insideBottomLeft', textAnchor: 'middle' }}   />
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