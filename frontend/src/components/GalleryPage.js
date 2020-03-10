import React, { Component } from 'react';
import Cards from './Cards';

// render every component for the website
export default class GalleryPage extends Component {
    render() {
        return (           
            <div id='gallerySpace'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        )
    }
}