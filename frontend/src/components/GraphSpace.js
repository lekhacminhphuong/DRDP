import React, { Component } from 'react';
import data from '../mockupdata.json';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

// render every component for the website
export default class GraphSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dat: []
        };
    }

    componentDidMount() {
        this.setState({ dat: data })
        //console.log(this.state.dat)   
    }

    render() {   
        
        let years = data.map(d => d['Fiscal Year']);
        let served = data.map(d => d['Total individuals served']);

        let str = '['
        for (let i = 0; i < years.length; i++) {
            str += '{"year": ' + years[i] + ',"served": ' + served[i] + '},';
        }
        //str[str.length - 1] = "]"
        let str2 = str.substr(0, str.length - 1);
        str2 += "]";
        console.log(str2);

        let obj1 = JSON.parse(str2);
        //console.log("obj1: " + obj1);

        return (
            <div id="graphSpace">
                <p>graph space</p>
                <div style={{width: 500}}>
                <VictoryChart domainPadding={20}>
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickValues={[2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]}
                        tickFormat={['2011', '2012','2013', '2014','2015', '2016','2017', '2018']}
                        label={'year'}
                    />
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`${x}`)}
                        label={'Total Served'}
                    />
                    <VictoryBar
                        barRatio={25}
                        data={obj1}
                        //labels={({ datum }) => `${datum.served}`}
                        // data accessor for x values
                        x="year"
                        // data accessor for y values
                        y="served"
                    />
                </VictoryChart>
            </div>
            </div>
        )
    }
}