import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home"
import About from "./pages/about"
import Blog from "./pages/blog"
import AddBlog from "./pages/add.blog"
import PortfolioDetails from "./portfolio/portfolio-details"
import Auth from "./pages/auth"
import NoMatch from "./portfolio/no-match"


export default class App extends Component {
  render() {
    return (
      <div className="container">    
        <Router>
          <div>
            <NavigationContainer/>
            <Switch>  
              <Route exact path='/' component ={Home}/>
              <Route path= '/about' component ={About}/>
              <Route path= '/auth' component ={Auth}/>
              <Route path= '/blog' component ={Blog}/>
              <Route exact path= '/portfolio/:slug' component ={PortfolioDetails}/>
              <Route path= '/add-Blog' component ={AddBlog}/>  
              <Route component ={NoMatch}/>           
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
