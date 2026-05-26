import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";




export default class PortfolioContainer extends Component{
    constructor(){
        super();
        console.log("Portfolio container has sido renderizado")

        this.state = {
            pageTitle : "Welcome to my portfolio",
            isLoading: false,
            data :[]
        }
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter(filter){
        this.setState({
            data: this.state.data.filter(item =>{
                return item.category === filter;
            })
        })
    }
    getPortfolioItems() {
    axios
      .get("https://emontalban.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
    PortfolioItem(){   
        return this.state.data.map(element =>{
            return <PortfolioItem key={element.id} title={element.name} url ={element.url} category={element.category} slug={element.id}/>
        })
    }
    
    componentDidMount() {
    this.getPortfolioItems();
  }
    render() {
        if(this.state.isLoading){
            return <div>Loading ........</div>
        }
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>
              
                <div className="categorias">
                    <button onClick={() => this.handleFilter('Frontend')}>Frontend</button>
                    <button onClick={() =>this.handleFilter('Backend')}>Backend</button>
                    <button onClick={() =>this.handleFilter('CSS')}>CSS</button>
                    <button onClick={() =>this.handleFilter('Database')}>Database</button>
                    <button onClick={() =>this.handleFilter('Seguridad')}>Seguridad</button>
                    </div>
                {this.PortfolioItem()}
            </div>

        );
    }
}
