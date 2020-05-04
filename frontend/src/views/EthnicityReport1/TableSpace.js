import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';

export function TableSpace(props) {

    const columns = [
        
        {
            name: 'Hispanic/Latino',
            selector: 'hispanic_latino',
            sortable: true,
        },
        {
            name: 'American Indian/Alaskan Native',
            selector: 'amer_indian_alaskan',
            sortable: true,
        },
        {
            name: 'Asian',
            selector: 'asian',
            sortable: true,
        },
        {
            name: 'Black/African American',
            selector: 'black_afr_american',
            sortable: true,
        },
        {
            name: 'Native Hawaiian/Other Pacific Islander',
            selector: 'hawaiian_pac_islander',
            sortable: true,
        },
        {
            name: 'White',
            selector: 'white',
            sortable: true,
        }
    ];

    if (props.data != undefined) {

        //format data for use in chart
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

        return (
            <div id='tableSpace'>
                <DataTable
                    columns={columns}
                    data={dataObj}
                    pagination
                />
            </div>
        )
    } else {
        return (
            <div>loading</div>
        )
    }

}