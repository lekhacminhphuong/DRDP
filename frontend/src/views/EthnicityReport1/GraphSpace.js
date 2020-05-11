import React from 'react';
import {
    PieChart, Pie, Tooltip, Cell
} from 'recharts';

export function GraphSpace(props) {

    let COLORS = ['#031D44', '#0E6BA8', '#92140C', '#FF6700', '#204B57', '#119DA4']

    if (props.data != undefined) {

        let dataObj = [];

        if (props.subReport == 'One PPR') {
            let newObj = {
                'hispanic_latino': props.data[0].PAAT.I1.val + props.data[0].PADD.I1.val + props.data[0].PATBI.I1.val + props.data[0].PAVA.I1.val,
                'amer_indian_alaskan': props.data[0].PAAT.I2.val + props.data[0].PADD.I2.val + props.data[0].PATBI.I2.val + props.data[0].PAVA.I2.val,
                'asian': props.data[0].PAAT.I3.val + props.data[0].PADD.I3.val + props.data[0].PATBI.I3.val + props.data[0].PAVA.I3.val,
                'black_afr_american': props.data[0].PAAT.I4.val + props.data[0].PADD.I4.val + props.data[0].PATBI.I4.val + props.data[0].PAVA.I4.val,
                'hawaiian_pac_islander': props.data[0].PAAT.I5.val + props.data[0].PADD.I5.val + props.data[0].PATBI.I5.val + props.data[0].PAVA.I5.val,
                'white': props.data[0].PAAT.I6.val + props.data[0].PADD.I6.val + props.data[0].PATBI.I6.val + props.data[0].PAVA.I6.val
            }
            dataObj.push(newObj)
        }
        if (props.subReport == 'PAAT') {
            let newObj = {
                'hispanic_latino': props.data[0].PAAT.I1.val,
                'amer_indian_alaskan': props.data[0].PAAT.I2.val,
                'asian': props.data[0].PAAT.I3.val,
                'black_afr_american': props.data[0].PAAT.I4.val,
                'hawaiian_pac_islander': props.data[0].PAAT.I5.val,
                'white': props.data[0].PAAT.I6.val
            }
            dataObj.push(newObj)
        }
        if (props.subReport == 'PADD') {
            let newObj = {
                'hispanic_latino': props.data[0].PADD.I1.val,
                'amer_indian_alaskan': props.data[0].PADD.I2.val,
                'asian': props.data[0].PADD.I3.val,
                'black_afr_american': props.data[0].PADD.I4.val,
                'hawaiian_pac_islander': props.data[0].PADD.I5.val,
                'white': props.data[0].PADD.I6.val
            }
            dataObj.push(newObj)
        }
        if (props.subReport == 'PATBI') {
            let newObj = {
                'hispanic_latino': props.data[0].PATBI.I1.val,
                'amer_indian_alaskan': props.data[0].PATBI.I2.val,
                'asian': props.data[0].PATBI.I3.val,
                'black_afr_american': props.data[0].PATBI.I4.val,
                'hawaiian_pac_islander': props.data[0].PATBI.I5.val,
                'white': props.data[0].PATBI.I6.val
            }
            dataObj.push(newObj)
        }
        if (props.subReport == 'PAVA') {
            let newObj = {
                'hispanic_latino': props.data[0].PAVA.I1.val,
                'amer_indian_alaskan': props.data[0].PAVA.I2.val,
                'asian': props.data[0].PAVA.I3.val,
                'black_afr_american': props.data[0].PAVA.I4.val,
                'hawaiian_pac_islander': props.data[0].PAVA.I5.val,
                'white': props.data[0].PAVA.I6.val
            }
            dataObj.push(newObj)
        }

        const graphData = [
            { name: 'Hispanic/Latino', val: dataObj[0].hispanic_latino },
            { name: 'American Indian/Alaskan Native', val: dataObj[0].amer_indian_alaskan },
            { name: 'Asian', val: dataObj[0].asian },
            { name: 'Black/African American', val: dataObj[0].black_afr_american },
            { name: 'Native Hawaiian/Other Pacific Islander', val: dataObj[0].hawaiian_pac_islander },
            { name: 'White', val: dataObj[0].white }
        ]

        return (
            <div id='graphSpace'>
                <PieChart width={400} height={400}>
                    <Pie dataKey="val" isAnimationActive={true} data={graphData} cx={200} cy={200} outerRadius={160} fill="#8884d8" label >
                        {
                            graphData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}