
import React, { Component } from 'react';

import aboutImg from "../../../static/assets/images/about/about.png";
import Biography from '../about/biography';

export default class About extends Component {
    render() {
        return (
        <div className="about-wrapper">
            <div className="left-column"
                style={{
                    backgroundImage: `url(${aboutImg})`
                }}/>

            <div className="right-column">
                <Biography />
            </div>
                    
        
    
        </div>
        );
    }
}