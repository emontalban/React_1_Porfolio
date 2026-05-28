import React, { Component } from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home"
import About from "./pages/about"
import Blog from "./pages/blog"
import Contact from "./pages/contact"
import AddBlog from "./pages/add.blog"
import PortfolioDetails from "./portfolio/portfolio-details"
import NoMatch from "./portfolio/no-match"


export default class App extends Component {
  render() {
    return (
      <div className='app'>    
        <Router>
          <div>
            <NavigationContainer/>
            <Switch>  
              <Route exact path='/' component ={Home}/>
              <Route path= '/about' component ={About}/>
              <Route path= '/contact' component ={Contact}/>
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
