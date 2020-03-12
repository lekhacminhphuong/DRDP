import React, { Component } from 'react';
import Cards from './Cards';
import img1 from '../imgs/barchart.png';
import img2 from '../imgs/linechart.png';

// render every component for the website
export default class GalleryPage extends Component {
    render() {

        let descriptions = ["Total Served from 2011-2018 (by jurisdiction)", "Ethnicity Ratios for CAP (all years)"];
        let titles =["Total Served", "Ethnicity Ratios"];
        let imgs = [img2, img1]

        return (           
            <div id='gallerySpace'>
                <Cards title={titles[0]} desc={descriptions[0]} img={imgs[0]}/>
                <Cards title={titles[1]} desc={descriptions[1]} img={imgs[1]}/>
            </div>
        )
    }
}