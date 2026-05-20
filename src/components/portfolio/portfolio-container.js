import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component{
    constructor(){
        super();
        console.log("Portfolio container has sido renderizado")
    }

    PortfolioItem(){
        const data = ["Google","Instagram","Facebook"];
        return data.map(element =>{
            return <PortfolioItem title={element} url={element +".com"}/>
        })
    }
    render() {
        return(
            <div>
                <h2>Aqui estan los item del portfolio</h2>
                <PortfolioItem/>
                {this.PortfolioItem()}
            </div>

        );
    }
}
