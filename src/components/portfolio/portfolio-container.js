import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component{
    constructor(){
        super();
        console.log("Portfolio container has sido renderizado")

        this.state = {
            pageTitle : "Welcome to my portfolio",
            data :[
                 {"id": 1, "title": "Introducción a React", "category": "Frontend"},
                {"id": 2,"title": "Node.js Básico","category": "Backend"},
                {"id": 3,"title": "Diseño Responsive","category": "CSS"},
                {"id": 4,"title": "Bases de Datos SQL","category": "Database"},
                {"id": 5,"title": "Autenticación JWT","category": "Seguridad"}
            ]
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
    PortfolioItem(){
     
        return this.state.data.map(element =>{
            return <PortfolioItem key={element.id} title={element.title} category={element.category}/>
        })
    }
    
    render() {
        if(this.state.isLoading){
            return <div>Loading ........</div>
        }
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>
                <PortfolioItem/>
                
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
