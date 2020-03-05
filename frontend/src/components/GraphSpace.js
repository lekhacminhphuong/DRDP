import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from 'victory';
import mockupdata from "../mockupdata"; 

// render every component for the website
export default class GraphSpace extends Component {

    render() {

        return (
            <div id="graphSpace">
                <p>graph space</p>
                <div style={{ width: 700 }}>
                    <VictoryChart domainPadding={20}>
                        
                        <VictoryBar
                            barRatio={25}
                            data={mockupdata}
                            //tooltip
                            labels={({ datum }) => `${datum.ansIntVal}`}
                            labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 0 }} />}
                            // data accessor for x values
                            x="Fiscal Year"
                            // data accessor for y values
                            y="Total individuals served"
                        />
                        <VictoryAxis
                            // tickValues specifies both the number of ticks and where
                            // they are placed on the axis
                            tickValues={[2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]}
                            tickFormat={['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']}
                            label={'year'}
                        />
                        <VictoryAxis
                            dependentAxis
                            // tickFormat specifies how ticks should be displayed
                            domain={[0, 70]}
                            fixLabelOverlap={true}
                            //tickFormat={(x) => (`${x}`)}
                            // label={'Total Served'}
                        />
                    </VictoryChart>
                </div>
            </div>
        )
    }
}