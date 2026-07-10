import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
        pageTitle: "Welcome to my portfolio",
        isLoading: false,
        data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        if(filter === "CLEAR_FILTERS"){
            this.getPortfolioItems();
        }else
        {
            this.getPortfolioItems(filter)
        }
        
        
    }

    getPortfolioItems(filter = null) {
        axios
        .get("https://odarna.devcamp.space/portfolio/portfolio_items")
        .then(response => {
            if(filter){
                this.setState({
                    data: response.data.portfolio_items.filter(item => {
                        return item.category === filter;
                    })
                });

            }else{
                this.setState({
                data: response.data.portfolio_items
                });

            }
            
        })
        .catch(error => {
            console.log(error);
        });
    }

    portfolioItems() {
        return this.state.data.map(item => {
        return <PortfolioItem key={item.id} item={item} />;
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
        return <div>Loading...</div>;
        }

        return (
        <div className="hompage-wrapper" >
            <div className="filter-links">
                <div className="portfolio-items-wrapper-buttons">
                    <button className="btn"
                                onClick={() =>
                                    this.handleFilter("Vue")
                                }
                                >
                            Vue
                            </button>

                            <button className="btn"
                            onClick={() =>
                                this.handleFilter("React")
                            }
                            >
                            React
                            </button>

                            <button className="btn"
                            onClick={() =>
                                this.handleFilter("JavaScript")
                            }
                            >
                            JavaScript
                            </button>
                            <button className="btn"
                            onClick={() =>
                                this.handleFilter(
                                "CLEAR_FILTERS")
                            }
                            >
                            All
                            </button>
                </div>
                <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
            
            </div>
        </div>
        );
    }
}
