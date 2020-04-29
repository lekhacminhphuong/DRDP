import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';

export function TableSpace(props) {

    const columns = [
        {
            name: 'Year',
            selector: 'year',
            sortable: true,
        },
        {
            name: 'Jurisdiction',
            selector: 'jurisdiction',
            sortable: true,
        },
        {
            name: 'Total Served',
            selector: 'Total Served',
            sortable: true,
        }
    ];

    const tableData = []

    if (props.data != undefined) {

        //format data for use in chart
        let years = []
        let totalVals = []
        let jur = []

        for (let j = 0; j < 11; j++) {
            
            years.push(props.data[j].year)
            jur.push(props.data[j].jurisdiction)

            if (props.subReport == 'One PPR') {
                totalVals.push(props.data[j].PAAT.A3.val + props.data[j].PADD.A3.val + props.data[j].PATBI.A3.val + props.data[j].PAVA.A3.val)
            }  
            if (props.subReport == 'PAAT') {
                totalVals.push(props.data[j].PAAT.A3.val)
            }  
            if (props.subReport == 'PADD') {
                totalVals.push(props.data[j].PADD.A3.val)
            }  
            if (props.subReport == 'PATBI') {
                totalVals.push(props.data[j].PATBI.A3.val)
            }  
            if (props.subReport == 'PAVA') {
                totalVals.push(props.data[j].PAVA.A3.val)
            }
        }

        for (let i = 0; i < years.length; i++) {
            tableData.push({
                year: years[i],
                ['Total Served']: totalVals[i],
                jurisdiction: jur[i]
            })
        }

        return (
            <div id='tableSpace'>
                <DataTable
                    columns={columns}
                    data={tableData}
                    pagination
                />
            </div>
        )
    } else {
        return(
            <div>loading</div>
        )
    }    
    
}

