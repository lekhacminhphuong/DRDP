import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';

export function TableSpace(props) {

    const graphData = []
    const columns = [
        
        {
            name: 'Year',
            selector: 'Year',
            sortable: true,
        },
        {
            name: 'Count',
            selector: 'Count',
            sortable: true,
        }
    ];

    if (props.data != undefined) {

        //format data for use in chart
        let vals = [];
        let years = [];

        console.log(years)

        if (props.subReport == 'One PPR') {
            switch (props.ethnicity) {
                case "Hispanic/Latino":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I1.val +
                            props.data[i].PAAT.I1.val +
                            props.data[i].PATBI.I1.val +
                            props.data[i].PAVA.I1.val
                        )
                    }
                    break
                case "American Indian/Alaskan Native":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I2.val +
                            props.data[i].PAAT.I2.val +
                            props.data[i].PATBI.I2.val +
                            props.data[i].PAVA.I2.val
                        )
                    }
                    break
                case "Asian":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I3.val +
                            props.data[i].PAAT.I3.val +
                            props.data[i].PATBI.I3.val +
                            props.data[i].PAVA.I3.val
                        )
                    }
                    break
                case "Black/African American":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I4.val +
                            props.data[i].PAAT.I4.val +
                            props.data[i].PATBI.I4.val +
                            props.data[i].PAVA.I4.val
                        )
                    }
                    break
                case "Native Hawaiian/Other Pacific Islander":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I5.val +
                            props.data[i].PAAT.I5.val +
                            props.data[i].PATBI.I5.val +
                            props.data[i].PAVA.I5.val
                        )
                    }
                    break
                case "White":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I6.val +
                            props.data[i].PAAT.I6.val +
                            props.data[i].PATBI.I6.val +
                            props.data[i].PAVA.I6.val
                        )
                    }
                    break
            }
        }
        if (props.subReport == 'PAAT') {
            switch (props.ethnicity) {
                case "Hispanic/Latino":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAAT.I1.val
                        )
                    }
                    break
                case "American Indian/Alaskan Native":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAAT.I2.val
                        )
                    }
                    break
                case "Asian":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAAT.I3.val
                        )
                    }
                    break
                case "Black/African American":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAAT.I4.val
                        )
                    }
                    break
                case "Native Hawaiian/Other Pacific Islander":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAAT.I5.val
                        )
                    }
                    break
                case "White":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAAT.I6.val
                        )
                    }
                    break
            }
        }
        if (props.subReport == 'PADD') {
            switch (props.ethnicity) {
                case "Hispanic/Latino":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I1.val
                        )
                    }
                    break
                case "American Indian/Alaskan Native":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I2.val
                        )
                    }
                    break
                case "Asian":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I3.val
                        )
                    }
                    break
                case "Black/African American":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I4.val
                        )
                    }
                    break
                case "Native Hawaiian/Other Pacific Islander":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I5.val
                        )
                    }
                    break
                case "White":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PADD.I6.val
                        )
                    }
                    break
            }
        }
        if (props.subReport == 'PATBI') {
            switch (props.ethnicity) {
                case "Hispanic/Latino":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PATBI.I1.val
                        )
                    }
                    break
                case "American Indian/Alaskan Native":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PATBI.I2.val
                        )
                    }
                    break
                case "Asian":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PATBI.I3.val
                        )
                    }
                    break
                case "Black/African American":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PATBI.I4.val
                        )
                    }
                    break
                case "Native Hawaiian/Other Pacific Islander":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PATBI.I5.val
                        )
                    }
                    break
                case "White":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PATBI.I6.val
                        )
                    }
                    break
            }
        }
        if (props.subReport == 'PAVA') {
            switch (props.ethnicity) {
                case "Hispanic/Latino":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAVA.I1.val
                        )
                    }
                    break
                case "American Indian/Alaskan Native":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAVA.I2.val
                        )
                    }
                    break
                case "Asian":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAVA.I3.val
                        )
                    }
                    break
                case "Black/African American":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAVA.I4.val
                        )
                    }
                    break
                case "Native Hawaiian/Other Pacific Islander":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAVA.I5.val
                        )
                    }
                    break
                case "White":
                    for (let i = 0; i < props.length; i++) {
                        years.push(props.data[i].year);
                        vals.push(
                            props.data[i].PAVA.I6.val
                        )
                    }
                    break
            }
        }

        for (let j = 0; j < vals.length; j++) {
            graphData.push(
                { 'Year': years[j], 'Count': vals[j] }
            )
        }

        return (
            <div id='tableSpace'>
                <DataTable
                    columns={columns}
                    data={graphData}
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