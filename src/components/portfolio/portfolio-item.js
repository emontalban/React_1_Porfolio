import React from "react";
import {Link} from "react-router-dom"


export default function(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.category}</h4>
            <p>{props.url}</p>

        <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>);

}