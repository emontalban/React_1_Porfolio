
import React from 'react';

import aboutImg from "../../../static/assets/images/about/about.png";
import Biography from '../about/biography';

export default function About (){
    return (
    <div className="content-page-wrapper">
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